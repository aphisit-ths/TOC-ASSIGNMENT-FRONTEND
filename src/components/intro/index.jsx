import React from "react";
import "./intro.scss";
function Intro({data}) {
  console.log(data)
  return (
    <div className="intro">
<<<<<<< HEAD
      <p className="img"><img src="https://www.maropeng.co.za/uploads/imager/files/19832/world-1303628_1920_399f7ced9821ef832957bb0ed8fd3ff5.png" alt="center" /></p>
      <p><h1>ข้อมูลประเทศและผู้นำโลก</h1></p>
      <p><h2>เพื่อนๆ อยากรู้หรือไม่ว่าในแต่ละประเทศมีประชากรเท่าไหร่ และตอนนี้มีใครเป็นผู้นำอยู่บ้าง</h2></p>
      <a href="#button12" className="button button2">Click Me</a>
=======
      <p id="box"></p>
      <p><h1>Country and world leaders information</h1></p>
      <p><h2>Do you want to know what's the population in each country? And who are the leaders now?</h2></p>
      <a href="#button12" className="button button2" >Click me</a>
>>>>>>> wave
    </div>
  );
}

export default Intro;
