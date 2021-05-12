import React, {useEffect} from 'react'
import "./Card.css"
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom"

const Card = ({hidingPlace, url, key, classNew}) => {
    let history = useHistory()

console.log(key);



    const onClick = (e) => {
        if (hidingPlace==true) {
            console.log("you found me");
            e.target.className = `${myClass} true`;
            history.push('/win');

   
            
        }
        else {
            console.log("Nope, try again");
            e.target.className = `${myClass} false`
        }

    }
  };

  let imgUrl = `url(${url})`;

  const myClass = `card key${classNew}`;

  useEffect(() => {
    console.log(classNew);
  }, []);

    return (
        <div className={myClass} onClick={onClick}  >
            <img></img>
            
        </div>
    )
}


export default Card;
