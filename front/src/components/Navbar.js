import "../App.css";
import {  Link } from "react-router-dom";
/*

          <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href = "#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Guwa Studios</a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/GuwaStudios">About</Link></li>
                <li><Link className="dropdown-item" to="/GuwaStudios/talent">Talent</Link></li>
                <li><Link className="dropdown-item" to="/GuwaStudios/sponsors">Sponsors & Affiliates</Link></li>
              </ul>
            </li>

*/


function Navbar() {
  return (
    <div>
      <nav className="summer navbar navbar-expand-lg navbar-dark fixed-top">
        <Link to="/" className="navbar-brand">Auto & Kailani</Link>
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
              <Link className="nav-link" to="/about">About Me</Link>
            </li>
            <li className="nav-item active">
              <a className="nav-link" target ="_blank" rel="noreferrer" href="https://www.twitch.tv/autowhale">Stream</a>
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