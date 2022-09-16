import "../App.css";
import React from "react";
import { Link } from "react-router-dom";

function AboutMe() {
	return (
		<div>
			<h1>ABOUT ME PAGE</h1>
			<Link to = "/">
				Go HOME
			</Link>
		</div>
	);
}

export default AboutMe;