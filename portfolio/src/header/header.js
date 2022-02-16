
import { Route, Routes } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
const Header = () => {
  return (
    
     <Navbar variant="light" bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home">mj</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbar-dark-example"></Navbar.Toggle>
    <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        {/* <NavDropdown
          id="nav-dropdown-dark-example"
          title="Dropdown"
          menuVariant="dark"
        > */}
        <Navbar.Text>Pages</Navbar.Text>
          <Dropdown.Item href="/">Cover</Dropdown.Item>
          <Dropdown.Item href="/partysquares">Party Squares</Dropdown.Item>
          <Navbar.Text>----------------WIP---------------</Navbar.Text>
          <Dropdown.Item href="/workflow">Workflow</Dropdown.Item>
          <Dropdown.Item href="/designartifacts">Design Artifacts</Dropdown.Item>
          <Navbar.Text>------------Background------------</Navbar.Text>
          <Dropdown.Item href="/about">Bio</Dropdown.Item> 
          <Dropdown.Item href="/about">Resume</Dropdown.Item> 
        {/* </NavDropdown> */}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    
  );
};
export default Header;


