import React from 'react'
import {Grid} from "@material-ui/core";
import DataStudiesAppBar from "../components/AppBar";
import DataStudiesContentViewLanding from "../components/ContentViewLanding";
import {useLocation} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import 'typeface-roboto'

const FormPage = () => {
    const location = useLocation();
    let path_array = location.pathname.split("/");
    return (
        <Grid container direction={"column"}>
            <Grid item>
                <DataStudiesAppBar/>
            </Grid>
            <Grid item style={{margin: "4em"}}>
                <Typography variant="h2" color="inherit" align={"center"}>
                    {path_array[path_array.length - 1]}
                </Typography>
            </Grid>
            <Grid item>
                <DataStudiesContentViewLanding href2={`/form/${path_array[path_array.length - 1]}/reports`} href1='/not/implemented' title2={'Reports'} title1={'Questions'}
                                               text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis turpis id ex finibus tempor. Proin vel augue dui. Etiam euismod pharetra fringilla. Donec sagittis mi vel quam gravida, in molestie lectus cursus. Aenean sit amet mauris sit amet lorem aliquet porta. Proin ut scelerisque risus. Sed aliquam, neque ut suscipit accumsan, turpis leo varius libero, ut sodales nisl orci a nunc. Nullam ultrices, eros eget ullamcorper scelerisque, lectus tortor vestibulum lorem, vitae vestibulum diam lacus sed purus. Nunc dolor dui, viverra eu dignissim eu, suscipit at velit. Morbi ut tortor suscipit, mattis arcu in, accumsan orci. Nulla sit amet fringilla nibh. Cras sed auctor dui, et ultricies purus."}
                                               text2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis turpis id ex finibus tempor. Proin vel augue dui. Etiam euismod pharetra fringilla. Donec sagittis mi vel quam gravida, in molestie lectus cursus. Aenean sit amet mauris sit amet lorem aliquet porta."}/>
            </Grid>
        </Grid>
    )
}

export default FormPage