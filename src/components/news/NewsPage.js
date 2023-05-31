import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./newsPage.module.css";
import Card from "react-bootstrap/Card";
import Nav from "../Nav";
import Footer from "../Footer";

function NewsPage() {
  const [newsItem, setNewsItem] = useState(undefined);
  const { newsID } = useParams();

  useEffect(() => {
    async function fetchNews() {
      const res = await axios.get(`https://department-server-a76gwptdr-masterrachit777.vercel.app/api/news/${newsID}`);
      console.log(res.data);
      setNewsItem(res.data);
    }
    fetchNews();
  }, []);

  return (
    <div>
      <Nav />
      { (newsItem !== undefined) && (
        <Card className={`${styles["news-card"]}  text-center `}>
          <Card.Body className={`${styles["news-card-content"]}`}>
            <Card.Title style={{ boxShadow: "0 0 6px black", borderRadius: "10px", padding: "10px 0" }}>{newsItem.title}</Card.Title>
            <Card.Text>{newsItem.content}</Card.Text>

            <Card.Subtitle className="mb-2 ">~{newsItem.source}</Card.Subtitle>
            <hr />
            <Card.Text>Link: </Card.Text>
            <Card.Link target="_blank" href={newsItem.links.webLink}>
              {newsItem.links.webLink}
            </Card.Link>
            <br />
            <Card.Text>File Associated: </Card.Text>
            <Card.Link href={`https://department-server-a76gwptdr-masterrachit777.vercel.app/${newsItem.links.filePath}`} target="_blank">
              {newsItem.links.filePath}
            </Card.Link>
          </Card.Body>
          <Card.Footer className="text-muted">{newsItem.date}</Card.Footer>
        </Card>
      )}
      <Footer />
    </div>
  );
}

export default NewsPage;
