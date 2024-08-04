import React, { useState, useEffect } from "react";
import "./SigninForm.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import * as authService from "../../services/apiServices";

const initialState = {
  username: "",
  password: "",
};

const SigninForm = (props) => {
  const navigate = useNavigate(); 
  const [message, setMessage] = useState([""]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const updateMessage = (msg) => {
    setMessage(msg);
  };

  const handleChange = (e) => {
    updateMessage("");
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await authService.signin(formData); // TODO build signin service function

      props.setUser(user);
      navigate("/");
    } catch (err) {
      updateMessage(err.message);
    }
  };

  return (
    <div className="signup-page container">
      <Container className="signup-container">
        <Row>
          <Col>
            <h1 className="text-center my-5 text-black">
              Signup to get started
            </h1>
            <p>{message}</p>
          </Col>
        </Row>
        <Form
          noValidate
          className="signup-form"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid username address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Button variant="success" type="submit">
            Log In
          </Button>
          <br />
          <Button className="red-btn" variant="danger" type="submit">
            Cancel
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default SigninForm;
