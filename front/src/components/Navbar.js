import "../App.css";
import {  Link } from "react-router-dom";
/*
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-static-top">
        <Link to="/" className="navbar-brand" href="#">AUTO LOGO</Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse in" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="#">Streams</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Charity</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link" to="#">Merch</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
          </ul>
        </div>
      </nav>

*/


function Navbar() {
  return (
    <div>
      <nav className="summer navbar navbar-expand-lg navbar-dark fixed-top">
        <Link to="/" className="navbar-brand" href="#">AUTO LOGO</Link>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse in" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link className="nav-link" to="/Novastella">Nova Stella</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link" target ="_blank" rel="noreferrer" href="https://vstream.com/c/@Auto">Stream</a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/charity">Charity</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;