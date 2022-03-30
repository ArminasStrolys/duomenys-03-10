import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react'
import register from "../../../services/authServices"

const Register = () => {

const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: ''
})

const handleChange = (e) => {
    setUserData({
        ...userData,
        [e.target.name]: e.target.value
    })
}

const submitHandler = (e) => {
    e.preventDefault();
    register(userData.name, userData.email, userData.password)
}

console.log(userData)
  return (
    <>
      <h2 className="mt-3 text-container">Register</h2>
      <Form className="col-sm-6 mx-auto" onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter name" name="name" value={userData.name} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Enter e-mail" name="email" value={userData.email} onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            value={userData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          Register now
        </Button>
        <div>Have an account?<br/> <Link to='/'>Login</Link></div>
      </Form>
    </>
  );
};

export default Register;
