import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <div className="landingPage">
      <div className="landing-page-container">
        <div className="landing-page-heading">
          <p className="lp-p1 mt-3 mb-0 fw-bold">Notes!!</p>
          <p className="lp-p2  ">Make your own notes..</p>
        </div>
        <div className="landing-page-buttoncontainer mt-5 p-0">
          <a href="">
            <Button
              size="lg"
              variant="outline-dark"
              className="me-2 border border-4 border-dark fw-bold"
            >
              Login
            </Button>
          </a>
          <a href="">
            <Button
              size="lg"
              variant="outline-dark"
              className="border border-4 border-dark fw-bold"
            >
              SignUp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
