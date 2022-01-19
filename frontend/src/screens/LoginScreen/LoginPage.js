import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import MainScreen from "../../components/MainScreen";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/userLogin",
        { email, password },
        config
      );
      setError("");
      console.log("backend data", data);
    } catch (err) {
      console.log("error displayed", err.response.data);
      setError(err.response.data);
    }
    setLoading(false);
  };

  return (
    <div>
      <MainScreen title="LOGIN">
        <div className="logincontainer">
          <ErrorMessage error={error} />
          <LoadingMessage status={loading} />
          <Form onSubmit={submitHandler}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                required={true}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
          <div>
            New User? <a href="/register">Register here</a>
          </div>
        </div>
      </MainScreen>
    </div>
  );
};

export default LoginPage;
