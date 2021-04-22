import React from 'react';
import PropTypes from 'prop-types';
import {Tab, Tabs, Link} from "@material-ui/core";

const DataStudiesTabs = ({title}) => {
    const tabsProps = {
        labelTabData: "Data",
        labelTabStudies: "Studies",
        linkTabData: "/data",
        linkTabStudies: "/studies"
    };

    return (
        <Tabs>
            <Tab label={tabsProps.labelTabData} href={tabsProps.linkTabData}/>
            <Tab label={tabsProps.labelTabStudies} href={tabsProps.linkTabStudies}/>
        </Tabs>
    );
}

DataStudiesTabs.propTypes = {
    title: PropTypes.string
}

export default DataStudiesTabs;