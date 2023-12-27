import React from 'react'
import { Container, Navbar, NavDropdown,Nav } from 'react-bootstrap'

const Header = () => {
  return (
    <header>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Outdoor Wear</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Explore</Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">History</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Committment
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Team</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Leadership
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="/cart"> <i className='fas
            fa-cart-plus'></i>Cart</Nav.Link>
            <Nav.Link href="/Sign In"> <i className='fas
            fa-cart-plus'></i>Sign In</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
    
  );
}

export default Header