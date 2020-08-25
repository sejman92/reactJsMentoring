import React from 'react'
import PropTypes from 'prop-types'

import './Label.css'

export default function Label(props) {
    return (
        <div className="label-container">
            {props.text}
        </div>
    )
}

Label.defaultProps = {
    text: "You Should Define label content"
}

Label.propTypes = {
    text: PropTypes.string.isRequired
}