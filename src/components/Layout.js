import React from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Taicket</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Página inicial</Nav.Link>
            <Nav.Link href="#events">Eventos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container className="mt-4">{children}</Container>
    </>
  );
};

export default Layout;
