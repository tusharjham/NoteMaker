import React from "react";
import { Alert } from "react-bootstrap";

const ErrorMessage = ({ error }) => {
  return <div>{error && <Alert variant="danger">{error}</Alert>}</div>;
};

export default ErrorMessage;
