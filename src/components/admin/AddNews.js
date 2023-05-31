import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styles from "./addEvent.module.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

function AddNews() {
  const [validated, setValidated] = useState(false);
  const [newFile, setNewFile] = useState({});

  const handleSubmitNews = async (event) => {
    //const form = event.currentTarget;
    event.preventDefault();
    const eventData = new FormData();
    eventData.append("title", event.target.title.value);

    eventData.append("content", event.target.content.value);

    eventData.append("link", event.target.link.value);
    eventData.append("source", event.target.source.value);
    eventData.append("date", event.target.date.value);
    eventData.append("newFile", newFile);

    const res = await axios.post("https://department-server-a76gwptdr-masterrachit777.vercel.app/api/news", eventData, {
      withCredentials: true,
    });
    if (res.data.inserted) {
      alert(res.data.msg);
      setValidated(true);
    } else {
      alert(res.data.msg);
    }
  };

  const newsHandler = (event) => {
    const tempFile = event.target.files[0];
    console.log(tempFile);
    setNewFile(tempFile);
  };

  if (validated) {
    return <Redirect to="/admin/dashboard" />;
  } else {
    return (
      <div className={`${styles["addEvent-container"]}`}>
        <div className={`${styles["addEvents"]}`}>
          <Form
            noValidate
            validated={validated}
            onSubmit={(event) => handleSubmitNews(event)}
          >
            <Row className="mb-6">
              <Form.Group as={Col} md="6">
                <Form.Label className={`${styles["addEvents-label"]}`}>
                  News Title
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Title of News"
                  name="title"
                />
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label className={`${styles["addEvents-label"]}`}>
                  Content
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="News Content"
                  name="content"
                />
              </Form.Group>
            </Row>

            <Form.Group as={Col}>
              <Form.Label className={`${styles["addEvents-label"]}`}>
                Link
              </Form.Label>
              <Form.Control
                required
                type="text"
                name="link"
                placeholder="Enter link for news"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className={`${styles["addEvents-label"]}`}>
                Source of news
              </Form.Label>
              <Form.Control
                required
                type="text"
                name="source"
                placeholder="Enter source of news"
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label className={`${styles["addEvents-label"]}`}>
                Date
              </Form.Label>
              <Form.Control
                required
                type="date"
                name="date"
                placeholder="Enter date"
              />
            </Form.Group>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label className={`${styles["addEvents-label"]}`}>
                upload file*
              </Form.Label>
              <Form.Control
                type="file"
                // size="lg"
                name="newsFile"
                onChange={newsHandler}
              />
            </Form.Group>
            <Button type="submit">Submit form</Button>
          </Form>
        </div>
        {/* {isFilePicked && <img src={selectedFile} width="100px" />} */}
      </div>
    );
  }
}

export default AddNews;
