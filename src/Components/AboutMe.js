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
      <h3>omayma ahmad</h3>
      <p>aspiring software engineer</p>
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
      <h3>about me</h3>
      <p>Learning how to code at the University of Manchester Coding Bootcamp! So far I have gained skills in: JavaScript, React, Node, Express, MongoDB, Mongoose, HTML, CSS, BootStrap and Bulma.</p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
   </> )
}

export default AboutMe;