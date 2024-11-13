import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { HashLink as Link } from "react-router-hash-link";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false); // State to control the navbar toggle

  const handleNavLinkClick = () => {
    setExpanded(false); // Close the navbar when a link is clicked
  };

  return (
    <Navbar
      expanded={expanded}
      expand="lg"
      className="bg-body-tertiary fixed-top"
      style={{ opacity: 0.8 }}
    >
      <Container className="nav-container">
        
          <Navbar.Brand>Car Wash</Navbar.Brand>
        
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="py-2">
            <Link
              smooth
              to="/#aboutus"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              About Us
            </Link>
            <Link
              smooth
              to="/#ourservices"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Our Services
            </Link>
            <Link
              smooth
              to="/#contactus"
              className="nav-link"
              onClick={() => setExpanded(false)}
            >
              Contact Us
            </Link>
            <Link
            smooth
              to="/booknow/#booking"
              className="btn mt-2 text-light"
              onClick={() => setExpanded(false)}
              style={{backgroundColor:'#D90000'}}
            >
              Book Now
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
