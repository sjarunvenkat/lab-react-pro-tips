import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import RegistrationForm from "./pages/RegistrationForm";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <ul>
          <div className="left-align">
            <li>
              <Link to="/">Kalvium ❤️</Link>
            </li>
          </div>
          <div className="right-align">
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/register">Registration Form</Link>
            </li>
          </div>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </>
  );
}

export default App;
