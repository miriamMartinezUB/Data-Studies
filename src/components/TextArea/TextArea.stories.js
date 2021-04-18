import React from 'react'
import TextArea from "./TextArea";

export default {
    title: "TextArea",
    component: TextArea
}

export const TextAreaWithAllArgs = () => (
    <TextArea
        defaultMessage={"Write here"}
        minRowSize={10}
        maxChars={100}
        maxRowSize={10}
        required={true}/>)