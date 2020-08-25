import React, { Component } from 'react'
import './SearchPane.css'
import SearchButton from '../buttons/SearchButton';

const inputPlaceholder = "What do you want to watch?";

export default class SearchPane extends Component {
    render() {
        return (
            <div className="search-container">
                <input className="input" type='text' placeholder={inputPlaceholder}/>
                <SearchButton/>
           </div>
        )
    }
}
