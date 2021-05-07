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

const DataStudiesAppBar = ({tabs, showIcon,background}) => {
    const classes = useStyles();

    if(showIcon == null){
        showIcon=true;
    }
    if(background == null){
        background=COLOR_BLUE;
    }
    if(tabs==null){
        tabs = [
            {
                labelTab: "Home",
                linkTab: "/",
            },
            {
                labelTab: "Data",
                linkTab: "/data",
            },
            {
                labelTab: "Studies",
                linkTab: "/studies"
            }
        ];
    }
    return (
        <div className={classes.root}>
            <Grid container
                  justify="center">
                <AppBar position="sticky" style={{'background': background}}>
                    <Toolbar variant="dense">
                        <DataStudiesTabs tabsInfo={tabs}/>
                        <div className={classes.toolbarButtons}>
                            {showIcon && <DataStudiesIconButton name={nameIcons.USER} color={"inherit"} onClick={() => {
                                window.location.href = '/not/implemented'
                            }}/>}
                        </div>
                    </Toolbar>
                </AppBar>
            </Grid>
        </div>
    );
}

DataStudiesAppBar.propTypes = {
    showIcon:PropTypes.bool,
    tabs:PropTypes.any,
    background:PropTypes.string,
}

export default DataStudiesAppBar
