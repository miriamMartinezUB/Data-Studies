import React from "react";
import {makeStyles, Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";
import PropTypes from "prop-types";

const DataStudiesDataModal = ({ columns, data}) => {

    return (
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
    );
}

DataStudiesDataModal.propTypes = {
    columns: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.array.isRequired,
}

export default DataStudiesDataModal