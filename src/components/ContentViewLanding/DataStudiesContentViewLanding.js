import React from 'react'
import {Divider, Grid} from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import PropTypes from "prop-types";
import { useHistory } from 'react-router-dom'

const DataStudiesContentViewLanding = ({title1, text1, href1, title2, text2, href2}) => {
    const history = useHistory()

    return (
        <Grid container item
              direction="row"
              justify="center"
              alignItems="flex-start"
              alignContent={"flex-start"}
              spacing={1}>
            <Grid container item
                  onClick={() => {
                      history.push(`${href1}`)
                  }}
                  direction={"column"}
                  alignItems={"flex-start"}
                  justify={"flex-start"}
                  style={{margin: "20px"}}
                  xl={4} lg={4} md={5} sm={7} xs={8}>
                <Grid item
                      style={{bottom: "10px"}}>
                    <Typography display="inline" variant="h3" align={"justify"}>{title1}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={"justify"}>{text1}</Typography>
                </Grid>
            </Grid>
            <Divider orientation="vertical" flexItem/>
            <Grid container item
                  onClick={() => {
                      history.push(`${href2}`)
                  }}
                  direction={"column"}
                  justify={"flex-start"}
                  alignItems={"flex-start"}
                  style={{margin: "20px"}}
                  xl={4} lg={4} md={5} sm={7} xs={8}>
                <Grid item
                      style={{bottom: "10px"}}>
                    <Typography display="inline" variant="h3" align={"justify"}>{title2}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" align={"justify"}>{text2}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}


DataStudiesContentViewLanding.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    href1: PropTypes.string.isRequired,
    href2: PropTypes.string.isRequired,
}

export default DataStudiesContentViewLanding