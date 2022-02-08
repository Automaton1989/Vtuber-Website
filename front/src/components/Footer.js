import "../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Footer() {
  return (
	<footer className="footer">
      <div className="container">
        <span className="text-light">Place sticky footer content here.</span>
      </div>
    </footer>
  );
}

export default Footer;