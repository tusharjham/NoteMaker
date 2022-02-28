import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import MainScreen from "../../components/MainScreen";
import { login } from "../../actions/userActions";
import { changeUserAuth } from "../../actions/userActions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.User);
  const { isLoggedIn, loading, error } = userLogin;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    {
      isLoggedIn && navigate("/mynotes");
    }
    return () => {
      dispatch(changeUserAuth());
    };
  }, [isLoggedIn]);
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
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
            New User? <Link to="/register">Register here</Link>
          </div>
        </div>
      </MainScreen>
    </div>
  );
};

export default LoginPage;
