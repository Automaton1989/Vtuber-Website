import "../App.css";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
	return (
		<div>
			<h1>LOGIN PAGE</h1>
			<Link to = "/">
				Go HOME
			</Link>
		</div>
	);
}

export default Login;