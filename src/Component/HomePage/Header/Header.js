
import React from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';

import { Link } from 'react-router-dom';



const Header = ({props}) => {



    return (
      <Navbar bg="primary" expand={false}>
  <Container fluid>
    {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
    <Link className='text-white p-3 text-decoration-none fw-bold' color="inherit" to="/homes">Home</Link>
    <Link className='text-white p-3 text-decoration-none fw-bold' color="inherit" to="/login">Login</Link>
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
      <Offcanvas.Header className='w-25'>
        <Offcanvas.Title id="offcanvasNavbarLabel">Dashboard</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body >
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Link className=' p-3 text-decoration-none fw-bold' color="inherit" to="/homes">Home</Link>
    <Link className=' p-3 text-decoration-none fw-bold' color="inherit" to="/login">Login</Link>
         
        </Nav>
      
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
    );
};

export default Header;

