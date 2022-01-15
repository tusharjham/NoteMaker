import React from "react";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./screens/LandingPage/LandingPage";
const App = () => {
  return (
    <div className="main">
      <Header />
      <main style={{ height: "100%" }}>
        <LandingPage />
      </main>
    </div>
  );
};

export default App;
