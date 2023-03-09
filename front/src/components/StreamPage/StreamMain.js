import "../.././App.css";

function StreamMain() {
	return(
		<div className = "container-fluid">
			<div className = "row">
				<h2>Stream Page Here</h2>
			</div>
			<div className = "row">
				<iframe src="https://player.twitch.tv/?channel=autowhale&parent=autokailani.herokuapp.com" title="Auto Stream Video" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>
				<iframe
				  title = "Auto Stream Chat"
				  id="chat_embed"
				  src="https://www.twitch.tv/embed/autowhale/chat?parent=autokailani.herokuapp.com"
				  height="500"
				  width="350">
				</iframe>
			</div>
		</div>
	);
};

export default StreamMain