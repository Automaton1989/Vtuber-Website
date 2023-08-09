import "../.././App.css";
import CharityDesc from "./CharityDesc.js";
import CharitySect from "./CharitySect.js";
import CharityGuests from "./CharityGuests.js";

<CharityGuests />

function CharityPage() {
	return(
		<div>
			<div className = "container-fluid">
				<CharityDesc />
				<CharitySect />
			</div>
		</div>
	);
};

export default CharityPage