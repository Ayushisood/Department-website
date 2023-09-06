import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styles from "./addEvent.module.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

function AddEvent() {
  const [validated, setValidated] = useState(false);
  const [newFile, setNewFile] = useState({});

  const handleSubmit = async (event) => {
    //const form = event.currentTarget;
    event.preventDefault();
    const eventData = new FormData();
    eventData.append("title", event.target.title.value);
    // eventData.append('type', event.target.type.value);
    eventData.append("speaker", event.target.speaker.value);
    eventData.append("date", event.target.date.value);
    eventData.append("days", event.target.days.value);
    eventData.append("timeFrom", event.target.timeFrom.value);
    eventData.append("timeTo", event.target.timeTo.value);
    eventData.append("description", event.target.description.value);
    eventData.append("link", event.target.link.value);
    eventData.append("file", newFile);

    const res = await axios.post(
      "https://department-server.vercel.app/api/events",
      eventData,
      {
        withCredentials: true,
      }
    );
    if (res.data.inserted) {
      alert(res.data.msg);
      setValidated(true);
    } else {
      alert(res.data.msg);
    }
  };

  const changeHandler = (event) => {
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
            //   encType="multipart/form-data"
            noValidate
            validated={validated}
            onSubmit={(event) => handleSubmit(event)}
          >
            <Row className="mb-6">
              <Form.Group as={Col} md="6">
                <Form.Label className={`${styles["addEvents-label"]}`}>
                  Event Title
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Title of Event"
                  name="title"
                />
              </Form.Group>
              {/* <Form.Group as={Col} md="6">
                <Form.Label className={`${styles["addEvents-label"]}`}>
                  Event Type
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Type of event"
                  name="type"
                />
              </Form.Group> */}
              <Form.Group as={Col} md="6">
                <Form.Label className={`${styles["addEvents-label"]}`}>
                  Speaker Name
                </Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Speaker Name"
                  name="speaker"
                />
              </Form.Group>
            </Row>

            <Row className="mb-6">
              <Form.Group as={Col} md="6">
                <Form.Label className={`${styles["addEvents-label"]}`}>
                  Event Date
                </Form.Label>
                <Form.Control required type="date" name="date" />
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label className={`${styles["addEvents-label"]}`}>
                  No of Days
                </Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="days"
                  placeholder="Enter no of days"
                />
              </Form.Group>
            </Row>

            <Row className="mb-6">
              <Form.Group as={Col} md="6">
                <Form.Label className={`${styles["addEvents-label"]}`}>
                  Time(Hours:Minutes) : From
                </Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Hours : Minutes"
                  name="timeFrom"
                  required
                />
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label className={`${styles["addEvents-label"]}`}>
                  Time(Hours:Minutes) : To
                </Form.Label>
                <Form.Control
                  type="time"
                  placeholder="Hours : Minutes"
                  name="timeTo"
                  required
                />
              </Form.Group>
            </Row>
            <Form.Group as={Col}>
              <Form.Label className={`${styles["addEvents-label"]}`}>
                Event Description
              </Form.Label>
              <Form.Control
                required
                type="text"
                name="description"
                placeholder="Enter event description"
              />
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label className={`${styles["addEvents-label"]}`}>
                Event Link
              </Form.Label>
              <Form.Control
                required
                type="text"
                name="link"
                placeholder="Enter event link"
              />
            </Form.Group>
            <Form.Group controlId="formFileLg" className="mb-3">
              <Form.Label className={`${styles["addEvents-label"]}`}>
                upload Event Image/Poster
              </Form.Label>
              <Form.Control
                type="file"
                size="lg"
                name="file"
                onChange={changeHandler}
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

export default AddEvent;
