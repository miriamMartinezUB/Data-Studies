import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types'

const DataStudiesStudyButton = ({name, date, description}) => {

    const studyProps = {
        linkStudy: "/study",
    };

    return(
        <ListItem button component={'a'} href={studyProps.linkStudy}>
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

DataStudiesStudyButton.propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string,
}

export default DataStudiesStudyButton