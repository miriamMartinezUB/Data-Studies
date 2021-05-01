import React from "react";
import {makeStyles, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import PropTypes from "prop-types";

const DataStudiesDataModal = ({name, columns, data}) => {

    const useStyles = makeStyles(theme => ({
        paper: {
            position: 'center',
            width: 'auto',
            maxWidth: '80%',
            margin: 'auto',
            overflowX: 'auto',
            boxShadow: theme.shadows[5],
            border: '2px solid #000',
            backgroundColor: theme.palette.background.paper,
            padding: theme.spacing(1),
        },
    }));
    const classes = useStyles();

    return (
        <div className={classes.paper}>
            <h2>{name}</h2>
            <Table >
                <TableHead>
                    <TableRow>
                        {columns.map(columnName => (
                            <TableCell>{columnName}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(values => (
                        <TableRow>
                            {values.map(elem =>(
                                <TableCell>{elem}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

DataStudiesDataModal.propTypes = {
    name: PropTypes.string.isRequired,
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.array.isRequired,
}

export default DataStudiesDataModal