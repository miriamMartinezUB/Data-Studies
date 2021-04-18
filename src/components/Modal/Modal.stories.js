import React from 'react'
import Modal from "./Modal";
import TextArea from "../TextArea";
import 'typeface-roboto'

export default {
    title: "Modal",
    component: Modal
}

export const ModalWithAllArgs = () => (
    <Modal title={"title"}
           description={"description"}
           textButton={"button text"}
           children={
               <TextArea
                   defaultMessage={"Write here"}
                   minRowSize={10}
                   maxChars={100}
                   maxRowSize={10}
                   required={true}/>
           }
    />)