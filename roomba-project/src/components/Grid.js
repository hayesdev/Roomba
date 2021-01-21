import React, { useState, useEffect } from "react";

function Grid(props) {
  const [position, setPosition] = useState(props.location);
  const [prevPosition, setPrevPosition] = useState([1, 1]);

  useEffect(() => {
    setPrevPosition(position);
    setPosition(props.location);
  }, [props.location]);

  const grid = [];
  for (let i = 10; i >= 1; i--) {
    for (let j = 10; j >= 1; j--) {
      console.log([i, j]);
      grid.push(<div className="square" id={[i, j]} key={[i, j]}></div>);
    }
  }
  // const theRoomba = position;
  // Created a previous position state to remove roomba class
  const notRoomba = document.getElementById(prevPosition);
  const roomba = document.getElementById(position);

  console.log("Im the current location", props.location);
  console.log("Roomba is at ", notRoomba);
  console.log("I am the position ", position);

  const updatedGrid = [];

  grid.map((cell) => {
    if (!roomba) {
      updatedGrid.push(cell);
    } else {
      roomba.classList.add("roomba");
      if (notRoomba) {
        // adding a nested if lets access the previous position
        // to remove the roomba class
        notRoomba.classList.remove("roomba");
      }
      updatedGrid.push(cell);
    }
    return updatedGrid;
  });

  return <div className="grid">{updatedGrid}</div>;
}

export default Grid;
