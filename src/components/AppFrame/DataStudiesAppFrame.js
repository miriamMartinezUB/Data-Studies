import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import DataStudiesAppBar from "../AppBar";
import 'typeface-roboto'

const DataStudiesAppFrame = ({children}) => {
    return (
        <Grid container
              direction={"column"}
              justify="center">
            <Grid item>
                <DataStudiesAppBar/>
            </Grid>
            {children}
        </Grid>
    )
}

DataStudiesAppFrame.propTypes = {
    children: PropTypes.node
}

export default DataStudiesAppFrame
