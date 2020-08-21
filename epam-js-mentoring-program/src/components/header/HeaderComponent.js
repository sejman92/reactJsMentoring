import React, { Component } from 'react'
import SearchComponent from './SearchInputComponent'
import SearchInputComponent from './SearchInputComponent'
import SearchButtonComponent from './SearchButtonComponent'
import AddMovieButton from './AddMovieButton'

export default class HeaderComponent extends Component {
    render() {
        return (
            <>
                <h1>netflixRoulette</h1>
                <h2>FIND YOUR MOVIE</h2> 
                <AddMovieButton/><br/>
                <SearchInputComponent/>
                <SearchButtonComponent/>
            </>
        )
    }
}
