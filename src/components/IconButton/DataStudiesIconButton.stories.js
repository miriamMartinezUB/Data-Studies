import React from 'react'
import DataStudiesIconButton from "./DataStudiesIconButton";
import {nameIcons} from "../../constants/icons";
import {COLOR_BLUE} from "../../constants/colors";


export default {
    title: "DataStudiesIconButton",
    component: DataStudiesIconButton
}


export const IconButtonWithAllArgs = () => (
    <DataStudiesIconButton
        name={nameIcons.USER}
        color={"secondary"}
        size={"medium"}
        background={COLOR_BLUE}
        onClick={() => {
            window.location.href='/studies'
        }}
    />
)