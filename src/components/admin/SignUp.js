import React, { useEffect } from "react";
import styles from "./signup.module.css";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import validateSignUp from "../../redux/actions/validateSignUp"
import { connect } from "react-redux";
import { Redirect } from "react-router-dom"

function SignUp(props) {

  useEffect(() => {
    console.log(props.success);
    if(props.success){
      window.location.href = "http://localhost:3000/admin/dashboard";
    }
  }, [props.success])

  function handleSubmit(event) {
    event.preventDefault();
    props.validateSignUp(event.target.name.value, event.target.username.value, event.target.password.value);
  }

  return (
    <div className={`${styles["signUp"]}`}>
      <Form className={`${styles["signUp-container"]} container-fluid`} onSubmit={(event) => handleSubmit(event)} >
        <Form.Text className={`${styles["h1-style"]} text-muted`}>
          <h1>New Admin ?</h1>
          <h3>Sign Up here</h3>
        </Form.Text>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label className={`${styles["label-style"]}`}>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className={`${styles["label-style"]}`}>
            Email address
          </Form.Label>
          <Form.Control type="email" name="username" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className={`${styles["label-style"]}`}>
            Password
          </Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
          <Form.Text className="text-muted">
            Password must be 8 digits long.
          </Form.Text>
        </Form.Group>
        <div className={`${styles["line-style"]}`}></div>
        <Form.Group className="mb-3">
          <Form.Text className={`${styles["link-style"]} text-muted`}>
            Already an Admin ?
          </Form.Text>
          <Link
            className={`${styles["link-style"]} text-muted`}
            to="/admin/signin"
          >
            <p className={`${styles["p-style"]}`}>Sign In here</p>
          </Link>
          {/* <Form.Text>
            Already an Admin?
            <a href="#" className={`${styles["link-style"]} text-muted`}>
              Sign In here
            </a>
          </Form.Text> */}
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { success: state.success }
}

export default connect(mapStateToProps, { validateSignUp })(SignUp);