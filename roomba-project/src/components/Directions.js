import React, { useState, useEffect } from "react";

function Directions(props) {
  const [direction, setDirection] = useState("North");

  const x = props.location.coordinates[0];
  const y = props.location.coordinates[1];
  function North() {
    // setLocation({ coordinates: [x + 1, y] });
    setDirection("North");
    console.log(props.location.coordinates);
  }
  function South() {
    // setLocation({ coordinates: [x - 1, y] });
    setDirection("South");
    console.log(props.location.coordinates);
  }
  function East() {
    // setLocation({ coordinates: [x, y + 1] });
    setDirection("East");
    console.log(props.location.coordinates);
  }
  function West() {
    // setLocation({ coordinates: [x, y - 1] });
    setDirection("West");
    console.log(props.location.coordinates);
  }

  return (
    <div className="directions">
      <button onClick={() => North()}>North</button>
      <button onClick={() => South()}>South</button>
      <button onClick={() => East()}>East</button>
      <button onClick={() => West()}>West</button>
      <div>
        <h1>{direction}</h1>
      </div>
    </div>
  );
}

export default Directions;
