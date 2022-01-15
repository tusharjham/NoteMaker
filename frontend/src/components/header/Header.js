import React from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Container className="p-2">
        <Navbar.Brand>NoteMaker</Navbar.Brand>
        <Navbar.Toggle aria-controls="nav-1" />
        <Navbar.Collapse id="nav-1">
          <Nav className="m-auto">
            <Form className="mt-3 mt-lg-0">
              <Form.Control type="text" placeholder="Search..." />
            </Form>
          </Nav>
          <Nav>
            <Nav.Link>My Notes</Nav.Link>
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
