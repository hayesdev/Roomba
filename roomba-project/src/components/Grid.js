import React, { useState, useEffect } from "react";

function Grid(props) {
  const [position, setPosition] = useState(props.location);
  const [roomba, setRoomba] = useState("1, 1");
  const renderRoomba = document.getElementById(
    `${position[0]}, ${position[1]}`
  );

  useEffect(() => {
    console.log("Im the first position", position);
  }, []);
  useEffect(
    () => {
      if (roomba) {
        setPosition((newPosition) => (newPosition = props.location));
        console.log("The new position:", position);
        renderRoomba.classList.add("roomba");
      }
    },
    [props.position],
    [roomba]
  );
  console.log("The roomba is at", roomba);
  console.log("Im the location", position);

  const grid = [];
  for (let i = 10; i >= 1; i--) {
    for (let j = 10; j >= 1; j--) {
      grid.push(
        <div className="square" id={`${i}, ${j}`} key={`${i}, ${j}`}>
          {`${i}, ${j}`}
        </div>
      );
    }
  }

  return <div className="grid">{grid}</div>;
}

export default Grid;
