import React from 'react';
import DataStudiesTabs from "../Tabs";
import PropTypes from 'prop-types';
import {AppBar, makeStyles, Toolbar} from "@material-ui/core";
import {COLOR_BLUE} from "../../constants/colors";
import {nameIcons} from "../../constants/icons";
import DataStudiesIconButton from "../IconButton";
import Grid from "@material-ui/core/Grid";

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

    const tabs = [
        {
            labelTab: "Data",
            linkTab: "/data",
        },
        {
            labelTab: "Studies",
            linkTab: "/studies"
        }
    ];

    return (
        <div className={classes.root}>
            <Grid container
                  justify="center">
                <AppBar position="static" style={{'background': COLOR_BLUE}}>
                    <Toolbar variant="dense">
                        <DataStudiesTabs tabsInfo={tabs}/>
                        <div className={classes.toolbarButtons}>
                            <DataStudiesIconButton name={nameIcons.USER} color={"white"}/>
                        </div>
                    </Toolbar>
                </AppBar>
            </Grid>
        </div>
    );
}

DataStudiesAppBar.propTypes = {
    title: PropTypes.string
}

export default DataStudiesAppBar
