import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: "3%",
        position: "relative",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <a href="https://github.com/tusharjham/MERN-NoteMaker" target="_blank">
        <img
          src="https://cdn-icons-png.flaticon.com/512/270/270798.png"
          style={{ height: "80%" }}
        />
      </a>
    </div>
  );
};

export default Footer;
