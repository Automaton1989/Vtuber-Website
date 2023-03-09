import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutPage/AboutMe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CharityPage from "./components/Charity/CharityPage";
import StreamPage from "./components/StreamPage/StreamMain.js";

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="App">
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route path = "/about" element = {<AboutMe />} />
            <Route path = "/stream" element = {<StreamPage />} />
            <Route path = "/charity" element = {<CharityPage />} />
          </Routes>
        </div>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
