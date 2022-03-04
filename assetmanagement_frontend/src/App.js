import React, {useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx"
import HeaderBar from "./Components/HeaderBar";
import Profle from "./Pages/Profile.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./Components/UserContext";

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
            <Route path="/profile" element={<Profle />} />
          </Routes>

        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
