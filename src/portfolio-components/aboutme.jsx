import React from "react";
import {Button} from "react-bootstrap";
import profile from "../images/profile.jpg"
import "../style.css"


const Aboutme = () => {
    return(
        <div className="container">
            <div className="about-me">
                <h1>About me</h1>
                <div className="about-me-container">
                    <div className="about-me-text">
                        <p>
                            Hi! I am Sanjib Dhungel.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Fuga voluptatibus, iure impedit totam voluptates atque 
                            pariatur harum eos animi, voluptate eveniet officiis 
                            asperiores dolorem debitis nisi dolore ducimus. 
                            Cum, sint?
                            
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Fuga voluptatibus, iure impedit totam voluptates atque 
                            pariatur harum eos animi, voluptate eveniet officiis 
                            asperiores dolorem debitis nisi dolore ducimus. 
                            Cum, sint?
                            </p>
                        <Button> GET TO KNOW ME</Button>
                    </div>
                    <div className="about-me-img">
                        <img alt="" src={profile}>
                        </img>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Aboutme