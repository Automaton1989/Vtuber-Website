import "../.././App.css";
import "./novastellastyle.css";
import halloween from "../img/pfp-Halloween.png";

function NovaStellaGallery() {
	return(
        <div className = "row gallery-row">
            <h3>Nova Stella Talent</h3>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" href="https://novastella.carrd.co/#alice">
                    <img src={halloween} alt="Alice Avatar" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" href="https://novastella.carrd.co/#regilis">
                    <img src={halloween} alt="Regilis Avatar" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" href="https://novastella.carrd.co/#jade">
                    <img src={halloween} alt="Jade Avatar" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" href="https://novastella.carrd.co/#floof">
                    <img src={halloween} alt="Floof Avatar" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <h3>Nova Stella Staff</h3>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" href="https://novastella.carrd.co/#talent">
                    <img src={halloween} alt="Alice Avatar" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" href="https://novastella.carrd.co/#talent">
                    <img src={halloween} alt="Regilis Avatar" />
                    </a>
                    <div className="desc">Add a description of the image here</div>
                </div>
            </div>
        </div>
	);
};

export default NovaStellaGallery