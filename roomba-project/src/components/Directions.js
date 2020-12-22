import React, { useState } from "react";

function Directions(props) {
  const [direction, setDirection] = useState("North");
  let x = props.location[0];
  let y = props.location[1];
  const prevLocation = [x, y];

  function north() {
    if (x === 10) {
      x = 9;
      props.move({ coordinates: prevLocation });
      console.log("Roomba hit a wall");
    }
    props.move({ coordinates: [x + 1, y] });
    setDirection("North");
  }
  function south() {
    if (x === 1) {
      x = 2;
      props.move({ coordinates: prevLocation });
      console.log("Roomba hit a wall");
    }
    props.move({ coordinates: [x - 1, y] });
    setDirection("South");
  }
  function east() {
    if (y === 10) {
      y = 9;
      props.move({ coordinates: prevLocation });
      console.log("Roomba hit a wall");
    }
    props.move({ coordinates: [x, y + 1] });
    setDirection("East");
  }
  function west() {
    if (y === 1) {
      y = 2;
      props.move({ coordinates: prevLocation });
      console.log("Roomba hit a wall");
    }
    props.move({ coordinates: [x, y - 1] });
    setDirection("West");
  }

  return (
    <div className="directions">
      <button onClick={() => north()}>North</button>
      <button onClick={() => south()}>South</button>
      <button onClick={() => east()}>East</button>
      <button onClick={() => west()}>West</button>
      <h1>{direction}</h1>
    </div>
  );
}

export default Directions;
