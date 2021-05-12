import React from "react";
import { Link } from "react-router-dom";

const Chuck = (props) => {
  return (
    <div className="chuckstyle">
      <h1>Now that you found me, wanna hear a joke?</h1>
      <p>{props.quote}</p>
      <button>
        <Link to="/game">Let's play again!</Link>
      </button>
    </div>
  );
};

export default Chuck;
