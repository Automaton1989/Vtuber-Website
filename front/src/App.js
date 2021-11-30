import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <h1>MAIN PAGE</h1>
      <div className="App">
        <Routes>
          <Route exact path = "/" element = {<Home />} />
          <Route path = "/login" element = {<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
