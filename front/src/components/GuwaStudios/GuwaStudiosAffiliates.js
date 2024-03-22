import "../.././App.css";
import "./GuwaStudiosstyle.css";
import waifu from "../img/WW_Logo_0727.png"

function GuwaStudiosAffiliates() {
	return(
        <div id = "nova-stella-affiliates" className="row">
            <h2>Sponsors and Affiliates</h2>
			<div className = "affiliate-row d-block col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="card mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                        <a href = "https://waifuwares.co.uk/" target="_blank" rel="noreferrer"><img src= {waifu} className="img-fluid rounded-start" alt="..." /></a>
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
        </div>
	);
};

export default GuwaStudiosAffiliates