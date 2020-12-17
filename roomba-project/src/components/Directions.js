import React, { useState, useEffect } from "react";

function Directions(props) {
  const [direction, setDirection] = useState("North");
  let x = props.location[0];
  let y = props.location[1];
  const prevLocation = [x, y];

  function North() {
    if (y === 10) {
      y = 9;
      props.move({ coordinates: prevLocation });
      console.log("Roomba hit a wall");
    }
    props.move({ coordinates: [x, y + 1] });
    setDirection("North");
  }
  function South() {
    if (y === 1) {
      y = 2;
      props.move({ coordinates: prevLocation });
      console.log("Roomba hit a wall");
    }
    props.move({ coordinates: [x, y - 1] });
    setDirection("South");
  }
  function East() {
    if (x === 10) {
      x = 9;
      props.move({ coordinates: prevLocation });
      console.log("Roomba hit a wall");
    }
    props.move({ coordinates: [x + 1, y] });
    setDirection("East");
  }
  function West() {
    if (x === 1) {
      x = 2;
      props.move({ coordinates: prevLocation });
      console.log("Roomba hit a wall");
    }
    props.move({ coordinates: [x - 1, y] });
    setDirection("West");
  }
  const inBounds = (x > 0 || x < 11) && (y > 0 || y < 10);
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
