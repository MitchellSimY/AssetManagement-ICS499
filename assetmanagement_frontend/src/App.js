import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx"
import HeaderBar from "./Components/HeaderBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./Components/UserContext";
import { useState } from "react";
import { useEffect } from "react";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("userLogin");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("userLogin",JSON.stringify(user));
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <div className="App">

          <HeaderBar />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>

        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
