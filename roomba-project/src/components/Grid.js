import React, { useState, useEffect } from "react";

function Grid(props) {
  const [position, setPosition] = useState([]);
  const [prevPosition, setPrevPosition] = useState([1, 1]);

  useEffect(() => {
    setPrevPosition(position);
    setPosition(props.location);
  }, [props.location]);

  const grid = [];
  for (let i = 10; i >= 1; i--) {
    for (let j = 10; j >= 1; j--) {
      grid.push(<div className="square" id={[i, j]} key={[i, j]}></div>);
    }
  }

  // Created a previous position state to remove roomba class
  const notRoomba = document.getElementById(prevPosition);
  const roomba = document.getElementById(position);

  const updatedGrid = [];
  grid.map((cell) => {
    console.log(cell);
    if (roomba) {
      roomba.classList.add("roomba");
      if (notRoomba) {
        // adding a nested if allows access to the previous position
        // to remove the roomba class
        notRoomba.classList.remove("roomba");
      }
      updatedGrid.push(cell);
    } else {
      updatedGrid.push(cell);
    }
    return updatedGrid;
  });

  return <div className="grid">{updatedGrid}</div>;
}

export default Grid;
