import "../.././App.css";
import "./GuwaStudiosstyle.css";
import alice from "../img/Alice.png";
import auto from "../img/Auto_Kailani.png";
import nova from "../img/nova.png";

function GuwaStudiosGallery() {
	return(
        <div className = "row gallery-row">
            <h3>Guwa Studios Talent</h3>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" rel="noreferrer" href="#">
                    <img src={alice} alt="Alice Avatar" />
                    </a>
                    <div className="desc">Alice</div>
                </div>
            </div>
            <h3>Guwa Studios Staff</h3>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" rel="noreferrer" href="#">
                    <img src={auto} alt="Auto's Avatar" />
                    </a>
                    <div className="desc">Auto & Kailani</div>
                </div>
            </div>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" rel="noreferrer" href="#">
                    <img src={nova} alt="Nova's Avatar" />
                    </a>
                    <div className="desc">Cosmic Nova</div>
                </div>
            </div>
        </div>
	);
};

export default GuwaStudiosGallery