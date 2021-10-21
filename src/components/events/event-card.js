import React from 'react'
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../events.module.css";

function EventCard(props) {
    return (
    <Card className={`${styles["event-card"]} w-75 mx-auto my-4`}>
        <Card.Img variant="top" src={props.cardImg} style={{ height: "400px" }} />
        <Card.Body>
            <Card.Title>{props.eventTitle}</Card.Title>
        </Card.Body>
            <ListGroup variant="flush">
                {props.info1 !== null && <ListGroup.Item className={`${styles["event-card-list-item"]}`}><b>Speaker : </b>{props.info1}</ListGroup.Item>}
                <ListGroup.Item className={`${styles["event-card-list-item"]}`}><b>Date : </b>{props.info2}</ListGroup.Item>
                <ListGroup.Item className={`${styles["event-card-list-item"]}`}><b>Timings : </b>{props.info3}</ListGroup.Item>
            </ListGroup>
        <Card.Body>  
            <Card.Text>{props.eventText}</Card.Text>
            {props.isLive && <a className="btn btn-info" href={props.link} target="_blank" rel="noreferrer">Webinar Link</a>}
        </Card.Body>
    </Card>
    );
}

export default EventCard;
