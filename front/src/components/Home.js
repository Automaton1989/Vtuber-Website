import "../App.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import pic from "./img/Halloween.jpg"

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
			<div id = "home-page-main" className = "row">
				<div className = "col-12">
					<img src = {pic} id = "home-page-main-img" alt="Auto and Kailani Halloween background" />
					<div class = "container-img-sm d-block d-sm-none">
						<div class="centered">Centered</div>
					</div>
					<div class = "container-img-md d-none d-md-block d-lg-none">
						<div class="centered">Centered</div>
					</div>					
					<div class = "container-img-lg d-none d-sm-none d-md-none d-lg-block">
						<div class="centered">Centered</div>
					</div>
				</div>
			</div>
			<div id = "home-page-streams" className = "row">
				<div className = "col-12">
					<div className="card">
					  <h5 className="card-header">VTuber, Content Creator</h5>
					  <div className="card-body">
					    <h5 className="card-title">Auto & Kailani</h5>
					    <p className="card-text">I stream games on Twitch, upload videos to YouTube and Tiktok, and we bring positive and comfy vibes every day</p>
					    <Link to="/about" class="btn btn-primary">About Me</Link>
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
					    <p className="card-text">Next charity stream is in the works! We support Monterey Bay Aquarium!</p>
					    <Link to="#" class="btn btn-primary">View Events</Link>
					  </div>
					</div>
				</div>
			</div>
			<div id = "" className = "row">
				<div className = "col-12">
					<div className="card">
					  <h5 className="card-header">Merch</h5>
					  <div className="card-body">
					    <h5 className="card-title">I have cool merch!</h5>
					    <p className="card-text">I have a streamelements merch store open!  Filled with great ways to show your support, and holiday themed material!</p>
					    <a href="https://merch.streamelements.com/automaton1989" target="_blank" rel="noreferrer" class="btn btn-primary">Go to Store</a>
					  </div>
					</div>
				</div>
			</div>
			<div id = "" className = "row">
				<div className = "col-12">
					<div className="card">
					  <h5 className="card-header">Socials</h5>
					  <div className="card-body">
					    <h5 className="card-title">Find my content!</h5>
					    <p className="card-text">You can view all my socials on carrd if you'd like to follow my content!</p>
					    <a href="https://auto-kailani.carrd.co" target="_blank" rel="noreferrer" class="btn btn-primary">Socials</a>
					  </div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;