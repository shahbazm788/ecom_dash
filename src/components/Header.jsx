

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from "react-router-bootstrap";


function Header() {
  return (
    <Navbar expand="lg"  data-bs-theme="dark">
      <Container fluid>
        <LinkContainer to={"/"}>
        <Navbar.Brand className='brand'>Dashboard</Navbar.Brand>
        </LinkContainer >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" defaultActiveKey="/">
          <LinkContainer to={"/"}>
            <Nav.Link eventKey="/">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={"/about"}>
            <Nav.Link eventKey="/posts">Posts</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item >Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Header;