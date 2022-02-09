import React  from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
