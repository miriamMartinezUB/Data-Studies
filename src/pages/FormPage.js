import React from 'react'
import {Grid} from "@material-ui/core";
import DataStudiesContentViewLanding from "../components/ContentViewLanding";
import {useLocation} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import DataStudiesAppFrame from "../components/AppFrame";
import DataStudiesTabs from "../components/Tabs";

const FormPage = () => {
    const location = useLocation();
    let path_array = location.pathname.split("/");

    return (
        <DataStudiesAppFrame>
            <Grid container item
                  direction={"column"}
                  alignItems={"center"}>
                <Grid container item
                      direction={"column"}
                      alignItems={"center"}
                      style={{marginBottom: "20px",marginTop: "20px"}}>
                    <Grid item alignContent={"center"}>
                        <Typography display={'inline'} variant={"h3"}>
                            {"Manage form"}
                        </Typography>
                        <Typography display={'inline'} variant={"h3"}>
                            <b>{` ${path_array[path_array.length - 1]} `}</b>
                        </Typography>
                    </Grid>
                    <Grid item alignContent={"center"}>
                        <Typography display={'inline'} variant={"h6"} color={"textSecondary"}>
                            {`That form belongs to study `}
                        </Typography>
                        <Typography display={'inline'} variant={"h6"} color={"textSecondary"}>
                            <b>{path_array[path_array.length - 3]}</b>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <DataStudiesContentViewLanding
                        href2={`/study/${path_array[path_array.length - 3]}/form/${path_array[path_array.length - 1]}/reports`}
                        href1='/not/implemented' title2={'Reports'} title1={'Questions'}
                        text1={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis turpis id ex finibus tempor. Proin vel augue dui. Etiam euismod pharetra fringilla. Donec sagittis mi vel quam gravida, in molestie lectus cursus. Aenean sit amet mauris sit amet lorem aliquet porta. Proin ut scelerisque risus. Sed aliquam, neque ut suscipit accumsan, turpis leo varius libero, ut sodales nisl orci a nunc. Nullam ultrices, eros eget ullamcorper scelerisque, lectus tortor vestibulum lorem, vitae vestibulum diam lacus sed purus. Nunc dolor dui, viverra eu dignissim eu, suscipit at velit. Morbi ut tortor suscipit, mattis arcu in, accumsan orci. Nulla sit amet fringilla nibh. Cras sed auctor dui, et ultricies purus."}
                        text2={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis turpis id ex finibus tempor. Proin vel augue dui. Etiam euismod pharetra fringilla. Donec sagittis mi vel quam gravida, in molestie lectus cursus. Aenean sit amet mauris sit amet lorem aliquet porta."}/>
                </Grid>
            </Grid>
        </DataStudiesAppFrame>

    )
}

export default FormPage