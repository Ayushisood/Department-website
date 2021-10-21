import React from 'react'
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import styles from "../events.module.css";

function EventCard(props) {
    return (
    <Card className={`${styles["event-card"]} w-75 mx-auto my-4`}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1615859131861-052f0641a60e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lkZSUyMHdhbGxwYXBlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80" style={{ height: "200px" }} />
        <Card.Body>
            <Card.Title>{props.eventTitle}</Card.Title>
        </Card.Body>
            <ListGroup variant="flush">
            <ListGroup.Item><b>Speaker : </b>{props.info1}</ListGroup.Item>
            <ListGroup.Item><b>Date : </b>{props.info2}</ListGroup.Item>
            <ListGroup.Item><b>Timings : </b>{props.info3}</ListGroup.Item>
            </ListGroup>
        <Card.Body>  
            <Card.Text>{props.eventText}</Card.Text>
            {props.isLive && <a className="btn btn-info" href={props.link}>Webinar Link</a>}
        </Card.Body>
    </Card>
    );
}

export default EventCard;
