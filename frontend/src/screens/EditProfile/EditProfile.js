import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ErrorMessage from "../../components/ErrorMessage";
import LoadingMessage from "../../components/LoadingMessage";
import {
  changeUserAuth,
  editProfile,
  editProfileFailure,
} from "../../actions/userActions";
import { useNavigate } from "react-router-dom";
const EditProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const User = useSelector((state) => state.User);
  const { error, loading } = User;
  const { userInfo } = User;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [typeemail, setTypeEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo.name, userInfo.email]);
  useEffect(() => {
    {
      !User.isLoggedIn && navigate("/login");
    }
    {
      User.success === true && navigate("/mynotes");
    }
    return () => {
      dispatch(changeUserAuth());
    };
  }, [User.success, User.isLoggedIn]);

  const resetDefault = () => {
    setName(userInfo.name);
    setEmail(userInfo.email);
    setPassword("");
    setConfirmPassword("");
  };

  const submitHandler = (e) => {
    try {
      e.preventDefault();
      if (confirmPassword === password) {
        dispatch(editProfile(name, typeemail, password));
      } else {
        throw new Error("Password Doesn't match");
      }
    } catch (err) {
      dispatch(editProfileFailure(err.toString()));
    }
  };

  return (
    <div>
      <MainScreen title="Edit Profile">
        <ErrorMessage error={error} />
        <LoadingMessage status={loading} />
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-1">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
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
              placeholder={`Enter to change or just retype your email.. Your email: ${email}`}
              required={true}
              value={typeemail}
              onChange={(e) => setTypeEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="Submit" className="mt-3">
            Submit
          </Button>
          <Button variant="danger" className="mt-3 ms-1" onClick={resetDefault}>
            Reset
          </Button>
        </Form>
      </MainScreen>
    </div>
  );
};

export default EditProfile;
