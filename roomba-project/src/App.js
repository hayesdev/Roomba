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
  // function handleChange(e) {
  //   const id = e.target.id;

  //   setLocation({
  //     coordinates: [id],
  //   });
  // }
  useEffect(() => {
    console.log("working");
  }, [location]);

  return (
    <div className="container">
      <Directions location={location.coordinates} move={setLocation} />
      <Counter location={location.coordinates} />
      <Location location={location.coordinates} />
      <Grid />
    </div>
  );
}

export default App;
