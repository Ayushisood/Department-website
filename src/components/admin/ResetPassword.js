import React from "react";
import styles from "./signup.module.css";
import Form from "react-bootstrap/Form";
//import { Redirect, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function ResetPassword() {
  function handleResetPassword() {}
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

export default ResetPassword;
