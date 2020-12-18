import React, { useState, useEffect } from "react";
import Directions from "./components/Directions";
import Location from "./components/Location";
import Grid from "./components/Grid";
import Counter from "./components/Counter";
import Roomba from "./components/Roomba";
// import Room from "./Room.json";
import "./App.css";

function App() {
  const [location, setLocation] = useState({
    coordinates: [1, 1],
  });

  return (
    <div className="container">
      <Directions location={location.coordinates} move={setLocation} />
      <Counter location={location.coordinates} />
      <Location location={location.coordinates} />
      <Grid location={location.coordinates} />
      {/* <Roomba /> */}
    </div>
  );
}

export default App;
