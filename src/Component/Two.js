import React, { useState } from "react";

const Two = () => {
  const [activeUser, changeUser ] = useState("chris");
  
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 2</h2>
      <p>Active User is: {activeUser}</p>
      <button onClick={() => changeUser("c")}>Change Me!</button>
    </div>
  );
}

export default Two;