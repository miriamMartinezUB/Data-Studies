import React from 'react';
import PropTypes from 'prop-types';
import {IconButton} from '@material-ui/core'
import {iconsByName} from "../../constants/icons";


const DataStudiesIconButton = ({name, color, size, background, onClick}) => {
    return (
        <IconButton
            aria-label={name}
            color={color}
            size={size}
            style={{backgroundColor: background}}
            onClick={onClick}
        >
            {iconsByName[name]}
        </IconButton>
    )
}

DataStudiesIconButton.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string,
    size: PropTypes.string,
    background: PropTypes.string,
    onClick: PropTypes.func
}

export default DataStudiesIconButton
