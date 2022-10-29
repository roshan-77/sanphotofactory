import React from "react";
import "../style.css"
// import { Navigation } from "./navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF, faLinkedinIn, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div>
                    <h2>Feel free to contact me:</h2>
                    <p> (+61) 000 000 000</p>
                    <p> demo@demo.com </p>
                </div>
                <div>
                    <h2>Social Media</h2>
                    <div>
                        <a href="https://www.facebook.com/sanphotofactory" rel="noreferrer" target="_blank" style={{color:"white"}}><FontAwesomeIcon icon={faFacebookF} style={{padding: "15px", marginRight:"10px", backgroundColor:"black", cursor:"pointer", borderRadius:"5px"}}></FontAwesomeIcon></a>
                        <a href="https://www.instagram.com/sanphotofactory/" rel="noreferrer" target="_blank" style={{color:"white"}}><FontAwesomeIcon icon={faInstagram} style={{padding: "15px", marginRight:"10px", backgroundColor:"black", cursor:"pointer", borderRadius:"5px"}}></FontAwesomeIcon></a>          
                        <a href="https://www.youtube.com/channel/UCouUCBTwSMBLENLBmro8tvw/videos" rel="noreferrer" target="_blank" style={{color:"white"}}><FontAwesomeIcon icon={faYoutube} style={{padding: "15px", marginRight:"10px", backgroundColor:"black", cursor:"pointer", borderRadius:"5px"}}></FontAwesomeIcon></a>          
                        <a href="https://www.linkedin.com/in/sanjib-dhungel-7531361a3/" rel="noreferrer" target="_blank" style={{color:"white"}}><FontAwesomeIcon icon={faLinkedinIn} style={{padding: "15px", marginRight:"10px", backgroundColor:"black", cursor:"pointer", borderRadius:"5px"}}></FontAwesomeIcon></a>
                    </div>
                </div>
                <div>
                    <div><a href="#about-me">ABOUT ME</a></div>
                    <div><a href="#portfolio">PORTFOLIO</a></div>
                    <div><a href="#services">SERVICES</a></div>
                    <div><a href="#contact-me">CONTACT</a></div>
                </div>
            </div>
            <div className="copyright">
                <div className="">&copy; COPYRIGHT 2022 SANPHOTOFACTORY</div>
            </div>
        </div>
    )
}

export default Footer