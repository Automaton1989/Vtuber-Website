import "../.././App.css";

function CharitySect() {
	return(
		<div>
			<div className = "summer card-row row">
				<div className = "d-block col-sm-12 col-md-6 col-lg-6 col-xl-6">
					<div className="card">
					  <h5 className="card-header">AutoWhale supports Monterey Bay Aquarium</h5>
					  <div className="card-body">
					    <h5 className="card-title">March 19 - March 26, 2021</h5>
					    <p className="card-text">Amount Raised: $801.69</p>
					  </div>
					  <a href="https://tiltify.com/@automaton/autowhale-aquarium" target="_blank" rel="noreferrer" className="btn btn-card">Campaign Page</a>
					</div>
				</div>
				<div className = "d-block col-sm-12 col-md-6 col-lg-6 col-xl-6">
					<div className="card">
					  <h5 className="card-header">AutoWhale supports Monterey Bay Aquarium 2: Electric Boogaloo</h5>
					  <div className="card-body">
					    <h5 className="card-title">March 14 - March 21, 2022</h5>
					    <p className="card-text">Amount Raised: $971.00</p>
					  </div>
					  <a href="https://tiltify.com/@automaton/autowhale-supports-monterey-bay-aquarium" target="_blank" rel="noreferrer" className="btn btn-card">Campaign Page</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CharitySect