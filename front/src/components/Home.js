import "../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Home() {
	//const [products, setProducts] = useState([]);

/*
	useEffect(() => {
		const fetchData = async () => {
			try {
				const getProducts = await fetch("/api/products");
				const json = await getProducts.json();
				setProducts(json.data);
			} catch (e) {
				console.log("Error", e);
			}
		};
		fetchData();
	}, [])
*/

/*

<Link to = "/login">
	Go LOGIN
</Link>

*/

	return (
		<div class = "container">
			<div id = "home-page-main" class = "row">
				<div class = "col-12">
				</div>
			</div>
			<div id = "home-page-creators" class = "row">
				<div class = "col-12">
				</div>
			</div>
			<div id = "home-page-cardbreaks" class = "row">
				<div class = "col-12">
				</div>
			</div>
			<div id = "home-page-charity" class = "row">
				<div class = "col-12">
				</div>
			</div>
		</div>
	);
}

export default Home;