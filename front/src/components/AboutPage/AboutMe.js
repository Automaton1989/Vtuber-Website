import "../.././App.css";
import React from "react";
import pic from ".././img/pfp-Halloween.png"
import back from ".././img/Halloween.jpg"

function AboutMe() {
	return (
		<div>
			<div className = "container-fluid">
				<div id = "about-header-card" className = "row">
					<div className="card-wrapper col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">
						<div  className="card profile-card-3">
							<div className="background-block">
								<img alt="Background of Halloween Kailani" className="background" id="ATBackground" src={back}/>
							</div>
							<div className="profile-thumb-block">
								<img alt="Pfp of Kailani's Face" className="profile" src={pic}/>
							</div>
							<div className="card-content">
								<h2>Automaton
									<small>
										Vtuber, YouTuber, Rat Gamer, Whale
									</small>
								</h2>
								<p className = "card-text">
									I stream on Twitch, make YouTube/Tiktok videos, and play lots of Pokemon and Monster Tamer games.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className = "row">
					<div className = "col-12 col-sm-8 offset-sm-2  col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">
						<div className="card card-about">
							<div className="card-body">
								I started streaming over 6 years ago, and started to be a Vtuber about 6 months ago.  My OC is a whale, and his friend Kailani.
								Now, I focus my content around my OC, playing Pokemon and Monster taming games, and making vidoes on YouTube and Tiktok
								featuring my suffering during Pokemon Ironmon Kaizo runs, as well as let's plays of various new releases.  I try to 
								be relaxed, open minded, and fun!  
							</div>
						</div>
					</div>
				</div>
				<div className = "row">
					<div className = "col-12 col-sm-8 offset-sm-2  col-md-6 offset-md-3 col-lg-4 offset-lg-4 col-xl-4 offset-xl-4">
						<div className="card card-about">
							<div className="card-body">
								IRL, I am in school finishing a Master's in Computer Science, and I made this website myself!  I really enjoy making small websites,
								I've made websites for friends and my previous business endeavors in the past.  I hope you enjoy my content, and if you want to support
								me further, feel free to head over to the social section of the website and follow me there!
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutMe;