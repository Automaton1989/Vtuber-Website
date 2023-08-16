import "../.././App.css";
import "./novastellastyle.css";
import {  Link } from "react-router-dom";
import pic from "../img/Nova_Stella_Website_Banner.jpg"

function NovaStellaAbout() {
	return(
        <div id = "nova-stella-about" className="row summer">
            <div className = "col-12">
				<img src = {pic} id = "nova-page-main-img" alt="Auto and Kailani Halloween background" />
				<div className = "text-container nova-container-img-sm d-block d-sm-block d-md-none">
					<div className ="centered-sm">We're a group dedicated to helping our talent reach the stars!</div>
					<Link to="/Novastella/talent"><button className = "btn btn-main btn-main-sm">Talent</button></Link>
				</div>
				<div className = "text-container nova-container-img-md d-none d-md-block d-lg-none">
					<div className ="centered-md">We're a group dedicated to helping our talent reach the stars!</div>
					<Link to="/Novastella/talent"><button className = "btn btn-main btn-main-md">Talent</button></Link>
				</div>					
				<div className = "text-container nova-container-img-lg d-none d-sm-none d-md-none d-lg-block">
					<div className ="centered-lg">We're a group dedicated to helping our talent reach the stars!</div>
					<Link to="/Novastella/talent"><button className = "btn btn-main btn-main-lg">Talent</button></Link>
				</div>
			</div>
        </div>
	);
};

export default NovaStellaAbout