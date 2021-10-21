import React from "react";
import styles from "./card.module.css";
import Card from "react-bootstrap/Card";

function Cards(props) {
  return (
    <div>
      <Card className={`${styles["card"]}`}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body className={`${styles["card-content"]}`}>
          <Card.Title>{props.heading}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
