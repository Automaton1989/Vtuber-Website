import "../.././App.css";
import "./GuwaStudiosstyle.css";
import {  Link } from "react-router-dom";

function GuwaStudiosCards() {
	return(
		<div className = "card-row row summer">
			<div className = "d-block col-sm-12 col-md-6 col-lg-4 col-xl-4">
				<div className="card">
				  <h5 className="card-header">Gen 1 Talent!</h5>
				  <div className="card-body">
				    <h5 className="card-title">Check out our talent!</h5>
				    <p className="card-text">We announced our Gen 1 talent back in June 2023, come check out all the members and current staff for Nova Stella!</p>
				  </div>
				  <Link to="/GuwaStudios/talent" className="btn btn-card">See Talent</Link>
				</div>
			</div>
			<div className = "d-block col-sm-12 col-md-6 col-lg-4 col-xl-4">
				<div className="card">
				  <h5 className="card-header">Socials</h5>
				  <div className="card-body">
				    <h5 className="card-title">Follow our socials!</h5>
				    <p className="card-text">Check out our Twitter for latest news and Gen 1 announcements!</p>
				  </div>
				  <a href="#" target="_blank" rel="noreferrer" className="btn btn-card">See Twitter</a>
				</div>
			</div>
			<div className = "d-block col-sm-12 col-md-6 col-lg-4 col-xl-4">
				<div className="card">
				  <h5 className="card-header">Affiliates</h5>
				  <div className="card-body">
				    <h5 className="card-title">See who supports us!</h5>
				    <p className="card-text">Check our sponsors and affilates, as well as get more information about ways you can support the group!</p>
				  </div>
				    <Link to="/GuwaStudios/sponsors" className="btn btn-card">Support us</Link>				
                  </div>
			</div>
		</div>
	);
};

export default GuwaStudiosCards
