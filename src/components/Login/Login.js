import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./AdminLogin.css";
import {Link} from 'react-router-dom'

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }
  
  return (
      
    <div className="Login">
        <h2>Welcome to Admin Login</h2>
      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

        </Form.Group>
        <Link
          to='./AdminHomePage'
        >
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        </Link>
        <Form.Group>
          <Form.Label>Reset Password</Form.Label>
         
        </Form.Group>
      </Form>
    </div>
  );
}