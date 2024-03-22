import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/AboutPage/AboutMe";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CharityPage from "./components/Charity/CharityPage";
import GuwaStudiosHome from './components/GuwaStudios/GuwaStudiosHome';
import GuwaStudiosTalent from './components/GuwaStudios/GuwaStudiosGallery';
import StellaBear from './components/Stella/StellaBear';
import GuwaStudiosAffiliates from './components/GuwaStudios/GuwaStudiosAffiliates';

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
            <Route path = "/GuwaStudios/talent" element = {<GuwaStudiosTalent />} />
            <Route path = "/GuwaStudios" element = {<GuwaStudiosHome />} />
            <Route path = "/GuwaStudios/sponsors" element = {<GuwaStudiosAffiliates />} />
            <Route path = "Stella" element = {<StellaBear />} />
          </Routes>
        </div>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;
