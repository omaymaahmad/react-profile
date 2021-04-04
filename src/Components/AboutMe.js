import React from 'react';
import { Carousel } from 'react-bootstrap';
import photo from "../Assets/Images/9B3194C8-37CD-4F56-B2C7-3962B1C5425A.jpeg"

function AboutMe () {
    return (
    <>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../Assets/Images/9B3194C8-37CD-4F56-B2C7-3962B1C5425A.jpeg")}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={photo}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
   </> )
}

export default AboutMe;