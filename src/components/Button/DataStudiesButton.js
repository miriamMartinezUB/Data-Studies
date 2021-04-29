import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import {makeStyles} from "@material-ui/core";

/*const DataStudiesButton = ({background, label}) => {
    return (
        <Button style={{width: "100%"}}
                background={background}
                aria-label={label}
/>
    )
}*/

/*DataStudiesButton.propTypes = {
    background: PropTypes.string,
    label: PropTypes.string,
}*/

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}))

const DataStudiesButton = ({variant, color, size, background, label}) => {
    const classes = useStyles();
    return (
        <Button variant={variant} color={color} size={size} className={classes.margin} style={{backgroundColor: background}}>
            {label}
        </Button>
    )
}

DataStudiesButton.propTypes = {
    variant: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
}

export default DataStudiesButton