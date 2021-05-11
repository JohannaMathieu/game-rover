import React from 'react'
import "./CardList.css"
import Card from "./Card"
import { Link } from 'react-router-dom'

const CardList = (props) => {
    return (
        <div>
            <Card />
            <button><Link to="/">Take me back</Link></button>
        </div>
    )
}

export default CardList
