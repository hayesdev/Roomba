import React from "react";
import Grid from "./Grid";

function Location(props) {
  return (
    <div>
      <h1>Coordinates [{props.location.coordinates}]</h1>
      <br />
    </div>
  );
}

export default Location;
