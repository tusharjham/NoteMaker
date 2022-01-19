import React from "react";
import { Form, Button } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";

const RegisterPage = () => {
  return (
    <div>
      <MainScreen title="Sign Up">
        <div className="registerpage-container">
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required={true}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required={true}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                required={true}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                required={true}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control type="text" placeholder="Upload Profile Picture" />
            </Form.Group>
            <Button variant="success" type="Submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </div>
      </MainScreen>
    </div>
  );
};

export default RegisterPage;
