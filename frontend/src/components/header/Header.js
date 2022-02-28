import React from "react";
import { Container, Form, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/userActions";
import "./Header.css";
import { NavLink } from "react-router-dom";
const Header = ({ setSearch }) => {
  const User = useSelector((state) => state.User);
  const { isLoggedIn, userInfo } = User;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  const style1 = {
    position: "relative",
    left: "15%",
    transition: "all 0.6s ease-in-out",
  };
  const style2 = {
    position: "relative",
    left: "0%",
    transition: "all 0.6s ease-in-out",
  };
  return (
    <Navbar
      bg="dark"
      expand="lg"
      className="nv navbar-dark position-sticky top-0 "
    >
      <Container className="p-2">
        <Navbar.Brand style={isLoggedIn ? style2 : style1}>
          <Link
            to="/"
            onClick={isLoggedIn ? (e) => e.preventDefault() : null}
            style={{ textDecoration: "none", color: "rgba(255,255,255,.55)" }}
          >
            NoteMaker
          </Link>
        </Navbar.Brand>
        {isLoggedIn && (
          <>
            <Navbar.Toggle aria-controls="nav-1" />
            <Navbar.Collapse id="nav-1">
              <Nav className="m-auto">
                <Form className="mt-3 mt-lg-0">
                  <Form.Control
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                  />
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
                <NavDropdown title={userInfo.name} className="w-25 ">
                  <LinkContainer to="/editprofile">
                    <NavDropdown.Item className="p-0 p-lg-2">
                      My Profile
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    className="p-0 p-lg-2"
                    onClick={submitHandler}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
