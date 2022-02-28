import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { changeUserAuth, signup, signupFail } from "../../actions/userActions";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import MainScreen from "../../components/MainScreen";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.User);
  const { loading, error } = User;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  useEffect(() => {
    {
      User.isLoggedIn && navigate("/mynotes");
    }
    return () => {
      dispatch(changeUserAuth());
    };
  }, [User.isLoggedIn]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (password === confirmPassword) {
        dispatch(signup(name, email, password, confirmPassword));
      } else {
        throw new Error("Passoword doesn't matched");
      }
    } catch (err) {
      dispatch(signupFail(err.toString()));
    }
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
            <Button variant="success" type="Submit" className="mt-3">
              Submit
            </Button>
          </Form>
          <div>
            Already Have an account.<Link to="/login">Login</Link>
          </div>
        </div>
      </MainScreen>
    </div>
  );
};

export default RegisterPage;
