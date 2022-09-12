import React from "react";
import { Navigation } from "./navigation";
import Carousel from 'react-bootstrap/Carousel';
import san1 from "../images/san1.jpg"
import san2 from "../images/san2.jpg"
import san3 from "../images/san3.jpg"
import san4 from "../images/san4.jpg"

function MyCarousel() {
  return (
    <div>
        <Carousel variant="white">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={san1}
              alt="First slide"
              style={{height : "60vh", objectFit: "cover"}}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={san2}
              alt="Second slide"
              style={{height : "60vh", objectFit: "cover"}}

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={san3}
              alt="Third slide"
              style={{height : "60vh", objectFit: "cover"}}

            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={san4}
              alt="Third slide"
              style={{height : "60vh", objectFit: "cover"}} 

            />
          </Carousel.Item>
        </Carousel>
    </div>
        
  );
}

export default MyCarousel;