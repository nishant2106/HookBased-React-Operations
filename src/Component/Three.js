import React, { useState } from "react";

const Three = () => {
  const [year, changeYear ] = useState(1995);
  const [type, changeType ] = useState("Mercedes");
  const [used, changeUsed ] = useState(true);
  
  const swapCar = () => {
    changeYear(2018);
    changeType("BMW");
    changeUsed(false);
  };

  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 3</h2>
      <h3>Car Spec is:</h3>
      <ul>
        <li>{type}</li>
        <li>{year}</li>
        <li>{used ? "Used Car" : "Brand New!"}</li>
      </ul>
      <button onClick={swapCar}>Swap Car!</button>
    </div>
  );
}

export default Three;