import React from 'react'
import PropTypes from 'prop-types'
import {useHistory} from 'react-router-dom'
import {Grid, ListItem, Typography} from "@material-ui/core";

const DataStudiesObjectButton = ({name,path, date, description}) => {

    const history = useHistory()

    const onClickHandler = () => {
        history.push(path)
    }

    return (
        <ListItem key={name} button
                  component={'a'}
                  onClick={onClickHandler}
                  divider={true}>
            <Grid item xs={'auto'}
                  container
                  direction={"column"}>
                <Grid item xs container
                      direction={"row"}
                      spacing={2}
                      justify={"space-between"}>
                    <Grid item>
                        <Typography gutterBottom={true} variant="h6">
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="caption" >
                            {date}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="body1" color={"textSecondary"}>
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </ListItem>
    )
}

DataStudiesObjectButton.propTypes = {
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
}

export default DataStudiesObjectButton