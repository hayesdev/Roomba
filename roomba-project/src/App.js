import React, { useState, useEffect } from "react";
import Directions from "./components/Directions";
import Location from "./components/Location";
import renderGrid from "./components/Grid";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("hooks works");
  }, []);
  return (
    <div>
      <Directions />
      <Location />

      <div className="grid">{renderGrid(100)}</div>

      {/* <div className="grid">{renderGrid(10)}</div>
      <div className="grid">{renderGrid(10)}</div>
      <div className="grid">{renderGrid(10)}</div>
      <div className="grid">{renderGrid(10)}</div>
      <div className="grid">{renderGrid(10)}</div>
      <div className="grid">{renderGrid(10)}</div>
      <div className="grid">{renderGrid(10)}</div>
      <div className="grid">{renderGrid(10)}</div>
      <div className="grid">{renderGrid(10)}</div> */}
    </div>
  );
}

export default App;
