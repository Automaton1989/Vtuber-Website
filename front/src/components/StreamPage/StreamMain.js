import "../.././App.css";
import { Link } from "react-router-dom";

function StreamMain() {
	/* autokailani.herokuapp.com */
	return(
		<div className = "container-fluid">
				<div className = "row">
					<div className = "col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
						<div className="card card-stream">
							<div id="twitch_stream_header_card" className="card-title">
								My Stream
							</div>
						</div>
					</div>
				</div>
			<div id = "stream_video_row" className = "row">
				<div className = "d-block col-sm-12 col-md-8 col-lg-8 col-xl-9">
					<iframe id="twitch_stream_video" src="https://player.twitch.tv/?channel=autowhale&parent=autokailani.herokuapp.com" title="Auto Stream Video" frameBorder="0" allowFullScreen={true} scrolling="no"></iframe>
				</div>
				<div className = "d-block col-sm-12 col-md-4 col-lg-4 col-xl-3">
					<iframe
					  title = "Auto Stream Chat"
					  id="twitch_stream_chat"
					  src="https://www.twitch.tv/embed/autowhale/chat?parent=localhost"
					  >
					</iframe>
				</div>
			</div>
			<div id ="stream_panels_row" className = "row">
				<div className = "d-block col-sm-12 col-md-6 col-lg-6 col-xl-6">
					<div className="card">
					  <h5 className="card-header">About Me</h5>
					  <div className="card-body">
					    <p className="card-text">
					    	Welcome to the stream! I am Auto (the whale), 
					    	I recently graduated from Northeastern University MS for Computer Science program, 
					    	and work full time as a Product Owner.
					    </p>
					  </div>
					</div>
				</div>
				<div className = "d-block col-sm-12 col-md-6 col-lg-6 col-xl-6">
					<div className="card">
					  <h5 className="card-header">Rules</h5>
					  <div className="card-body">
					    <span className="card-text">
					    	<ul className = "rules">Don't be a jerk either to me or anyone else in chat</ul>
					    	<ul className = "rules">Please be respectful of others</ul>
					    	<ul className = "rules">Any racism, Sexism, or poor manners will result in a ban.</ul>
					    	<ul className = "rules">"Bitch" or variations of it is banned in this channel.</ul>
					    </span>
					  </div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StreamMain