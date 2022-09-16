import "../../App.css";
import pic from "../img/Halloween.jpg"

function HomeMain() {
	return(
		<div id = "home-page-main" className = "row">
			<div className = "col-12">
				<img src = {pic} id = "home-page-main-img" alt="Auto and Kailani Halloween background" />
				<div className = "text-container container-img-sm d-block d-sm-none">
					<div className ="centered-sm">Vtuber focused on making Pokemon content on Twitch and YouTube!</div>
					<button className = "btn btn-main">Socials</button>
				</div>
				<div className = "container-img-md d-none d-md-block d-lg-none">
					<div className ="centered">Centered</div>
				</div>					
				<div className = "container-img-lg d-none d-sm-none d-md-none d-lg-block">
					<div className ="centered">Centered</div>
				</div>
			</div>
		</div>
	);
};

export default HomeMain