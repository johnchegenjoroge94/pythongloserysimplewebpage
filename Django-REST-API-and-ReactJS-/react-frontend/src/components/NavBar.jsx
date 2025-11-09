import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

export default function NavBar(props) {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">React-Django</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">
            <NavLink className="show-products-nav" to="/products">
              Products
            </NavLink>
            <NavLink className="show-products-nav" to="/addproducts">
              Add Products
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      {props.children}
    </>
  );
}
