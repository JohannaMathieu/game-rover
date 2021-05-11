import React from 'react'
import "./Card.css"

const Card = ({hidingPlace}) => {

    const onClick = (e) => {
        if (hidingPlace==true) {
            console.log("you found me");
            e.target.className = "card true"
        }
        else {
            console.log("Nope, try again");
            e.target.className = "card false"
        }
    }

    return (
        <div className="card" onClick={onClick}>
            <img></img>
            
        </div>
    )
}

export default Card
