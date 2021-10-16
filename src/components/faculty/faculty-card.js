import React from "react";
import "../Faculty.css";

function FacultyCard(props) {
  return (
    <div class="faculty__card">
      <div class="faculty__card_img">
        <img src={props.profImg} alt="avatar-img" />
      </div>
      <div class="faculty__card_details">
        <h2>{props.name}</h2>
        <p>{props.desg}</p>
        <a href={props.profLink}>View more</a>
      </div>
    </div>
  );
}

export default FacultyCard;
