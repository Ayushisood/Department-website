import React from "react";
import styles from "../faculty.module.css";

function FacultyCard(props) {
  
  return (
    <div class={`${styles["faculty__card"]}`}>
      <div class={`${styles["faculty__card_img"]}`}>
        <img src={props.profImg} alt="avatar-img" />
      </div>
      <div class={`${styles["faculty__card_details"]}`}>
        <h2>{props.name}</h2>
        <p>{props.desg}</p>
        <a href={props.profLink} target='_blank' rel="noopener noreferrer">View more</a>
      </div>
    </div>
  );
}

export default FacultyCard;
