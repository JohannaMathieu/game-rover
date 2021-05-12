import React, { useEffect, useState } from "react";
import "./Card.css";
import axios from "axios";

const Card = ({ hidingPlace, url, key, classNew }) => {
  console.log(key);

  const onClick = (e) => {
    if (hidingPlace == true) {
      console.log("you found me");
      e.target.className = `${myClass} true`;
    } else {
      console.log("Nope, try again");
      e.target.className = `${myClass} false`;
    }
  };

  let imgUrl = `url(${url})`;

  const myClass = `card key${classNew}`;

  useEffect(() => {
    console.log(classNew);
  }, []);

  return (
    <div className={myClass} onClick={onClick}>
      <img></img>
    </div>
  );
};

export default Card;
