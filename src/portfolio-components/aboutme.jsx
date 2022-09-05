import React from "react";
import {Button} from "react-bootstrap";
import profile from "../images/profile.jpg"
import "../style.css"


const Aboutme = () => {
    return(
        <div className="container">
            <div className="about-me">
                <div>
                    <h1>About me</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatibus, iure impedit totam voluptates atque pariatur harum eos animi, voluptate eveniet officiis asperiores dolorem debitis nisi dolore ducimus. Cum, sint?</p>
                    <Button> GET TO KNOW ME</Button>
                </div>
                <div>
                    <img alt="" src={profile} style={{width:"400px"}}>

                    </img>
                </div>
            </div>
        </div>
    )
}

export default Aboutme