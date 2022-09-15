import "../../App.css";
import { Link } from "react-router-dom";

function HomeCards() {
	return (
		<div>
			<div id = "home-page-streams" className = "row">
				<div className = "col-12">
					<div className="card">
					  <h5 className="card-header">VTuber, Content Creator</h5>
					  <div className="card-body">
					    <h5 className="card-title">Auto & Kailani</h5>
					    <p className="card-text">I stream games on Twitch, upload videos to YouTube and Tiktok, and we bring positive and comfy vibes every day</p>
					    <Link to="/about" className="btn btn-primary">About Me</Link>
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
					    <Link to="#" className="btn btn-primary">View Events</Link>
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
					    <a href="https://merch.streamelements.com/automaton1989" target="_blank" rel="noreferrer" className="btn btn-primary">Go to Store</a>
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
					    <a href="https://auto-kailani.carrd.co" target="_blank" rel="noreferrer" className="btn btn-primary">Socials</a>
					  </div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HomeCards