import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImagePortrait, faUserGroup, faVideo, faPencil } from "@fortawesome/free-solid-svg-icons";

export default function Services(){
    const myServices = [
        {logo:faImagePortrait,title:"Portraits",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta officia consectetur sint, nulla alias cum veritatis omnis? Non, esse quis reiciendis soluta eligendi omnis quae molestias quisquam repudiandae itaque."},
        {logo:faUserGroup,title:"Group Photos",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta officia consectetur sint, nulla alias cum veritatis omnis? Non, esse quis reiciendis soluta eligendi omnis quae molestias quisquam repudiandae itaque."},
        {logo:faVideo,title:"Videos",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta officia consectetur sint, nulla alias cum veritatis omnis? Non, esse quis reiciendis soluta eligendi omnis quae molestias quisquam repudiandae itaque."},
        {logo:faPencil,title:"Designs",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta officia consectetur sint, nulla alias cum veritatis omnis? Non, esse quis reiciendis soluta eligendi omnis quae molestias quisquam repudiandae itaque."}
    ]
    return(
        <div className="container">
                <h1>Services</h1>
            <div className="services-containers">
                {myServices.map((x)=>(
                    <div className="services-container">
                        <div className="services-container-div">
                            <FontAwesomeIcon icon={x.logo} style={{paddingBottom:"5px", width:"40px", height:"40px"}}></FontAwesomeIcon>
                            <h3>{x.title}</h3>
                            <p>{x.text}</p>
                        </div>
                        
                    </div>))
                }
            </div>
        </div>
    )
}