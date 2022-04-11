import React, { useState } from "react";
import GeoChart from "./components/geoChart/GeoChart";
import data from "./components/geoChart/GeoChart.world.geo.json";
import "./App.scss";
import Intro from "./components/intro";
import Button1 from "./components/buttonClick/button";
function App() {
  const [property, setProperty] = useState("formal_en");
  return (
    <div className="root">
      <Intro></Intro>
     <Button1></Button1>
      <div className="box">
      <input type="text" placeholder="ค้นหาชื่อประเทศเช่น ไทย , ญี่ปุ่น "  />
       <GeoChart data={data} property={property} /> 
      </div>
    </div>
  );
}

export default App;

