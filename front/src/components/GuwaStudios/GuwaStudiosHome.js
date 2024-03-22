import "../.././App.css";
import "./GuwaStudiosstyle.css";
import HomeMain from "./GuwaStudiosAbout.js"
import HomeCards from "./GuwaStudiosCards.js"

function GuwaStudiosHome() {
	return(
		<div className = "container-fluid">
            <div className = "row">
				<HomeMain />
				<HomeCards />
            </div>
		</div>
	);
};

export default GuwaStudiosHome 