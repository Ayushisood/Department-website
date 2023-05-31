import React, { useState } from "react";
import styles from "./signup.module.css";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Button from "react-bootstrap/Button";

function ResetPassword() {
  const [linkSent, setLinkSent] = useState(false);

  const handleResetPassword = async (event) => {
    event.preventDefault();
    const postBody = new URLSearchParams({
      username: event.target.username.value,
    }).toString();

    const response = await axios.post(
      "https://department-server-a76gwptdr-masterrachit777.vercel.app/api/reset-password",
      postBody,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    if(response.data.linkSent){
      alert(response.data.msg);
      setLinkSent(true);
    } else{
      alert(response.data.msg)
    }
  };

  if(linkSent){
    return (
      <Redirect to='/admin/signin' />
    )
  } else {
    return (
      <div className={`${styles["signUp"]}`}>
        <Form
          className={`${styles["signUp-container"]} container-fluid`}
          onSubmit={(event) => handleResetPassword(event)}
        >
          <Form.Text className={`${styles["h1-style"]} text-muted`}>
            <h1>Reset your password</h1>
          </Form.Text>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className={`${styles["label-style"]}`}>
              Registered Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your registered email"
              name="username"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Send confirmation link
          </Button>
        </Form>
      </div>
    );
  }
}

export default ResetPassword;
