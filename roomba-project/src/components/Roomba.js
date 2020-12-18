import React, { useState } from "react";

function Roomba(props) {
  const [position, setPosition] = useState([props.location]);

  console.log(position);
  return <div className="roomba">0</div>;
}

export default Roomba;
