import React, { useState, useEffect } from "react";
import Directions from "./components/Directions";
import Location from "./components/Location";
import Grid from "./components/Grid";
import Roomba from "./components/Roomba";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("working");
  }, []);

  return (
    <div className="container">
      <Directions />
      <Location />
      <Grid />
    </div>
  );
}

export default App;
