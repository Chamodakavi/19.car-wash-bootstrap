import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false); // State to control the navbar toggle

  const handleNavLinkClick = () => {
    setExpanded(false); // Close the navbar when a link is clicked
  };

  return (
    <Navbar expanded={expanded} expand="lg" className="bg-body-tertiary fixed-top">
      <Container className="nav-container">
        <Navbar.Brand href="#home">Car Wash</Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="py-2">
            <Nav.Link className="nav-link" href="#aboutus" onClick={handleNavLinkClick}>About Us</Nav.Link>
            <Nav.Link className="nav-link" href="#link" onClick={handleNavLinkClick}>How it Works</Nav.Link>
            <Nav.Link className="nav-link" href="#home" onClick={handleNavLinkClick}>FAQ</Nav.Link>
            <button className='btn mt-2 text-light' style={{backgroundColor:'#D90000'}}>Book Now</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
