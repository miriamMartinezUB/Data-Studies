import React from 'react';
import PropTypes from 'prop-types';
import {IconButton} from '@material-ui/core'
import {iconsByName} from "../../constants/icons";


const DataStudiesIconButton = ({name, color, size, background, onClick, isDisabled}) => {
    if(isDisabled==null) isDisabled=false
    return (
        <IconButton
            aria-label={name}
            color={color}
            size={size}
            style={{backgroundColor: background}}
            disabled={isDisabled}
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
    onClick: PropTypes.func,
    isDisabled:PropTypes.bool,
}

export default DataStudiesIconButton
