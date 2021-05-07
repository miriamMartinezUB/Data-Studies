import React from 'react'
import {Grid} from "@material-ui/core";
import DataStudiesAppFrame from "../components/AppFrame";
import {useLocation} from 'react-router-dom'
import DataStudiesTabs from "../components/Tabs";
import Typography from "@material-ui/core/Typography";
import {COLOR_GRAY} from "../constants/colors";

const StudyPage = () => {
    const location = useLocation();
    let path_array = location.pathname.split("/");

    const studyTabs = [
        {
            labelTab: "Documentation",
            linkTab: "/not/implemented",
        },
        {
            labelTab: "Forms",
            linkTab: `/study/${path_array[path_array.length - 1]}/forms`,
        },
        {
            labelTab: "Add researcher",
            linkTab: "/not/implemented",
        }
    ];

    return (
        <DataStudiesAppFrame>
            <Grid container direction={"column"} alignItems={"center"}>
                <Grid item style={{margin:"20px"}}>
                    <Typography display={'inline'} variant={"h4"}>
                        {`Manage study `}
                    </Typography>
                    <Typography display={'inline'} variant={"h4"}>
                        <b>{path_array[path_array.length - 1]}</b>
                    </Typography>
                </Grid>
                <Grid item justify="center"  style={{display: "grid", marginBottom:"20px"}}>
                        <DataStudiesTabs tabsInfo={studyTabs}/>
                </Grid>
                <Grid item >
                    <Typography variant={"body1"} align={"justify"} style={{margin:"2px 15%"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec gravida felis. Nam facilisis
                        arcu
                        sed tempor ornare. Aenean laoreet at leo ut aliquam. Proin pharetra risus id orci tristique
                        vehicula. Duis consequat efficitur neque. Suspendisse fermentum cursus blandit. Aliquam varius
                        tortor id sapien laoreet, mollis semper velit bibendum. Quisque fringilla, enim in molestie
                        placerat, ex sapien commodo sem, eu luctus sem odio at eros. In ac massa id felis molestie
                        dapibus
                        eget non risus. Proin nec finibus purus. Pellentesque et egestas mauris, non varius tellus.
                        Aenean
                        viverra accumsan maximus. Duis ac urna id neque molestie tempor porta non nibh. Vestibulum
                        euismod
                        eget neque eu malesuada. Integer id sapien rhoncus, porttitor arcu sit amet, fermentum quam.

                        Phasellus consectetur massa eget imperdiet venenatis. In eget enim a felis scelerisque tincidunt
                        eget ut lorem. Suspendisse potenti. Vestibulum egestas mi vel odio vulputate, et maximus eros
                        vehicula. Vivamus tincidunt rutrum aliquet. Etiam efficitur non quam vitae maximus. Maecenas
                        efficitur laoreet justo sit amet ornare. Maecenas est metus, sagittis egestas nulla non, lacinia
                        mattis magna. Aenean vel nisi tortor. Duis et suscipit justo. Suspendisse molestie mauris
                        dignissim
                        augue dignissim vehicula in a enim. Mauris ac feugiat quam. Aliquam ex ligula, scelerisque sed
                        est
                        ut, aliquam consequat nisl.
                    </Typography>
                </Grid>
            </Grid>
        </DataStudiesAppFrame>
    )
}

export default StudyPage