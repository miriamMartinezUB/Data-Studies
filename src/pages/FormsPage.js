import React from 'react'
import {Grid, GridList, GridListTile, GridListTileBar, List} from "@material-ui/core";
import DataStudiesAppBar from "../components/AppBar";
import {nameIcons} from "../constants/icons";
import DataStudiesIconButton from "../components/IconButton";
import DataStudiesObjectButton from "../components/ObjectButton";
import DataStudiesDialog from "../components/Dialog";
import {useHistory} from "react-router-dom";
import 'typeface-roboto'

const FormsPage = () => {
    const [openModal, setOpenModal] = React.useState(false);
    const history = useHistory();

    const listImages = [
        {
            link: "https://www.joantrave.com/gallery/template_blank.png",
            title: "Blank template"
        },
        {
            link: "https://www.joantrave.com/gallery/template_one.png",
            title: "Template One"
        },
        {
            link: "https://www.joantrave.com/gallery/template_two.png",
            title: "Template Two"
        },
        {
            link: "https://www.joantrave.com/gallery/template_three.png",
            title: "Template Three"
        },
        {
            link: "https://www.joantrave.com/gallery/template_four.png",
            title: "Template Four"
        }
    ]

    const listForms = [
        {
            name: "hola",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "form"
        },
        {
            name: "adeu",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "form"
        },
        {
            name: "fins",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "form"
        },
        {
            name: "aviat",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "form"
        },
        {
            name: "vaig",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "form"
        },
        {
            name: "a",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "form"
        },
        {
            name: "ffhh",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "form"
        },
        {
            name: "amorir",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "form"
        }
    ]
    return (
        <Grid container direction={"column"}>
            {openModal && <DataStudiesDialog title={"New form"}
                               description={"Please choose template"}
                               textButton={"Create"}
                               children={
                                   <GridList cellHeight={160} cols={2}>
                                       {listImages.map(image => (
                                           <GridListTile key={image.link} onClick={function (){}}>
                                               <div className="trim" style={{maxHeight: "160px", overflow: "hidden"}}>
                                                   <input type={"image"} src={image.link} alt={image.link} style={{maxWidth: "100%"}}/>
                                               </div>
                                               <GridListTileBar
                                                   title={image.title}
                                               />
                                           </GridListTile>
                                       ))}
                                   </GridList>
                               }
                             onClose={() => {
                                 history.push(`/form/hola`);
                             }}
            />}
            <Grid item>
                <DataStudiesAppBar/>
            </Grid>
            <Grid item justify="flex-start" direction="row-reverse">
                <DataStudiesIconButton
                    name={nameIcons.NEW}
                    color={"primary"}
                    size={"medium"}
                    onClick={() => {
                        setOpenModal(true);
                    }}
                />
            </Grid>
            <Grid container item direction={"column"}>
                <List>
                    {listForms.map(item => (
                        <DataStudiesObjectButton name={item.name}
                                                 date={item.date}
                                                 description={item.description}
                                                 type={item.type}
                        />
                    ))}
                </List>
            </Grid>
        </Grid>
    )
};

export default FormsPage