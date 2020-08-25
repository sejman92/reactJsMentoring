import React, { Component } from 'react'
import SearchPane from '../../search/SearchPane'
import AddMovieButton from '../../buttons/add-movie/AddMovieButton'
import './HeaderContainer.css'
import Label from "../../labels/Label"

const boldTitle = "netflix"
const lightTitle = "Roulette"

const title = "FIND YOUR MOVIE"
export default class HeaderContainer extends Component {
    render() {
        return (
            <div className="container column-direction wrap">
                <AddMovieButton/>
                <Label text={title}/>
                <SearchPane/>
            </div>
        )
    }
}
