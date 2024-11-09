import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container className="nav-container">
        <Navbar.Brand href="#home">Car Wash</Navbar.Brand>
        <Navbar.Toggle />

        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className=" py-2 ">
            <Nav.Link className="nav-link" href="#home">About Us</Nav.Link>
            <Nav.Link className="nav-link" href="#link">How it Works</Nav.Link>
            <Nav.Link className="nav-link" href="#home">FAQ</Nav.Link>
            <button className='btn btn-primary mt-2 '>Book Now</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
