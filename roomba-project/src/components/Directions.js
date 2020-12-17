import React, { useState, useEffect } from "react";

function Directions(props) {
  const [direction, setDirection] = useState("North");

  return (
    <div className="directions">
      <button onClick={() => setDirection("North")}>North</button>
      <button onClick={() => setDirection("East")}>East</button>
      <button onClick={() => setDirection("South")}>South</button>
      <button onClick={() => setDirection("West")}>West</button>
      <div>
        <h1>{direction}</h1>
      </div>
    </div>
  );
}

export default Directions;
