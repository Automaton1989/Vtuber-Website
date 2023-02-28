import "../../App.css";
import pic from "../img/Halloween.jpg"

function HomeMain() {
	return(
		<div id = "home-page-main" className = "row">
			<div className = "col-12">
				<img src = {pic} id = "home-page-main-img" alt="Auto and Kailani Halloween background" />
				<div className = "text-container container-img-sm d-block d-sm-block d-md-none">
					<div className ="centered-sm">Vtuber focused on making Pokemon content on Twitch and YouTube!</div>
					<button className = "btn btn-main btn-main-sm">Socials</button>
				</div>
				<div className = "text-container container-img-md d-none d-md-block d-lg-none">
					<div className ="centered-md">Vtuber focused on making Pokemon content on Twitch and YouTube!</div>
					<button className = "btn btn-main btn-main-md">Socials</button>
				</div>					
				<div className = "text-container container-img-lg d-none d-sm-none d-md-none d-lg-block">
					<div className ="centered-lg">Vtuber focused on making Pokemon content on Twitch and YouTube!</div>
					<button className = "btn btn-main btn-main-lg">Socials</button>
				</div>
			</div>
		</div>
	);
};

export default HomeMain