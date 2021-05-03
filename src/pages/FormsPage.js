import React from 'react'
import {Grid, List} from "@material-ui/core";
import DataStudiesAppBar from "../components/AppBar";
import DataStudiesTabs from "../components/Tabs";
import Typography from "@material-ui/core/Typography";
import {nameIcons} from "../constants/icons";
import {COLOR_BLUE} from "../constants/colors";
import DataStudiesIconButton from "../components/IconButton";
import DataStudiesObjectButton from "../components/ObjectButton";
import DataStudiesTextArea from "../components/TextArea";
import DataStudiesDialog from "../components/Dialog";

const FormsPage = () => {
    const [openModal, setOpenModal] = React.useState(false);


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
            {openModal && <DataStudiesDialog title={"title"}
                               description={"description"}
                               textButton={"button text"}
                               children={
                                   <DataStudiesTextArea
                                       defaultMessage={"Write here"}
                                       minRowSize={10}
                                       maxChars={100}
                                       maxRowSize={10}
                                       required={true}/>
                               }
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
}

export default FormsPage