import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx"
import HeaderBar from "./Components/HeaderBar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <HeaderBar />
      
      <div className="App">
        <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
