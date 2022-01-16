import React from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
>>>>>>> 0b3b501c87b0221c3602af8ea07049e933e28716
import "./Header.css";
const Header = () => {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      className="nv navbar-dark position-sticky top-0 "
    >
      <Container className="p-2">
        <Navbar.Brand>
          <Link
            to="/"
            style={{ textDecoration: "none", color: "rgba(255,255,255,.55)" }}
          >
            NoteMaker
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-1" />
        <Navbar.Collapse id="nav-1">
          <Nav className="m-auto">
            <Form className="mt-3 mt-lg-0">
              <Form.Control type="text" placeholder="Search..." />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link
                to="/mynotes"
                style={{
                  textDecoration: "none",
                  color: "rgba(255,255,255,.55)",
                }}
              >
                My Notes
              </Link>
            </Nav.Link>
            <NavDropdown title="User" className="w-25 ">
              <NavDropdown.Item className="p-0 p-lg-2  ">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="p-0 p-lg-2">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
