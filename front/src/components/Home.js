import "../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import pic from "./img/main-background.jpeg"

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

<Link to = "/login">
	Go LOGIN
</Link>

*/

	return (
		<div className = "container-fluid">
			<div id = "home-page-main" className = "row">
				<div className = "col-12">
					<img src = {pic} id = "home-page-main-img" />
				</div>
			</div>
			<div id = "home-page-creators" className = "row">
				<div className = "col-12">
					<div className="card">
					  <img className="card-img-top" src="#" />
					  <div className="card-body">
					    <p className="card-text">CARD 1</p>
					  </div>
					</div>
				</div>
				<div className = "col-12">
					<div className="card">
					  <img className="card-img-top" src="#" />
					  <div className="card-body">
					    <p className="card-text">CARD 2</p>
					  </div>
					</div>
				</div>
				<div className = "col-12">
					<div className="card">
					  <img className="card-img-top" src="#" />
					  <div className="card-body">
					    <p className="card-text">CARD 3</p>
					  </div>
					</div>
				</div>
			</div>
			<div id = "home-page-cardbreaks" className = "row">
				<div className = "col-12">
					<div className="card">
					  <h5 className="card-header">Card Breaks</h5>
					  <div className="card-body">
					    <h5 className="card-title">Auto's Card Breaks</h5>
					    <p className="card-text">Wanna join my card breaks for new Pokemon and Wixoss sets?</p>
					    <Link to="#" class="btn btn-primary">Sign up for a break!</Link>
					  </div>
					</div>
				</div>
			</div>
			<div id = "home-page-charity" className = "row">
				<div className = "col-12">
					<div className="card">
					  <h5 className="card-header">Charity Events</h5>
					  <div className="card-body">
					    <h5 className="card-title">Yearly Charity Stream Marathon</h5>
					    <p className="card-text">Next charity stream is March 16-20, 2022 in support of Monterey Bay Aquarium!</p>
					    <Link to="#" class="btn btn-primary">View Events</Link>
					  </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;