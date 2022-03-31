import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { login, auth } from "../../../services/authServices";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (loading) {
      return;
    }
    if (user) navigate("/expenses");
  }, [user, loading]);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login(credentials.email, credentials.password);
  };

  return (
    <>
      <h2 className="text-center mt-3">Login</h2>
      <Form className="col-sm-6 mx-auto">
        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            name="email"
            placeholder="Your e-mail"
            value={credentials.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            name="password"
            placeholder="Your password"
            value={credentials.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" onSubmit={submitHandler}>
          Login
        </Button>
      </Form>
    </>
  );
};

export default Login;
