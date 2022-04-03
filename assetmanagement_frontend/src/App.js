import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx"
import Register from "./Pages/Login/Register.jsx"
import HeaderBar from "./Components/HeaderBar";
import Profle from "./Pages/Login/Profile.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./Components/UserContext";
import AddAsset from "./Pages/Assets/AddAssets";
import ViewAssets from "./Pages/Assets/ViewAssets";
import AssetDetailsPage from "./Pages/Assets/AssetDetailsPage";
import BulletinsPage from "./Pages/BulletinBoard/Board.jsx"
import ScheduleAppointment from "./Pages/Appointments/ScheduleAppointments";
import ViewAllRequests from "./Pages/AssetRequest/ViewAllRequests";
import AllUserAsRequests from "./Pages/AssetRequest/AllUserAsRequests";
import _404Page from "./Pages/Login/404Page";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("userLogin");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("userLogin", JSON.stringify(user));
  })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <div className="App">

          {user !== null ? <HeaderBar /> : null}


          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Login />} exact />
            <Route path="/register" element={<Register />} />

            {user?.userName ?
              <>
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profle />} />
                <Route path="/viewAllAssets" element={<ViewAssets />} />
                <Route path="/assetDetails" element={<AssetDetailsPage />} />
                <Route path="/viewAllBulletins" element={<BulletinsPage />} />
                <Route path="/scheduleAppointment" element={<ScheduleAppointment />} />
                <Route path="/viewAllRequests" element={<ViewAllRequests />} />
                {/* Error Routes */}
                <Route path='*' element={<_404Page />} />
              </>
              : null}

            {/* Admin Routes */}
            {user?.isAdmin ?
              <>
                <Route path="/addAsset" element={<AddAsset />} />
                <Route path="/pendingUserAssetRequests" element={<AllUserAsRequests/>}/>
              </>
              : null}

            <Route path='*' element={<_404Page />} />

          </Routes>


        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
