import React from "react";
import "../style.css"


const Contactme = () => {
    return(
        <div className="contact-me">
            <div className="container">
                <div className="contact-me-description">
                    <h3>It's more important to click with my clients than to only click with my camera...</h3>
                    <p>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatum, aspernatur 
                       corrupti architecto placeat quidem dolorum officia! Quam, tempora doloribus quibusdam odit 
                       veritatis, ipsa eveniet labore voluptatum odio sed neque.
                    </p>
                </div>
                <div className = "form-layout-card">
                    <h2>Contact with me</h2>
                    <form className="form">
                        <div className = "form-details" >
                            <div><input className="inputfield" name = "from_name" placeholder="Name" required></input></div>
                            <div><input className="inputfield" name = "from_phone" placeholder="Phone" ></input></div>
                            <div><input className="inputfield" name = "from_email" placeholder="Email" required></input></div>
                            <div><input className="inputfield" name = "subject" placeholder="Subject" required></input></div>
                        </div>
                        <div >
                            <textarea className = "form-textarea" name = "message" placeholder="Message"></textarea>
                        </div>
                        <button type="submit" style={{backgroundColor:"black", fontSize:"1em", borderRadius:"10px", color:"white", padding:"5px 50px", maxWidth:"500px", margin:"0 auto"}}>Send</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactme