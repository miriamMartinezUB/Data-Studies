import React, {useRef} from 'react'
import {Grid, GridList, GridListTile, GridListTileBar, List, Paper, Typography, TextField} from "@material-ui/core";
import {nameIcons} from "../constants/icons";
import DataStudiesIconButton from "../components/IconButton";
import DataStudiesObjectButton from "../components/ObjectButton";
import DataStudiesDialog from "../components/Dialog";
import 'typeface-roboto'
import DataStudiesTextArea from "../components/TextArea";
import {useHistory, useLocation} from "react-router-dom";
import {listForms, listImages} from "../data/forms";
import DataStudiesAppFrame from "../components/AppFrame";
import {COLOR_GRAY, COLOR_LIGHT_BLUE} from "../constants/colors";
import DataStudiesTabs from "../components/Tabs";

const FormsPage = () => {
    const location = useLocation();
    let path_array = location.pathname.split("/");
    const [openModal, setOpenModal] = React.useState(false);
    const history = useHistory();
    const [disableModalButton, setDisableModalButton] = React.useState(true);
    const newFormName = useRef('')

    const formsTabs = [
        {
            labelTab: "Documentation",
            linkTab: "/not/implemented",
            isSelected:false
        },
        {
            labelTab: "Forms",
            linkTab: `/study/${path_array[path_array.length - 2]}/forms`,
            isSelected:true
        },
        {
            labelTab: "Add researcher",
            linkTab: "/not/implemented",
            isSelected:false
        }
    ];

    return (
        <Grid container direction={"column"}>
            {openModal && <DataStudiesDialog title={"New form"}
                               description={"Please choose template"}
                               textButton={"Create"}
                               children={
                                   <div>
                                       <TextField
                                           style={{marginBottom: "20px"}}
                                           id="outlined-basic"
                                           label="New form name"
                                          variant="outlined"
                                           inputRef={newFormName}
                                       />
                                       <DataStudiesTextArea
                                           defaultMessage={"New form description"}
                                           minRowSize={10}
                                           maxChars={100}
                                           maxRowSize={10}
                                           onChange={() => {}}
                                       />
                                       <GridList cellHeight={160} cols={2}>
                                           {listImages.map(image => (
                                               <GridListTile key={image.link} onClick={function (){}}>
                                                   <div className="trim" style={{maxHeight: "160px", overflow: "hidden"}}>
                                                       <input
                                                           type={"image"}
                                                           src={image.link}
                                                           alt={image.link}
                                                           style={{maxWidth: "100%"}}
                                                           onClick={function () {setDisableModalButton(false)}}
                                                       />
                                                   </div>
                                                   <GridListTileBar
                                                       title={image.title}
                                                   />
                                               </GridListTile>
                                           ))}
                                       </GridList>
                                   </div>
                               }
                             onClose={() => {
                                 history.push(`form/${newFormName.current.value}/reports`);
                             }}
                             onCancel={()=>{
                                 setOpenModal(false);
                                 setDisableModalButton(true);
                             }}
                             disableModal={disableModalButton}
            />}
        <DataStudiesAppFrame>
            <Grid container direction={"column"} alignItems={"center"}>
                <Grid item style={{margin: "20px"}}>
                    <Typography display={'inline'} variant={"h4"}>
                        {`Manage study `}
                    </Typography>
                    <Typography display={'inline'} variant={"h4"}>
                        <b>{path_array[path_array.length - 2]}</b>
                    </Typography>
                </Grid>
                <Grid item justify="center" style={{display: "grid"}}>
                    <DataStudiesTabs tabsInfo={formsTabs}/>
                </Grid>
                <Paper elevation={3} style={{marginLeft: "20px",marginRight: "20px",marginBottom: "20px"}}>
                    <Grid container item
                          direction={"column"}
                          style={{padding: "20px"}}>
                        <Grid container item
                              alignItems={"center"}
                              direction={"row"}
                              justify={"space-between"}
                              style={{marginBottom: "20px"}}>
                            <Grid item>
                                <Typography display={'inline'} variant={"h4"}>
                                    {`My Forms`}
                                </Typography>
                            </Grid>
                            <DataStudiesIconButton
                                name={nameIcons.NEW}
                                background={COLOR_GRAY}
                                size={"small"}
                                text={"New Form"}
                                onClick={() => {
                                    setOpenModal(true);
                                }}
                            />
                        </Grid>
                        <Grid container direction={"column"}>
                            <Grid container item direction={"column"}>
                                <List>
                                    {listForms.map(item => (
                                        <DataStudiesObjectButton
                                            path={`/study/${path_array[path_array.length - 2]}/form/${item.name}/reports`}
                                            name={item.name}
                                            date={item.date}
                                            description={item.description}/>
                                    ))}
                                </List>
                            </Grid>
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </DataStudiesAppFrame>
        </Grid>
    )
};

export default FormsPage;