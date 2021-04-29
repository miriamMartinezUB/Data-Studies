import React from 'react';
import DataStudiesTabs from "../Tabs";
import PropTypes from 'prop-types';
import {AppBar, makeStyles, Toolbar} from "@material-ui/core";
import {COLOR_BLUE} from "../../constants/colors";
import {nameIcons} from "../../constants/icons";
import DataStudiesIconButton from "../IconButton";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    tab: {
        marginRight: theme.spacing(2),
    },
    toolbarButtons: {
        marginLeft: "auto",
    }
}));

const DataStudiesAppBar = ({title}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{'background': COLOR_BLUE}}>
                <DataStudiesTabs title="title"/>
                <div className={classes.toolbarButtons}>
                    <DataStudiesIconButton name={nameIcons.USER}/>
                </div>
            </AppBar>
        </div>
    );
}

DataStudiesAppBar.propTypes = {
    title: PropTypes.string
}

export default DataStudiesAppBar
