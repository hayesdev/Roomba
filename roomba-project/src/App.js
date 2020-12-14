import React, { useState, useEffect } from "react";
import Directions from "./components/Directions";
import Location from "./components/Location";
import Grid from "./components/Grid";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("hooks works");
  }, []);
  return (
    <div>
      <Directions />
      <Location />
      <Grid />
    </div>
  );
}

export default App;
