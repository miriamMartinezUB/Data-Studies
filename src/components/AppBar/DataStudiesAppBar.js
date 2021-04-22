import React from 'react';
import DataStudiesTabs from "../Tabs";
import PropTypes from 'prop-types';
import {AppBar, makeStyles} from "@material-ui/core";
import DataStudiesDialog from "../Dialog";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    tab: {
        marginRight: theme.spacing(2),
    },
}));

const DataStudiesAppBar = ({title}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <DataStudiesTabs title="title"/>
            </AppBar>
        </div>
    );
}

DataStudiesAppBar.propTypes = {
    title: PropTypes.string
}

export default DataStudiesAppBar
