import React from "react";
import {Button} from "react-bootstrap"
import tyan1 from "../images/tagline-images/tyan.jpg"
import tyan2 from "../images/tagline-images/tyan-2.jpg"
import tyan3 from "../images/tagline-images/tyan-3.jpg"
import "../style.css"


const Tagline = () => {
    return(
        <div className="container">
            <div className="tagline-containers">
                <div className="tagline-container-1">
                    <img alt = "" src={tyan1}/>
                    <p>"The whole point of taking pictures is so that you don't have to explain things with words."</p>
                </div>
                <div className="tagline-container-2">
                    <img alt="" src={tyan2} />
                    <img alt="" src={tyan3} />
                    <Button>SEE OFFERS</Button>
                </div>
            </div>
        </div>
    )
}

export default Tagline