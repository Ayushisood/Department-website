import React from "react";
import styles from "./horizontalCard.module.css";

function HorizontalCard(props) {
  return (
    <div className={`${styles["background-poster"]}`}>
      <div className={`${styles["poster-content"]}`}>
        <div className={`${styles["poster-video"]}`}>
          <img src={props.image1} alt="" />
        </div>
        <div className={`${styles["poster-text"]}`}>
          <h1>{props.heading1}</h1>
          <h3>Description</h3>
          <p>{props.text1}</p>
        </div>
      </div>
    </div>
  );
}

export default HorizontalCard;
