import React, { useState, useEffect } from "react";

function Directions(props) {
  const [direction, setDirection] = useState("North");

  const x = props.location[0];
  const y = props.location[1];
  function North() {
    props.move({ coordinates: [x, y + 1] });
    setDirection("North");
    console.log(props.location);
  }
  function South() {
    props.move({ coordinates: [x, y - 1] });
    setDirection("South");
    console.log(props.location);
  }
  function East() {
    props.move({ coordinates: [x + 1, y] });
    setDirection("East");
    console.log(props.location);
  }
  function West() {
    props.move({ coordinates: [x - 1, y] });
    setDirection("West");
    console.log(props.location);
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
