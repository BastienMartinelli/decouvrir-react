import React from "react";

const Greeting = ({ name, click }) => {
  return (
    <div>
      <h1>Greeting {name}</h1>
      <h3>
        {name} clicked {click} times
      </h3>
    </div>
  );
};

export default Greeting;
