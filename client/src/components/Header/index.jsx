import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand href="/" style={{color: "white"}}>DishDiscover</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {Auth.loggedIn() ? (
            <>
              <Nav.Link as={Link} to="/me" style={{color: "white"}}>
                {Auth.getProfile().data.username}'s profile
              </Nav.Link>
              <Button variant="outline-light" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Button variant="outline-light" as={Link} to="/login">Login</Button>
              <Button variant="outline-light" as={Link} to="/signup">Signup</Button>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
