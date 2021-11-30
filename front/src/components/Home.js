import "../App.css";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1>HOME PAGE</h1>
			<Link to = "/login">
				Go LOGIN
			</Link>
		</div>
	);
}

export default Home;