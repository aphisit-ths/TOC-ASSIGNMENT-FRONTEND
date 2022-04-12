import React from "react";
import "./intro.scss";
function Intro() {
  return (
    <>
      <div className="intro">
        <div className="img">
          <img
            src="https://www.maropeng.co.za/uploads/imager/files/19832/world-1303628_1920_399f7ced9821ef832957bb0ed8fd3ff5.png"
            alt="center"
          />
        </div>
        <h1>ข้อมูลประเทศและผู้นำโลก</h1>
        <h2>
          เพื่อนๆ อยากรู้หรือไม่ว่าในแต่ละประเทศมีประชากรเท่าไหร่
          และตอนนี้มีใครเป็นผู้นำอยู่บ้าง
        </h2>
        <a href="#map" className="button">
          Click Me
        </a>
      </div>
    </>
  );
}

export default Intro;
