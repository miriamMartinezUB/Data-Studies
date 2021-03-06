import React from 'react'
import PropTypes from 'prop-types'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

const DataStudiesTextArea = ({defaultMessage, maxRowSize, minRowSize, maxChars, required, onChange}) => {
    return (
        <TextareaAutosize style={{width: "100%"}}
                          inputMode={"text"}
                          required={required}
                          aria-label="empty textarea"
                          placeholder={defaultMessage}
                          rowsMax={maxRowSize}
                          onChange={onChange}
                          rowsMin={minRowSize}
                          maxLength={maxChars}/>
    )
}

DataStudiesTextArea.propTypes = {
    defaultMessage: PropTypes.string,
    maxRowSize: PropTypes.number,
    minRowSize: PropTypes.number,
    maxChars: PropTypes.number,
    required: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default DataStudiesTextArea