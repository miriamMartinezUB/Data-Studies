import React from 'react'
import DataStudiesDialog from "./DataStudiesDialog";
import DataStudiesTextArea from "../TextArea";
import 'typeface-roboto'

export default {
    title: "DataStudiesDialog",
    component: DataStudiesDialog
}

export const ModalWithAllArgs = () => (
    <DataStudiesDialog title={"title"}
                       description={"description"}
                       textButton={"button text"}
                       children={
               <DataStudiesTextArea
                   defaultMessage={"Write here"}
                   minRowSize={10}
                   maxChars={100}
                   maxRowSize={10}
                   required={true}/>
           }
    />)