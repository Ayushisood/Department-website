import React from "react";
// import axios from "axios";
import styles from "./newsPage.module.css";
import Card from "react-bootstrap/Card";
import Nav from "../Nav";
import Footer from "../Footer";

function NewsPage(props) {
  return (
    <div>
      <Nav />
      <Card className={`${styles["news-card"]}  text-center `}>
        {/* <Card.Header>{props.title}</Card.Header> */}
        <Card.Body className={`${styles["news-card-content"]}`}>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.content}</Card.Text>

          <Card.Subtitle className="mb-2 ">{props.source}</Card.Subtitle>
          <Card.Link target="blank" href={`${props.link}`}>
            {props.linkName}
          </Card.Link>
          <Card.Link href={`${props.file}`} target="blank">
            {props.fileName}
          </Card.Link>
        </Card.Body>
        <Card.Footer className="text-muted">{props.date}</Card.Footer>
      </Card>
      <Footer />
    </div>
  );
}

export default NewsPage;
