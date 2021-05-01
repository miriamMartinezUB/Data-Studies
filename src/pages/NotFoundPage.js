import React from 'react'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import { Link as RouterLink } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import DataStudiesIconButton from "../components/IconButton";
import {nameIcons} from "../constants/icons";
import 'typeface-roboto'

const NotFoundPage = () => {
    return (
        <Grid container
              direction="column"
              justify="center"
              className="full">
            <div className="highlight">
                <Grid item container xs={12}
                      justify="center"
                      alignItems="center">
                    <Grid item>
                        <DataStudiesIconButton name={nameIcons.SAD} color={"disabled"} isDisabled={true} />
                    </Grid>
                    <Grid item
                          container
                          direction="column"
                          justify="center"
                          alignItems="center">
                        <Typography variant="h4" color="inherit">
                            404 | La página no existe
                        </Typography>
                        <Link color="inherit"
                              aria-label="menu"
                              aria-label="menu"
                              component={RouterLink}
                              to="/">
                            Volver al inicio
                        </Link>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    )
}

export default NotFoundPage