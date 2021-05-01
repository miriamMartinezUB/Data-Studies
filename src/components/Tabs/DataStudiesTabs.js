import React from 'react';
import PropTypes from 'prop-types';
import {Tab, Tabs, Link} from "@material-ui/core";

const DataStudiesTabs = ({tabsInfo}) => {
    return (
        <Tabs>
            {tabsInfo.map(tab => (
                <Tab label={tab.labelTab} href={tab.linkTab}/>
            ))}
        </Tabs>
    );
}

DataStudiesTabs.propTypes = {
    tabsInfo: PropTypes.any
}

export default DataStudiesTabs;