import React from "react";

function renderGrid(num) {
  function handleClick() {
    const clickedSquare = document.getElementById("clicked");

    clickedSquare.classList.toggle("clicked");
  }
  const newGrid = [];
  for (let i = 1; i <= num; i++) {
    newGrid.push(
      <div className="square" key={i} id="clicked" onClick={handleClick}>
        {/* {i} */}
      </div>
    );
  }
  console.log("grid rendered");
  return newGrid;
}

export default renderGrid;
