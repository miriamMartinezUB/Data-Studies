import React from 'react'
import DataStudiesTabs from "./DataStudiesTabs";
import 'typeface-roboto'

export default {
    title: "DataStudiesTabs",
    component: DataStudiesTabs
}

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

export const ModalWithAllArgs = () => (
    <DataStudiesTabs tabsInfo={tabs}/>
)