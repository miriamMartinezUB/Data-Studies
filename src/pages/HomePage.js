import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import DataStudiesContentViewLanding from "../components/ContentViewLanding";
import DataStudiesAppFrame from "../components/AppFrame";

const HomePage = () => {
    return (
        <DataStudiesAppFrame>
            <Grid item style={{marginTop: "5em"}}>
                <Grid container item direction={"column"} style={{marginBottom:"2em", padding:"10px"}}>
                    <Typography variant={"h3"} align={"center"}>Welcome to data studies</Typography>
                    <Typography variant={"subtitle1"} align={"center"}>We are very happy to see you, below you can read some information about that we offer</Typography>
                </Grid>
                <DataStudiesContentViewLanding href2='/studies' href1='/data' title2={'Studies'} title1={'Open Data'}
                                               text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis turpis id ex finibus tempor. Proin vel augue dui. Etiam euismod pharetra fringilla. Donec sagittis mi vel quam gravida, in molestie lectus cursus. Aenean sit amet mauris sit amet lorem aliquet porta. Proin ut scelerisque risus. Sed aliquam, neque ut suscipit accumsan, turpis leo varius libero, ut sodales nisl orci a nunc. Nullam ultrices, eros eget ullamcorper scelerisque, lectus tortor vestibulum lorem, vitae vestibulum diam lacus sed purus. Nunc dolor dui, viverra eu dignissim eu, suscipit at velit. Morbi ut tortor suscipit, mattis arcu in, accumsan orci. Nulla sit amet fringilla nibh. Cras sed auctor dui, et ultricies purus."}
                                               text2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis turpis id ex finibus tempor. Proin vel augue dui. Etiam euismod pharetra fringilla. Donec sagittis mi vel quam gravida, in molestie lectus cursus. Aenean sit amet mauris sit amet lorem aliquet porta."}/>
            </Grid>
        </DataStudiesAppFrame>
    )
}

export default HomePage