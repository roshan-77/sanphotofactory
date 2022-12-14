import React from "react";
import "../style.css"
import { useState } from "react";
import videos from "../portfolio-videos-link";
import ImageModal from "./ImageModal"
import VideoContainer from "./videoContainer";
// import {Button} from "react-bootstrap";
// import portfolioImages from "../portfolio-images-src/portfolioimagesrc";
const {v4: uuidv4} = require('uuid')

const Portfolio = () => {
    const [active, setActive] = useState ("portrait")
    const [modalShow, setModalShow] = useState({bool:false, selectedImage:""});

    function importAll(r) {
        let images = [];
        r.keys().map((item) => { return images.push(r(item)); });
        return images;
    }
      
    const portrait = importAll(require.context("../images/portfolio-images/portrait", false, /\.(png|jpe?g|svg)$/));
    const graduation = importAll(require.context("../images/portfolio-images/graduation", false, /\.(png|jpe?g|svg)$/));
    const birthday = importAll(require.context("../images/portfolio-images/birthday", false, /\.(png|jpe?g|svg)$/));
    const promotion = importAll(require.context("../images/portfolio-images/promotion", false, /\.(png|jpe?g|svg)$/));
    const baby = importAll(require.context("../images/portfolio-images/baby", false, /\.(png|jpe?g|svg)$/));
    const wedding = importAll(require.context("../images/portfolio-images/wedding", false, /\.(png|jpe?g|svg)$/));

    function ImageDisplay(){
        return(
            <div>
            </div>
        )
    }

    
    function imageContainer(x){
        return(
            <>
               <img className = "image-container-images" alt = " " src={x} style={{height:"400px"}} key={uuidv4()} onClick={() => setModalShow({bool:true, selectedImage:x})}/>
            </>
        )
    }

    return(
        <div className="portfolio" id="portfolio">
            <div className="container">
                <div className="portfolio-images">
                    <h1>Portfolio</h1>
                    <div className="portfolio-items">
                        <ol>
                            <li onClick={()=>setActive("portrait")}>Portrait</li>
                            <li onClick={()=>setActive("graduation")}>Graduation</li>
                            <li onClick={()=>setActive("birthday")}>Birthday</li>
                            <li onClick={()=>setActive("promotion")}>Promotion</li>
                            <li onClick={()=>setActive("baby")}>Baby</li>
                            <li onClick={()=>setActive("wedding")}>Wedding</li>
                        </ol>
                    </div>
                    <ImageModal
                    show={modalShow.bool}
                    onHide={() => setModalShow({bool:false, selectedImage:""})}
                    source={modalShow.selectedImage}
                    photoType={active}
                    />
                    <div>
                        {active === "portrait" && <div className={active}> <div className="image-container" >{portrait.map(x=> imageContainer(x))}</div></div>}
                        {active === "graduation" && <div className={active}> <div className="image-container" >{graduation.map(x=> imageContainer(x))}</div></div>}
                        {active === "birthday" && <div className={active}> <div className="image-container" >{birthday.map(x=> imageContainer(x))}</div></div>}
                        {active === "promotion" && <div className={active}> <div className="image-container" >{promotion.map(x=> imageContainer(x))}</div></div>}
                        {active === "baby" && <div className={active}> <div className="image-container" >{baby.map(x=> imageContainer(x))}</div></div>}
                        {active === "wedding" && <div className={active}> <div className="image-container" >{wedding.map(x=> imageContainer(x))}</div></div>}

                    </div>
                </div>
                <div className="portfolio-videos">
                    <VideoContainer videos={videos}/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio