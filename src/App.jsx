import React, { useState } from "react";

import GeoChart from "./GeoChart";
import data from "./GeoChart.world.geo.json";
import "./App.scss";
import Intro from "./components/intro"
function App() {
  const [property, setProperty] = useState("formal_en");
  return (
    <div className="root">
      <Intro></Intro>
      <div className="box">
        <GeoChart data={data} property={property} />
      </div>
    </div >
  );
}

export default App;


// Editing by Aphisit Thubsaeng
// sarin