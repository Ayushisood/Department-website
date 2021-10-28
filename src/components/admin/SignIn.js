import React from "react";
import styles from "./signup.module.css";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

function SignIn() {
  return (
    <div className={`${styles["signUp"]}`}>
      <Form className={`${styles["signUp-container"]} container-fluid`}>
        <Form.Text className={`${styles["h1-style"]} text-muted`}>
          <h1>Admin ?</h1>
          <h3>Sign In here</h3>
        </Form.Text>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={`${styles["label-style"]}`}>
            Email address
          </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={`${styles["label-style"]}`}>
            Password
          </Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text>
            <a href="#" className={`${styles["link-style"]} text-muted`}>
              Forgot password?
            </a>
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  );
}

export default SignIn;
