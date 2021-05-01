import React from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PropTypes from "prop-types";
import DataStudiesDialog from "../Dialog";
import DataStudiesIconButton from "../IconButton";
import {nameIcons} from "../../constants/icons";
import DataStudiesTextArea from "../TextArea";

const DataStudiesDropDown = ({title}) => {
    const [open, setOpen] = React.useState(true);
    const [showDialog, setShowDialog] = React.useState(null);

    const handleClick = () => {
        setOpen(!open);
    };

    const handleOnClickIconMail = () => {
        setShowDialog(true);
        return (<DataStudiesDialog title={"title"}
                                   description={"description"}
                                   textButton={"button text"}
                                   children={
                                       <DataStudiesTextArea
                                           defaultMessage={"Write here"}
                                           minRowSize={10}
                                           maxChars={100}
                                           maxRowSize={10}
                                           required={true}/>

                                   }/>)
    };

    return (//Todo change ListItemIcon to own icon button

        <List
            component="nav"
            aria-labelledby="nested-list-subheader">
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <DataStudiesIconButton name={nameIcons.MAIL} color={"default"} onClick={handleOnClickIconMail}/>
                </ListItemIcon>
                <ListItemText primary={title}/>
                {open ? <ExpandLess/> : <ExpandMore/>}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem>
                        <ListItemText primary="Starred"/>
                    </ListItem>
                </List>
            </Collapse>
        </List>

    )
}

DataStudiesDropDown.propTypes = {
    title: PropTypes.string.isRequired,
}

export default DataStudiesDropDown
