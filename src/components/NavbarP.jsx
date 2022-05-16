import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { logoutAsync } from "../redux/actions/actionRegister";
// import { useNavigate } from 'react-router-dom';



const NavbarP = () => {

  const dispatch = useDispatch();
  //   const navigate = useNavigate();



  return (
    <>
      <Navbar bg="light" variant="light" expand="md" >
        <Container fluid>
          <Navbar.Brand href="#">
            <img src="" alt="Logo" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 navLinks"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/home" >Home</Nav.Link>

              <Nav.Link href="#home" onClick={() => dispatch(logoutAsync())}>Logout</Nav.Link>

            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name="searched"

              />
              <Button type="submit" name="searched" variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarP;