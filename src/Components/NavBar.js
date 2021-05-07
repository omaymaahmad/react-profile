import React from 'react';
import {Navbar, Nav} from "react-bootstrap";
import { Link} from 'react-router-dom';
import { IoCloudyNightOutline } from 'react-icons/io5';


function NavBar () {
    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/about"> <IoCloudyNightOutline/> omayma </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link><Link to="/">About Me</Link></Nav.Link>
          <Nav.Link ><Link to="/projects">Projects</Link> </Nav.Link>
          <Nav.Link><Link to="/cv">CV</Link></Nav.Link>
        </Nav>
      </Navbar>
    )
}
export default NavBar;