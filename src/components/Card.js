import React from 'react'
import "./Card.css"
import { useHistory } from "react-router-dom"

const Card = ({hidingPlace, url, key, classNew}) => {
    let history = useHistory()

    console.log(key);

    const onClick = (e) => {
        if (hidingPlace===true) {
            console.log("you found me");
            e.target.className = `${myClass} true`;
            setTimeout(function(){
                history.push('/win');

            }, 600);             
        }
        else {
            console.log("Nope, try again");
            e.target.className = `${myClass} false`
        }
    };
 


    const myClass = `card key${classNew}`;



    return (
      <div className={myClass} onClick={onClick}>
      </div>
    );
};

export default Card;
