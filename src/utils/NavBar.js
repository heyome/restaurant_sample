import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import UserContext from './UserContext';

function NavBar() {
  const { user } = useContext(UserContext);

  return (
    <Navbar bg="dark" variant="dark" expand="sm">
      <Navbar.Brand>Our Restaurant</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
          <Nav.Link as={Link} to="/order">Order</Nav.Link>
          <Nav.Link as={Link} to="/reservation">Reservation</Nav.Link>
          {user ? (
            <Nav.Link disabled>{user.name}</Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
