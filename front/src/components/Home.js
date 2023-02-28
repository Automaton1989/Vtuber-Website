import "../App.css";
import React, { useEffect, useState } from "react";
//import { useNavigate, Link } from "react-router-dom";
import HomeMain from "./homepage/HomeMain.js"
import HomeCards from "./homepage/HomeCards.js"

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
/*

<div id = "home-page-creators" className = "row">
	<div className = "col-12">
		<div className="card">
		  <img className="card-img-top" src="#" />
		  <div className="card-body">
		    <p className="card-text">TBD</p>
		  </div>
		</div>
	</div>
	<div className = "col-12">
		<div className="card">
		  <img className="card-img-top" src="#" />
		  <div className="card-body">
		    <p className="card-text">TBD</p>
		  </div>
		</div>
	</div>
	<div className = "col-12">
		<div className="card">
		  <img className="card-img-top" src="#" />
		  <div className="card-body">
		    <p className="card-text">TBD</p>
		  </div>
		</div>
	</div>
</div>

*/

	return (
		<div className = "container-fluid">
			<HomeMain />
			<HomeCards />
		</div>
	);
}

export default Home;