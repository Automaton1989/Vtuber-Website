import "../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Home() {
	const [products, setProducts] = useState([]);

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

	return (
		<div>
			<h1>HOME PAGE</h1>
			<Link to = "/login">
				Go LOGIN
			</Link>
			<ul>
			{products.map(function (product, index) {
				return (
				<li key = {index}>{product.name}</li>
				);
			})}
			</ul>
		</div>
	);
}

export default Home;