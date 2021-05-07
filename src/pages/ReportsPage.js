import React from 'react'
import {Grid, Paper} from "@material-ui/core";
import DataStudiesTable from "../components/Table";
import {useLocation} from "react-router-dom";
import {headTable, reports} from "../data/reports";
import DataStudiesAppFrame from "../components/AppFrame";
import Typography from "@material-ui/core/Typography";
import DataStudiesTabs from "../components/Tabs";

const ReportsPage = () => {

    const location = useLocation();
    let path_array = location.pathname.split("/");

    const reportsTabs = [
        {
            labelTab: "Questions",
            linkTab: "/not/implemented",
            isSelected: false
        },
        {
            labelTab: "Reports",
            linkTab: `/study/${path_array[path_array.length - 4]}/form/${path_array[path_array.length - 2]}/reports`,
            isSelected: true
        }
    ];

    return (
        <DataStudiesAppFrame>
            <Grid container item direction={"column"}>
                <Grid container item
                      direction={"column"}
                      alignItems={"center"}
                      style={{marginBottom: "20px", marginTop: "20px"}}>
                    <Grid item alignContent={"center"}>
                        <Typography display={'inline'} variant={"h3"}>
                            {"Manage form"}
                        </Typography>
                        <Typography display={'inline'} variant={"h3"}>
                            <b>{` ${path_array[path_array.length - 2]} `}</b>
                        </Typography>
                    </Grid>
                    <Grid item alignContent={"center"}>
                        <Typography display={'inline'} variant={"h6"} style={{ color: "#585858" }}>
                            {`That form belongs to study `}
                        </Typography>
                        <Typography display={'inline'} variant={"h6"} style={{ color: "#585858" }}>
                            <b>{path_array[path_array.length - 4]}</b>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item justify="center" style={{display: "grid"}}>
                    <DataStudiesTabs tabsInfo={reportsTabs}/>
                </Grid>
                <Paper elevation={3} style={{padding: "10px",marginLeft: "20px",marginRight: "20px",marginBottom: "20px"}}>
                    <Grid  item style={{margin: "20px"}}>
                        <DataStudiesTable rows={reports}
                                          columns={headTable}
                                          nameForm={path_array[path_array.length - 2]}
                                          nameStudy={path_array[path_array.length - 4]}/>
                    </Grid>
                </Paper>
            </Grid>
        </DataStudiesAppFrame>
    )
}

export default ReportsPage