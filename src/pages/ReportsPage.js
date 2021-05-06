import React from 'react'
import {Grid, Paper} from "@material-ui/core";
import DataStudiesAppBar from "../components/AppBar";
import DataStudiesTable from "../components/Table";
import 'typeface-roboto'
import {useLocation} from "react-router-dom";

const ReportsPage = () => {

    const location = useLocation();
    let path_array = location.pathname.split("/");
    const headTable = [
        {field: 'id', headerName: 'Number Report', width: 150},
        {field: 'id_patient', headerName: 'ID Patient', width: 130},
        {field: 'send_date', headerName: 'Sended Date', type: 'date', width: 135},
        {field: 'question_age', headerName: 'Age', type: 'number', width: 90},
        {field: 'question_weight', headerName: 'Weight (Kg)', type: 'number', width: 130},
        {field: 'question_height', headerName: 'Height (m)', type: 'number', width: 130},
        {field: 'question_1', headerName: 'Question 1', width: 130},
        {field: 'question_2', headerName: 'Question 2', width: 130},
        {field: 'question_3', headerName: 'Question 3', width: 130},
        {field: 'question_4', headerName: 'Question 4', width: 130},
        {field: 'question_5', headerName: 'Question 5', width: 130},
        {field: 'question_6', headerName: 'Question 6', width: 130},
        {field: 'question_7', headerName: 'Question 7', width: 130},

    ]
    const reports = [
        {
            id: 'R01', id_patient: 1,
            send_date: '2020-02-03',
            question_age: 35,
            question_weight: 65,
            question_height: 1.70,
            question_1: "answer 1",
            question_2: "answer 2",
            question_3: "answer 3",
            question_4: "answer 4",
            question_5: "answer 5",
            question_6: "answer 6",
            question_7: "answer 7"
        },
        {
            id: 'R02', id_patient: 2,
            send_date: '2020-04-03',
            question_age: 31,
            question_weight: 96,
            question_height: 1.93,
            question_1: "answer 1",
            question_2: "answer 2",
            question_3: "answer 3",
            question_4: "answer 4",
            question_5: "answer 5",
            question_6: "answer 6",
            question_7: "answer 7"
        },
        {
            id: 'R03', id_patient: 3,
            send_date: '2020-05-05',
            question_age: 89,
            question_weight: 85,
            question_height: 1.62,
            question_1: "answer 1",
            question_2: "answer 2",
            question_3: "answer 3",
            question_4: "answer 4",
            question_5: "answer 5",
            question_6: "answer 6",
            question_7: "answer 7"
        },
        {
            id: 'R04', id_patient: 4,
            send_date: '2020-09-10',
            question_age: 22,
            question_weight: 68,
            question_height: 1.78,
            question_1: "answer 1",
            question_2: "answer 2",
            question_3: "answer 3",
            question_4: "answer 4",
            question_5: "answer 5",
            question_6: "answer 6",
            question_7: "answer 7"
        },
        {
            id: 'R05', id_patient: 5,
            send_date: '2020-11-09',
            question_age: 61,
            question_weight: 104,
            question_height: 1.80,
            question_1: "answer 1",
            question_2: "answer 2",
            question_3: "answer 3",
            question_4: "answer 4",
            question_5: "answer 5",
            question_6: "answer 6",
            question_7: "answer 7"
        },
        {
            id: 'R06', id_patient: 6,
            send_date: '2021-02-03',
            question_age: 44,
            question_weight: 55,
            question_height: 1.55,
            question_1: "answer 1",
            question_2: "answer 2",
            question_3: "answer 3",
            question_4: "answer 4",
            question_5: "answer 5",
            question_6: "answer 6",
            question_7: "answer 7"
        },
        {
            id: 'R07', id_patient: 7,
            send_date: '2021-04-13',
            question_age: 30,
            question_weight: 85,
            question_height: 1.90,
            question_1: "answer 1",
            question_2: "answer 2",
            question_3: "answer 3",
            question_4: "answer 4",
            question_5: "answer 5",
            question_6: "answer 6",
            question_7: "answer 7"
        },
        {
            id: 'R08', id_patient: 8,
            send_date: '2021-04-21',
            question_age: 25,
            question_weight: 50,
            question_height: 1.60,
            question_1: "answer 1",
            question_2: "answer 2",
            question_3: "answer 3",
            question_4: "answer 4",
            question_5: "answer 5",
            question_6: "answer 6",
            question_7: "answer 7"
        },
        {
            id: 'R09', id_patient: 9,
            send_date: '2021-05-05',
            question_age: 39,
            question_weight: 67,
            question_height: 1.75,
            question_1: "answer 1",
            question_2: "answer 2",
            question_3: "answer 3",
            question_4: "answer 4",
            question_5: "answer 5",
            question_6: "answer 6",
            question_7: "answer 7"
        },
    ]

    return (
        <Grid container direction={"column"}>
            <Grid item>
                <DataStudiesAppBar/>
            </Grid>
            <Paper elevation={3} style={{margin: "20px"}}>
                <Grid item style={{margin: "20px"}}>
                    <DataStudiesTable rows={reports} columns={headTable} name={path_array[path_array.length - 2]}/>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default ReportsPage