import React, { useState, useEffect } from "react";
import Directions from "./components/Directions";
import "./App.css";

function App() {
  useEffect(() => {
    console.log("hooks works");
  }, []);
  return <Directions />;
}

export default App;
