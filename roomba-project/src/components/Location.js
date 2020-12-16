import React, { useState } from "react";
import Grid from "./Grid";

function Location() {
  const [location, setLocation] = useState({
    coordinates: ["1,1"],
  });
  // const x = e.target.lat_id;
  // const y = e.target.long_id;
  // console.log(x, y);

  return (
    <div>
      <h1>Coordinates [{location.coordinates}]</h1>
      <br />
    </div>
  );
}

export default Location;
