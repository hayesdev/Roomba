import React, { useState, useRef, useEffect } from "react";

function Counter(props) {
  const [count, setCount] = useState(-2);
  let x = props.location[0];
  let y = props.location[1];

  useEffect(() => {
    switch (x) {
      case 1:
      case 10:
        setCount((prevCount) => prevCount + 1);
        break;
      default:
        x = 1;
    }
  }, [x]);

  useEffect(() => {
    switch (y) {
      case 1:
      case 10:
        setCount((prevCount) => prevCount + 1);
        break;
      default:
        y = 1;
    }
  }, [y]);

  return (
    <div className="counter">
      <h2>Walls Hit: {count}</h2>
    </div>
  );
}

export default Counter;
