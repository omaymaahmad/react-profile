import React from 'react';
import { Carousel } from 'react-bootstrap';
import salford from "../Assets/Images/IMG_1644.jpg";
import me from "../Assets/Images/IMG_0880.jpeg";
import newyork from "../Assets/Images/IMG_0306.jpg";
import "./AboutMe.css";

function AboutMe () {
    return (
    <>
        <Carousel>
  <Carousel.Item>
      <div className="imageDiv">
    <img
      className="d-block w-50"
      src={me}
      alt="me"
    />
    </div>
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <div className="imageDiv">
    <img
      className="d-block w-50"
      src={salford}
      alt="Second slide"
    />
</div>
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
   </> )
}

export default AboutMe;