import React from 'react'
import "./CardList.css"
import Card from "./Card"
import { Link } from 'react-router-dom'

const CardList = (props) => {
    const cardArr = [false,false,false,false,false,false,false,false,false];
    const randomNum = Math.floor(Math.random() * 9);
    cardArr[randomNum] = true;
    


    return (
        <>
            <h1>Can you find me behind the right Card?</h1>
            <div className="cards-list">
                {cardArr.map((card, index)=>{
                    return(<Card hidingPlace={card} key={index}/>)
                })}
            </div>
            <button><Link to="/">Take me back</Link></button>
        </>
    )
}

export default CardList
