import React from 'react'
import {Grid} from "@material-ui/core";
import DataStudiesAppBar from "../components/AppBar";
import Typography from "@material-ui/core/Typography";
import DataStudiesContentViewLanding from "../components/ContentViewLanding";
import 'typeface-roboto'
import DataStudiesTabs from "../components/Tabs";

const StudyPage = () => {
    return (
        <Grid container direction={"column"}>
            <Grid item>
                <DataStudiesAppBar/>
            </Grid>
            <Grid item>
                <DataStudiesTabs />
            </Grid>

        </Grid>
    )
}

export default StudyPage