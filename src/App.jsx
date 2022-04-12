import React, { useState } from "react";
import GeoChart from "./components/geoChart/GeoChart";
import data from "./components/geoChart/GeoChart.world.geo.json";
import "./App.scss";
import Intro from "./components/intro";
function App() {
  const [property, setProperty] = useState("formal_en");
  return (
    <div className="root">
      <Intro></Intro>
      <div className="box">
       <GeoChart data={data} property={property} /> 
      </div>
    </div>
  );
}

export default App;

// Devolop by Aphisit Thupsaeng , Sarin Hongthong
