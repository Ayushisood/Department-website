import TypingEffect from "../TypingEffect";
import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header
      className=" banner"
      style={{
        backgroundImage: `url("http://dsc.du.ac.in/wp-content/uploads/2021/07/Screenshot_2019-04-08-06-08-53-037_com.instagram.android.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents ">
        <h1 className="banner__title">
          <TypingEffect text="COMPUTER SCIENCE DEPARTMENT" />
        </h1>

        <h1 className="banner__description">
          The Computer Science Department represents the technological face of
          the college. Since its inception around three decades ago with
          B.Sc.(General) course, the department has evolved significantly in
          terms of number of courses offered, student and faculty strength. It
          now offers two undergraduate courses: B.Sc. Physical Science(CS) &
          B.Sc.(Hons) Computer Science...
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;

// <TypingEffect text="CS DEPARTMENT" />
