import React, { useState } from "react";
import Grid from "./Grid";

function Location() {
  const [location, setLocation] = useState({
    coordinates: ["1,1"],
  });

  function handleChange(e) {
    const id = e.target.id;
    setLocation({
      coordinates: [id],
    });
  }

  return (
    <div>
      <h1>Coordinates [{location.coordinates}]</h1>
      <br />
      <Grid handleChange={handleChange} />
    </div>
  );
}

export default Location;
