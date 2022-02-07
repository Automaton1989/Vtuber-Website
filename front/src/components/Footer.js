import "../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Footer() {
  return (
	<footer class="footer">
      <div class="container">
        <span class="text-light">Place sticky footer content here.</span>
      </div>
    </footer>
  );
}

export default Footer;