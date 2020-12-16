import React from "react";
// import Roomba from "./Roomba";

function Grid() {
  function handleChange(e) {
    const id = e.target;
    console.log(id);
  }
  const grid = [];
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      grid.push(
        <div
          className="square"
          id={`${i}, ${j}`}
          key={`${i}, ${j}`}
          onClick={handleChange}
        >
          {console.log("square rendered")}
        </div>
      );
    }
  }
  return <div className="grid">{grid}</div>;
}

export default Grid;
