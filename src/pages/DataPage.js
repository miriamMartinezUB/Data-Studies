import React from 'react'
import {Grid, List, Paper, Typography} from "@material-ui/core";
import {nameIcons} from "../constants/icons";
import DataStudiesIconButton from "../components/IconButton";
import DataStudiesData from "../components/Data";
import DataStudiesAppFrame from "../components/AppFrame";
import {listData} from "../data/data";
import {COLOR_GRAY} from "../constants/colors";

const DataPage = () => {
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
                                {`Data`}
                            </Typography>
                        </Grid>
                        <DataStudiesIconButton
                            name={nameIcons.UPLOAD}
                            background={COLOR_GRAY}
                            size={"small"}
                            text={"Import"}
                            onClick={() => {
                                window.location.href = '/not/implemented'
                            }}
                        />
                    </Grid>
                    <Grid container item direction={"column"}>
                        <List>
                            {listData.map(item => (
                                <DataStudiesData
                                    name={item.name}
                                    description={item.description}
                                    columns={item.columns}
                                    data={item.data}
                                />
                            ))}
                        </List>
                    </Grid>
                </Grid>
            </Paper>

        </DataStudiesAppFrame>

    )
}

export default DataPage