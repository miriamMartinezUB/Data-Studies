import React from 'react'
import DataStudiesButton from "./DataStudiesButton";
import {COLOR_BLUE} from "../../constants/colors";

/*export default {
    title: "DataStudiesButton",
    component: DataStudiesButton
    //Creates specific parameters for the story
    parameters: {
      backgrounds: {
        values: [
          { name: 'red', value: '#f00' },
          { name: 'green', value: '#0f0' },
          { name: 'blue', value: '#00f' },
        ],
      },
    },
}*/
export default {
    title: "DataStudiesButton",
    component: DataStudiesButton
}



export const ButtonWithAllArgs = () => (
    <DataStudiesButton
        variant={"contained"}
        color={"primary"}
        size={"small"}
        background={COLOR_BLUE}
        label={"Button"}
        onClick={() => {
            window.location.href='/studies'
        }}
    />
)
/*export const ButtonWithAllArgs = () => (
    <DataStudiesButton
        background={"#ff0"}
        label={"PrimaryButton"}
    />
)*/
/*export const Primary = () => <DataStudiesButton1 background="#ff0" label="PrimaryButton" />;
export const Secondary = () => <DataStudiesButton2 background="#0f0" label="SecondaryButton" />;
export const Tertiary = () => <DataStudiesButton3 background="#00f" label="TertiaryButton" />;*/

/*export const ButtonWithAllArgs = () => (
    <DataStudiesButton
        defaultMessage={"Write here"}
        minRowSize={5}
        maxChars={20}
        maxRowSize={50}
        required={true}/>)*/
