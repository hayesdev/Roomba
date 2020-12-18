import React from "react";

function Grid() {
  const grid = [];
  for (let i = 10; i >= 1; i--) {
    for (let j = 10; j >= 1; j--) {
      grid.push(
        <div className="square" id={[i, j]} key={`${i}, ${j}`}>
          {console.log("square rendered")}
        </div>
      );
    }
  }
  return <div className="grid">{grid}</div>;
}

export default Grid;
