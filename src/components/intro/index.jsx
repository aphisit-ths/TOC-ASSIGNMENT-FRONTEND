import React from "react";
import "./intro.scss";
function Intro({data}) {
  console.log(data)
  return (
    <div className="intro">
      <p id="box"></p>
      <p><h1>Country and world leaders information</h1></p>
      <p><h2>Do you want to know what's the population in each country? And who are the leaders now?</h2></p>
      <a href="#button12" className="button button2" >Click me</a>
    </div>
  );
}

export default Intro;
