import React from "react";
import { Link } from "react-router-dom";
import "./Chuck.css";

const Chuck = (props) => {
  return (
    <div className="chuckstyle">
      <h1>You won!!!</h1>
      <p className="chuckjoke">{props.quote}</p>
      <button>
        <Link to="/game">Let's play again!</Link>
      </button>
    </div>
  );
};

export default Chuck;
