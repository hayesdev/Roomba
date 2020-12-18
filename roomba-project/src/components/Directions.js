import React, { useState } from "react";

function Directions(props) {
  const [direction, setDirection] = useState("North");
  let x = props.location[0];
  let y = props.location[1];
  const prevLocation = [x, y];

  function north() {
    if (y === 10) {
      y = 9;
      props.move({ coordinates: prevLocation });
      console.log("Roomba hit a wall");
    }
    props.move({ coordinates: [x, y + 1] });
    setDirection("North");
  }
  function south() {
    if (y === 1) {
      y = 2;
      props.move({ coordinates: prevLocation });
      console.log("Roomba hit a wall");
    }
    props.move({ coordinates: [x, y - 1] });
    setDirection("South");
  }
  function east() {
    if (x === 10) {
      x = 9;
      props.move({ coordinates: prevLocation });
      console.log("Roomba hit a wall");
    }
    props.move({ coordinates: [x + 1, y] });
    setDirection("East");
  }
  function west() {
    if (x === 1) {
      x = 2;
      props.move({ coordinates: prevLocation });
      console.log("Roomba hit a wall");
    }
    props.move({ coordinates: [x - 1, y] });
    setDirection("West");
  }

  return (
    <div className="directions">
      <button onClick={() => north()}>North</button>
      <button onClick={() => south()}>South</button>
      <button onClick={() => east()}>East</button>
      <button onClick={() => west()}>West</button>
      <div>
        <h1 className="move">{direction}</h1>
      </div>
    </div>
  );
}

export default Directions;
