import "../../App.css";
import { Link } from "react-router-dom";

function HomeCards() {
	return (
		<div className = "card-row row summer">
			<div className = "d-block col-sm-12 col-md-6 col-lg-4 col-xl-4">
				<div className="card">
				  <h5 className="card-header">VTuber, Content Creator</h5>
				  <div className="card-body">
				    <h5 className="card-title">Auto & Kailani</h5>
				    <p className="card-text">I stream games on Twitch, upload videos to YouTube and Tiktok, and we bring positive and comfy vibes every day</p>
				  </div>
				  <Link to="/about" className="btn btn-card">About Me</Link>
				</div>
			</div>
			<div className = "d-block col-sm-12 col-md-6 col-lg-4 col-xl-4">
				<div className="card">
				  <h5 className="card-header">Charity Events</h5>
				  <div className="card-body">
				    <h5 className="card-title">Yearly Charity Stream Marathon</h5>
				    <p className="card-text">Next charity stream is in the works! We support Monterey Bay Aquarium!</p>
				  </div>
				  <Link to="/charity" className="btn btn-card">View Events</Link>
				</div>
			</div>
			<div className = "d-block col-sm-12 col-md-6 col-lg-4 col-xl-4">
				<div className="card">
				  <h5 className="card-header">Livestreams</h5>
				  <div className="card-body">
				    <h5 className="card-title">Checkout my livestreams!</h5>
				    <p className="card-text">Check out my livestreams over at Twitch, the Vtuber livestream platform!</p>
				  </div>
				  <a href="https://www.twitch.tv/autowhale" target="_blank" rel="noreferrer" className="btn btn-card">Twitch</a>
				</div>
			</div>
		</div>
	)
}

export default HomeCards