import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="App">
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route path = "/login" element = {<Login />} />
          </Routes>
        </div>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
