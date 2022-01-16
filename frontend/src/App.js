import React from "react";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
const App = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <main style={{ height: "100%" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/mynotes" element={<MyNotes />} exact />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
