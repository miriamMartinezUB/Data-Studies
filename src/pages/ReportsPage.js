import React from 'react'
import {Grid} from "@material-ui/core";
import DataStudiesAppBar from "../components/AppBar";
import DataStudiesTable from "../components/Table";

const ReportsPage = () => {
    const headTable=[
        {field: 'id_reports', headerName: 'Number Report', width: 150},
        {field: 'id', headerName: 'ID Patient', width: 130},
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
    const reports=[
        {
            id_reports: 'R01', id: 1,
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
        {id_reports: 'R02', id: 2,
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
        {id_reports: 'R03', id: 3,
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
        {id_reports: 'R04', id: 4,
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
        {id_reports: 'R05', id: 5,
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
        {id_reports: 'R06', id: 6,
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
        {id_reports: 'R07', id: 7,
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
        {id_reports: 'R08', id: 8,
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
        {id_reports: 'R09', id: 9,
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
            <Grid item>
                <DataStudiesTable rows={reports} columns={headTable}/>
            </Grid>
        </Grid>
    )
}

export default ReportsPage