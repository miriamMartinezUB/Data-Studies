import React from 'react'
import DataStudiesData from "./DataStudiesData";

export default {
    title: "DataStudiesData",
    component: DataStudiesData
}

export const ObjectData = () => (
    <DataStudiesData name={"Dataset name"}
                     description={"Description"}
                     columns={["DataName", "Data1", "Data2", "Data3", "Data4"]}
                     data={[['Name1', 159, 6.0, 24, 4.0],
                         ['Name2', 237, 9.0, 37, 4.3],
                         ['Name3', 262, 16.0, 24, 6.0],
                         ['Name4', 305, 3.7, 67, 4.3],
                         ['Name5', 356, 16.0, 49, 3.9]]}
    />)