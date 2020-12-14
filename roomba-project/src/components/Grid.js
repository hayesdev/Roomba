import React from "react";

function renderGrid(num) {
  const newGrid = [];
  for (let i = 1; i <= num; i++) {
    newGrid.push(
      <div className="square" key={i}>
        {i}
      </div>
    );
  }
  console.log("grid rendered");
  return newGrid;
}

export default renderGrid;
