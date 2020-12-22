import React, { useState, useEffect } from "react";
import Directions from "./components/Directions";
import Location from "./components/Location";
import Grid from "./components/Grid";
import Counter from "./components/Counter";
import Roomba from "./components/Roomba";
import "./App.css";

function App() {
  const [location, setLocation] = useState({
    coordinates: [1, 1],
  });
  const coordinates = location.coordinates;

  return (
    <div className="container">
      <Directions location={coordinates} move={setLocation} />
      <Counter location={coordinates} />
      <Location location={coordinates} />
      <Grid location={coordinates} />
    </div>
  );
}

export default App;
