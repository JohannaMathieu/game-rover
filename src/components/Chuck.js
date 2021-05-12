import React from "react";

const Chuck = (props) => {
  return (
    <div className="chuckstyle">
      <h1>Now that you found me, wanna hear a joke?</h1>
      <p>{props.quote}</p>
    </div>
  );
};

export default Chuck;
