import "../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";


function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
        <div className="collapse navbar-collapse" id="navbarNav">
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
    </div>
  );
}

export default Navbar;