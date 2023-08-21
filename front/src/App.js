import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutPage/AboutMe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CharityPage from "./components/Charity/CharityPage";
import NovaStellaHome from './components/NovaStella/NovaStellaHome';
import NovaStellaTalent from './components/NovaStella/NovaStellaGallery';
import NovaStellaAffiliates from './components/NovaStella/NovaStellaAffiliates';
import StellaBear from './components/Stella/StellaBear';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Navbar />
        <div className="App">
          <Routes>
            <Route exact path = "/" element = {<Home />} />
            <Route path = "/about" element = {<AboutMe />} />
            <Route path = "/charity" element = {<CharityPage />} />
            <Route path = "/Novastella/talent" element = {<NovaStellaTalent />} />
            <Route path = "/Novastella" element = {<NovaStellaHome />} />
            <Route path = "/Novastella/sponsors" element = {<NovaStellaAffiliates />} />
            <Route path = "Stella" element = {<StellaBear />} />
          </Routes>
        </div>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
