import React from "react";

import { Link } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to="/home" component={Navbar.Brand}>
          Dashboard
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Link to="/home" component={Nav.Link}>
              Página inicial
            </Link>
            <Link to="/events" component={Nav.Link}>
              Eventos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-4">{children}</Container>
    </>
  );
};

export default Layout;
