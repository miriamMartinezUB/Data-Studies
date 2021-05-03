import React from 'react'
import {Grid, List} from "@material-ui/core";
import DataStudiesAppBar from "../components/AppBar";
import DataStudiesTabs from "../components/Tabs";
import Typography from "@material-ui/core/Typography";
import {nameIcons} from "../constants/icons";
import {COLOR_BLUE} from "../constants/colors";
import DataStudiesIconButton from "../components/IconButton";
import DataStudiesData from "../components/Data";

const DataPage = () => {
    const listData = [
        {
            name: "hola",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            columns: ["DataName", "Data1", "Data2", "Data3", "Data4"],
            data: [['Name1', 159, 6.0, 24, 4.0],
                ['Name2', 237, 9.0, 37, 4.3],
                ['Name3', 262, 16.0, 24, 6.0],
                ['Name4', 305, 3.7, 67, 4.3],
                ['Name5', 356, 16.0, 49, 3.9]]
        }
    ]
    return (
        <Grid container direction={"column"}>
            <Grid item>
                <DataStudiesAppBar/>
            </Grid>
            <Grid item justify="flex-start" direction="row-reverse">
                <DataStudiesIconButton
                    name={nameIcons.NEW}
                    color={"primary"}
                    size={"medium"}
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
    )
}

export default DataPage