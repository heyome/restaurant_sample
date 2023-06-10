import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Our Restaurant</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
        <Nav.Link as={Link} to="/order">Order</Nav.Link>
        <Nav.Link as={Link} to="/reservation">Reservation</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
