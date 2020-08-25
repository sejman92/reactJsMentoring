import React, { Component } from 'react'
import './AddMovieButton.css'

const btnText = "+ ADD MOVIE";
export default class AddMovieButton extends Component {
    render() {
        return (
            <div className="btn-container">
                <button className="btn"><div className="btn-text">{btnText}</div></button>
            </div>
        )
    }
}
