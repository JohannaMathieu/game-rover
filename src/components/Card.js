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

  const [chuck, setChuck] = useState([]);

  useEffect(() => {
    var instance = axios.create({
      baseURL: "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com",
    });
    instance.defaults.headers.common["x-rapidapi-key"] =
      "94aebcf4afmsha42e3bb3f8da45dp11ac41jsncd2b74ed5531";
    instance
      .get("/jokes/random")
      .then(function (response) {
        console.log(response);
        setChuck(response.data.value);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  console.log(chuck);

  return (
    <div className={myClass} onClick={onClick}>
      <img></img>
    </div>
  );
};

export default Card;
