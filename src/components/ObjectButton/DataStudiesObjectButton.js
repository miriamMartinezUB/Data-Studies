import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const DataStudiesObjectButton = ({name, date, description, type}) => {
    const history = useHistory()

    const onClickHandler = () => {
        history.push(`/${type}/${name}`)
    }

    return(
        <ListItem key={`${name}`} button component={'a'} onClick={onClickHandler}>
            <Grid item xs={'auto'} sm container>
                <Grid item xs container direction={"row"} spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom={true} variant="subtitle1">
                            {name}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            {description}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2">
                        {date}
                    </Typography>
                </Grid>
            </Grid>
        </ListItem>
    )
}

DataStudiesObjectButton.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired
}

export default DataStudiesObjectButton