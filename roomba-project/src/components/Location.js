import React from "react";

function Location(props) {
  return (
    <div>
      <h1>Coordinates [{`${props.location[0]}, ${props.location[1]}`}]</h1>
      <br />
      <h2>{props.location[1]}</h2>
    </div>
  );
}

export default Location;
