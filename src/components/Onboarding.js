import React from "react";
import "./Onboarding.css";
import { Link } from "react-router-dom";

const Onboarding = () => {
  return (
    <div className="Onboarding">
      <h1>
        We are so bored!<br></br>Will you play with us?!
      </h1>
      <button>
        <Link to="/game">Yes! Let's play!</Link>
      </button>
    </div>
  );
};

export default Onboarding;
