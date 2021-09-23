import React from "react";
import "./Card.css";

function Card(props) {
  return (
    <div className="card">
      <div className="card__media">
        <img className="images" src={props.image} alt="" />
      </div>

      <div className="card__content">
        <header className="card__header">
          <h2>{props.heading}</h2>
        </header>
        <p className="card__text">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
