import React from "react";

function Grid(props) {
  const grid = [];
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      grid.push(
        <div
          className="square"
          id={`${i}, ${j}`}
          key={`${i}, ${j}`}
          onClick={props.handleChange}
        >
          {console.log("square rendered")}
        </div>
      );
    }
  }
  return <div className="grid">{grid}</div>;
}

export default Grid;
