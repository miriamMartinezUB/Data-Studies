import React from 'react'
import DataStudiesStudyButton from "./DataStudiesStudyButton";

export default {
    title: "DataStudiesStudyButton",
    component: DataStudiesStudyButton
}

export const StudyButtonWithAllArgs = () => (
    <DataStudiesStudyButton name={"Study name"}
                       date={"01/01/2021"}
                       description={"Description"}
    />)