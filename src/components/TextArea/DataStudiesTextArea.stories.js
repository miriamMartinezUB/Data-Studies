import React from 'react'
import DataStudiesTextArea from "./DataStudiesTextArea";

export default {
    title: "DataStudiesTextArea",
    component: DataStudiesTextArea
}

export const TextAreaWithAllArgs = () => (
    <DataStudiesTextArea
        defaultMessage={"Write here"}
        minRowSize={10}
        maxChars={100}
        maxRowSize={10}
        required={true}/>)