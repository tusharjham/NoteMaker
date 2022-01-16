import React from "react";
import { Container, Row } from "react-bootstrap";
import "./MainScreen.css";
const MainScreen = ({ title, children }) => {
  return (
    <div className="mainscreen mt-4">
      <Container>
        <Row>
          <div className="mainscreen-page">
            {title && (
              <>
                <h1 className="mainscreen-page-heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
