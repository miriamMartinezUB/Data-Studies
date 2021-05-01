import React from 'react'
import DataStudiesObjectButton from "./DataStudiesObjectButton";

export default {
    title: "DataStudiesObjectButton",
    component: DataStudiesObjectButton
}

export const StudyButtonWithAllArgs = () => (
    <DataStudiesObjectButton name={"Study name"}
                             date={"01/01/2021"}
                             description={"Description"}
    />)