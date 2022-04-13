import React, { useState } from "react";
import GeoChart from "./components/geoChart/GeoChart";
import data from "./components/geoChart/GeoChart.world.geo.json";
import "./App.scss";
import Intro from "./components/intro";
import Detail from "./components/Detail/detailpage";
const data1 = {
  "data": [
    {
      "name": "Afghanistan",
      "Head Of Government": "Prime Minister: Kishida Fumio"
    },
    {
      "name": "Thailand",
      "Head Of Government": "Prime Minister: Kishida Fumio"
    },
    { 
      "name": "Japan", 
      "Head Of Government": "Prime Minister: Kishida Fumio" }
  ]
}

function App() {
  const [property, setProperty] = useState("formal_en");
  return (
    <div className="root">
      <Intro data={data1}></Intro>
      <div className="box" id="button12">
        <input type="text" placeholder="Search for country names" />
        <GeoChart data={data} property={property} />
      </div>
      <div>
        <Detail></Detail>
      </div>
    </div>
  );
}

export default App;

