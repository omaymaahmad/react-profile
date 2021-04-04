import React from 'react';
import {Navbar, Nav} from "react-bootstrap";

function NavBar () {
    return (
        <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">omayma</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">About Me</Nav.Link>
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/cv">CV</Nav.Link>
        </Nav>
      </Navbar>
    )
}
export default NavBar;