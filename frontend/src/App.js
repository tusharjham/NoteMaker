import React from "react";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginScreen/LoginPage";
import RegisterPage from "./screens/RegisterScreen/RegisterPage";
import { useSelector } from "react-redux";
const App = () => {
  const User = useSelector((state) => state.User);
  const { isLoggedIn } = User;
  return (
    <div className="main">
      <BrowserRouter>
        <Header />
        <main style={{ height: "100%" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/login" element={<LoginPage />} exact />
            <Route path="/register" element={<RegisterPage />} exact />
            <Route path="/mynotes" element={<MyNotes />} exact />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;
