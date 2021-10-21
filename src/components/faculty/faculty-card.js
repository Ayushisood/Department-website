import React from "react";
import styles from "../Faculty.module.css";

function FacultyCard(props) {
  
  return (
    <div className={`${styles["facultyCard"]}`}>
      <div className={`${styles["facultyCardImg"]}`}>
        <img src={props.profImg} alt="avatar-img" />
      </div>
      <div className={`${styles["facultyCardDetails"]}`}>
        <h2>{props.name}</h2>
        <p>{props.desg}</p>
        <a href={props.profLink}>View more</a>
      </div>
    </div>
  );
}

export default FacultyCard;
