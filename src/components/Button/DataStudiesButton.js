import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/DataStudiesButton'

const DataStudiesButton1 = ({background, label}) => {
    return (
        <Button style={{width: "100%"}}
                background={background}
                aria-label={label}
/>
    )
}

DataStudiesButton.propTypes = {
    background: PropTypes.string,
    label: PropTypes.string,
}

export default DataStudiesButton