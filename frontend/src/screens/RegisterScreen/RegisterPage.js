import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import MainScreen from "../../components/MainScreen";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    if (password != confirmPassword) {
      setError("Password doesn't match");
    } else {
      try {
        const config = {
          header: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "/api/userregister",
          { name, email, password },
          config
        );
        console.log("Registered Succesfully", data);
      } catch (error) {
        setError(error.response.data);
      }
    }
    setLoading(false);
  };
  return (
    <div>
      <MainScreen title="Sign Up">
        <div className="registerpage-container">
          <ErrorMessage error={error} />
          <LoadingMessage status={loading} />
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required={true}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                required={true}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-1">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
            <Button variant="success" type="Submit" className="mt-3">
              Submit
            </Button>
          </Form>
          <div>
            Already Have an account.<a href="/login">Login</a>
          </div>
        </div>
      </MainScreen>
    </div>
  );
};

export default RegisterPage;
