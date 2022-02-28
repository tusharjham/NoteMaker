import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import "./LandingPage.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const LandingPage = () => {
  const user = useSelector((state) => state.User);
  const navigate = useNavigate();

  useEffect(() => {
    {
      user.isLoggedIn && navigate("/mynotes");
    }
  }, [user.isLoggedIn]);
  return (
    <div className="landingPage">
      <div className="landing-page-container">
        <div className="landing-page-heading">
          <p className="lp-p1 mt-3 mb-0 fw-bold">Notes!!</p>
          <p className="lp-p2  ">Make your own notes..</p>
        </div>
        <div className="landing-page-buttoncontainer mt-5 p-0">
          <Link to="/login">
            <Button
              size="lg"
              variant="outline-dark"
              className="me-2 border border-4 border-dark fw-bold"
            >
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button
              size="lg"
              variant="outline-dark"
              className="border border-4 border-dark fw-bold"
            >
              SignUp
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
