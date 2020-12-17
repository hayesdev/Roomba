import React, { useState, useEffect } from "react";
import Directions from "./components/Directions";
import Location from "./components/Location";
import Grid from "./components/Grid";
import Roomba from "./components/Roomba";
import "./App.css";

function App() {
  const [location, setLocation] = useState({
    coordinates: ["1,1"],
  });

  function handleChange(e) {
    const id = e.target.id;
    setLocation({
      coordinates: [id],
    });
  }
  useEffect(() => {
    console.log("working");
  }, []);

  return (
    <div className="container">
      <Directions location={location} handleChange={handleChange} />
      <Location location={location} />
      <Grid handleChange={handleChange} />
    </div>
  );
}

export default App;
