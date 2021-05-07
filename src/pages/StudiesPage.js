import React from 'react'
import {Grid, List, Paper, Typography} from "@material-ui/core";
import {nameIcons} from "../constants/icons";
import DataStudiesIconButton from "../components/IconButton";
import DataStudiesObjectButton from "../components/ObjectButton";
import {listStudies} from "../data/studies";
import DataStudiesAppFrame from "../components/AppFrame";
import {COLOR_GRAY} from "../constants/colors";

const StudiesPage = () => {

    return (
        <DataStudiesAppFrame>
            <Paper elevation={3} style={{margin: "20px"}}>
                <Grid container item
                      direction={"column"}
                      style={{padding: "20px"}}>
                    <Grid container item
                          alignItems={"center"}
                          direction={"row"}
                          justify={"space-between"}
                          style={{marginBottom: "20px"}}>
                        <Grid>
                            <Typography display={'inline'} variant={"h4"}>
                                {`My Studies`}
                            </Typography>
                        </Grid>
                        <DataStudiesIconButton
                            name={nameIcons.NEW}
                            background={COLOR_GRAY}
                            size={"small"}
                            text={"New Study"}
                            onClick={() => {
                                window.location.href = '/not/implemented'
                            }}
                        />
                    </Grid>
                    <Grid container direction={"column"}>
                        <Grid container item direction={"column"}>
                            <List>
                                {listStudies.map(item => (
                                    <DataStudiesObjectButton path={`study/${item.name}/forms`}
                                                             name={item.name}
                                                             date={item.date}
                                                             description={item.description}/>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </DataStudiesAppFrame>
    )
}

export default StudiesPage