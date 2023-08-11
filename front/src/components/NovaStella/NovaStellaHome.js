import "../.././App.css";
import "./novastellastyle.css";
import TalentGallery from ".././NovaStella/NovaStellaGallery.js"

function NovaStellaHome() {
	return(
		<div className = "container-fluid">
            <div className = "row">
                <h2>Nova Stella!</h2>
				<TalentGallery />
            </div>
		</div>
	);
};

export default NovaStellaHome 