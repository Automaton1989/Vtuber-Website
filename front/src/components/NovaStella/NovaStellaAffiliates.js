import "../.././App.css";
import "./novastellastyle.css";
import test from "../img/Auto_Kailani.png"

function NovaStellaAffiliates() {
	return(
        <div id = "nova-stella-affiliates" className="row">
			<div className = "affiliate-row d-block col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <a href = "https://waifuwares.co.uk/" target="_blank" rel="noreferrer"><img src= {test} className="img-fluid rounded-start" alt="..." /></a>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Waifu Wares</h5>
                                <p className="card-text">
                                    Waifu Wares is an anime/waifu enthusiast company.  They sell apparel, merch, and shakers on in their shop.
                                    Use our code "Novastella" for 15% off when you order from their store!  Click the logo to check out their merch!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>  
			</div>        
			<div className = "affiliate-row d-block col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <a href = "https://www.patreon.com/NovaStellaVT" target="_blank" rel="noreferrer"><img src= {test} className="img-fluid rounded-start" alt="..." /></a>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Patreon</h5>
                                <p className="card-text">
                                    Want to support our group?  Check out our Patreon!  Our pledges go directly to our members and staff,
                                    and we provide rewards to our various patron tiers.  To find out more, click the logo!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>  
			</div> 
        </div>
	);
};

export default NovaStellaAffiliates