import React, { Component } from 'react'
import './SearchPane.css'

const inputPlaceholder = "What do you want to watch?";

export default class SearchPane extends Component {
    render() {
        return (
            <div className="search-container">
                <input className="input" type='text' placeholder={inputPlaceholder}/>
                <button className="search-btn">SEARCH</button>
            </div>
        )
    }
}
