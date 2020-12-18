import React, { useState, useEffect } from "react";
// import Roomba from "./Roomba";

function Grid(props) {
  const [position, setPosition] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const roomba = document.getElementById(`${position[0]}, ${position[1]}`);
  // const getRoomba = roomba.getAttribute("id");
  // const roombaPosition = document.getElementById(position);

  useEffect(() => {
    setPosition((position) => (position = props.location));
  }, []);
  useEffect(
    () => {
      if (roomba) {
        setPosition((newPosition) => (newPosition = props.location));
        roomba.classList.add("roomba");
      }
      // else {
      //   roomba.classList.remove("roomba");
      // }
    },
    [props.location],
    [roomba]
  );
  console.log(roomba);
  console.log(position);

  const grid = [];
  for (let i = 10; i >= 1; i--) {
    for (let j = 10; j >= 1; j--) {
      grid.push(
        <div
          className="square"
          // {`${isActive ? "roomba" : "square"}`}
          id={`${i}, ${j}`}
          key={`${i}, ${j}`}
        >
          {`${i}, ${j}`}
        </div>
      );
    }
  }

  return <div className="grid">{grid}</div>;
}

export default Grid;
