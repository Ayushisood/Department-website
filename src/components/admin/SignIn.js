import React, { useEffect } from "react";
import styles from "./signup.module.css";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import validateSignIn from "../../redux/actions/validateSignIn";
import { connect } from "react-redux";
//import { Redirect } from "react-router-dom"

function SignIn(props) {
  useEffect(() => {
    console.log(props.success);
    if (props.success) {
      window.location.href = "http://localhost:3000/admin/dashboard";
    }
  }, [props.success]);

  function handleLogIn(event) {
    event.preventDefault();
    props.validateSignIn(
      event.target.username.value,
      event.target.password.value
    );
  }

  return (
    <div className={`${styles["signUp"]}`}>
      <Form
        className={`${styles["signUp-container"]} container-fluid`}
        onSubmit={(event) => handleLogIn(event)}
      >
        <Form.Text className={`${styles["h1-style"]} text-muted`}>
          <h1>Admin ?</h1>
          <h3>Sign In here</h3>
        </Form.Text>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={`${styles["label-style"]}`}>
            Email address
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={`${styles["label-style"]}`}>
            Password
          </Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
          />
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

const mapStateToProps = (state) => {
  return { success: state.success };
};

export default connect(mapStateToProps, { validateSignIn })(SignIn);
