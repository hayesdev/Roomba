import React from "react";

function Grid() {
  const newGrid = [];
  for (let i = 0; i < 10; i++) {
    newGrid.push(<div className="square">{i}</div>);
  }
  return newGrid;
}

export default Grid;
