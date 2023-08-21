import "../.././App.css";
import "./novastellastyle.css";
import HomeMain from ".././NovaStella/NovaStellaAbout.js"
import HomeCards from ".././NovaStella/NovaStellaCards.js"

function NovaStellaHome() {
	return(
		<div className = "container-fluid">
            <div className = "row">
				<HomeMain />
				<HomeCards />
            </div>
		</div>
	);
};

export default NovaStellaHome 