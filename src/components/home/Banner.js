import TypingEffect from "../TypingEffect";
import React from "react";
import styles from "./banner.module.css";

function Banner() {
  return (
    <header
      className={`${styles["banner"]}`}
      style={{
        // http://dsc.du.ac.in/wp-content/uploads/2021/07/Screenshot_2019-04-08-06-08-53-037_com.instagram.android.jpg
        backgroundImage: `url("https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2ViJTIwZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={`${styles["banner__contents"]}`}>
        <h1 className={`${styles["banner__title"]}`}>
          <TypingEffect text="COMPUTER SCIENCE DEPARTMENT" />
        </h1>

        <h1 className={`${styles["banner__description"]}`}>
          The Computer Science Department represents the technological face of
          the college. Since its inception around three decades ago with
          B.Sc.(General) course, the department has evolved significantly in
          terms of number of courses offered, student and faculty strength. It
          now offers two undergraduate courses: B.Sc. Physical Science(CS) &
          B.Sc.(Hons) Computer Science...
        </h1>
      </div>

      <div className={`${styles["banner--fadeBottom"]}`} />
    </header>
  );
}

export default Banner;

// <TypingEffect text="CS DEPARTMENT" />
