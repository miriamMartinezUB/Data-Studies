import React from 'react'
import {Grid, List} from "@material-ui/core";
import DataStudiesAppBar from "../components/AppBar";
import DataStudiesTabs from "../components/Tabs";
import Typography from "@material-ui/core/Typography";
import {nameIcons} from "../constants/icons";
import {COLOR_BLUE} from "../constants/colors";
import DataStudiesIconButton from "../components/IconButton";
import DataStudiesObjectButton from "../components/ObjectButton";

const SutiesPage = () => {
    const listStudies = [
        {
            name: "hola",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "study"
        },
        {
            name: "adeu",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "study"
        },
        {
            name: "fins",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "study"
        },
        {
            name: "aviat",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "study"
        },
        {
            name: "vaig",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "study"
        },
        {
            name: "a",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "study"
        },
        {
            name: "ffhh",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "study"
        },
        {
            name: "amorir",
            date: "2021-03-05",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat massa metus, vitae dapibus massa lacinia vel. Aenean laoreet, sem et consectetur tempor, tellus sem luctus nisi, sed eleifend quam urna quis urna. Donec feugiat ullamcorper sollicitudin.",
            type: "study"
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
                    {listStudies.map(item => (
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
}

export default SutiesPage