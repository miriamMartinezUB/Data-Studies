import React from 'react'
import DataStudiesStudyButton from "./DataStudiesStudyButton";

export default {
    title: "DataStudiesStudyButton",
    component: DataStudiesStudyButton
}

export const ButtonWithAllArgs = () => (
    <DataStudiesStudyButton name={"Study name"}
                       date={"01/01/2021"}
                       description={"Description"}
    />)