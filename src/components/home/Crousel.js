import React from "react";
import "./Crousel.css";
import Carousel from "react-bootstrap/Carousel";

function Crousel() {
  return (
    <div className="container">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            alt="First slide"
            width="100%"
            height="600px"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="http://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
            alt="Second slide"
            width="100%"
            height="600px"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6nsh21YGkzMDpCL6mMDGElfzcjUgHSMIcsw&usqp=CAU"
            alt="Third slide"
            width="100%"
            height="600px"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Crousel;
