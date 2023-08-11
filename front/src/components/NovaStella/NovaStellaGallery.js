import "../.././App.css";
import "./novastellastyle.css";
import alice from "../img/Alice.png";
import jade from "../img/Jade.png";
import regi from "../img/Regi.png";
import floof from "../img/Floof.png";
import auto from "../img/Auto_Kailani.png";
import nova from "../img/nova.png";

function NovaStellaGallery() {
	return(
        <div className = "row gallery-row">
            <h3>Nova Stella Talent</h3>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" rel="noreferrer" href="https://novastella.carrd.co/#alice">
                    <img src={alice} alt="Alice Avatar" />
                    </a>
                    <div className="desc">Alice</div>
                </div>
            </div>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" rel="noreferrer" href="https://novastella.carrd.co/#regilis">
                    <img src={regi} alt="Regilis Avatar" />
                    </a>
                    <div className="desc">Regilis</div>
                </div>
            </div>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" rel="noreferrer" href="https://novastella.carrd.co/#jade">
                    <img src={jade} alt="Jade Avatar" />
                    </a>
                    <div className="desc">Lady Jade</div>
                </div>
            </div>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" rel="noreferrer" href="https://novastella.carrd.co/#floof">
                    <img src={floof} alt="Floof Avatar" />
                    </a>
                    <div className="desc">Floofablue</div>
                </div>
            </div>
            <h3>Nova Stella Staff</h3>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" rel="noreferrer" href="https://novastella.carrd.co/#talent">
                    <img src={auto} alt="Auto's Avatar" />
                    </a>
                    <div className="desc">Auto & Kailani</div>
                </div>
            </div>
            <div className="d-block col-sm-12 col-md-6 col-lg-4 col-xl-3">
                <div className="gallery">
                    <a target="_blank" rel="noreferrer" href="https://novastella.carrd.co/#talent">
                    <img src={nova} alt="Nova's Avatar" />
                    </a>
                    <div className="desc">Cosmic Nova</div>
                </div>
            </div>
        </div>
	);
};

export default NovaStellaGallery