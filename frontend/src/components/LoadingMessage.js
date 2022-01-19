import React from "react";
import { Spinner } from "react-bootstrap";

const LoadingMessage = ({ status }) => {
  return (
    <div className="mx-auto">
      {status && (
        <div>
          <Spinner
            size="lg"
            animation="border"
            variant="dark"
            style={{ marginLeft: "50%", height: "3rem", width: "3rem" }}
          />
        </div>
      )}
    </div>
  );
};

export default LoadingMessage;
