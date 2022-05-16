import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../redux/actions/actionRegister";
import Search from "./Search";
const NavbarP = () => {
  const dispatch = useDispatch();
 
  return (
    <>
      <Navbar  expand="md" >
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="https://res.cloudinary.com/dmaviub4l/image/upload/v1652716374/vctvywhyh0t6ptxqwffg.png" alt="Logo" style={{ width: "100px" }}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" style={{ backgroundColor: "white" }} />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navLinks"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/home" >Home</Nav.Link>
              <Nav.Link href="/add" >Agregar Productos</Nav.Link>

              <Nav.Link href="#home" onClick={() => dispatch(logoutAsync())}>Logout</Nav.Link>

            </Nav>
            <Search />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarP;