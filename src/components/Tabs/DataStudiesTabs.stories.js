import React from 'react'
import DataStudiesTabs from "./DataStudiesTabs";
import 'typeface-roboto'

export default {
    title: "DataStudiesTabs",
    component: DataStudiesTabs
}

const tabs = [
    {
        labelTab: "Documentation",
        linkTab: "/not/implemented",
    },
    {
        labelTab: "Forms",
        linkTab: "/forms"
    },
    {
        labelTab: "Add researcher",
        linkTab: "/not/implemented"
    }
];

export const ModalWithAllArgs = () => (
    <DataStudiesTabs tabsInfo={tabs}/>
)