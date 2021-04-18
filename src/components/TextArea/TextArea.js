import React from 'react'
import PropTypes from 'prop-types'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'

const TextArea = ({defaultMessage, maxRowSize, minRowSize, maxChars, required}) => {
    return (
        <TextareaAutosize style={{width: "100%"}}
                          inputMode={"text"}
                          required={required}
                          aria-label="empty textarea"
                          placeholder={defaultMessage}
                          rowsMax={maxRowSize}
                          rowsMin={minRowSize}
                          maxLength={maxChars}/>
    )
}

TextArea.propTypes = {
    defaultMessage: PropTypes.string,
    maxRowSize: PropTypes.number,
    minRowSize: PropTypes.number,
    maxChars: PropTypes.number,
    required: PropTypes.bool.isRequired
}

export default TextArea