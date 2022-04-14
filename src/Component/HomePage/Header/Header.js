import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import './Header.css'

import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/UseAuth";

const Header = () => {
  const {user, logOut} = useAuth();
  return (
    <Navbar bg="success" expand={false}>
      <Container fluid>
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Link
          className="text-white  text-decoration-none fw-bold home-btn"
          color="inherit"
          to="/homes"
        >
          Home
        </Link>
       {
         user?.email ? 
         <button className="text-white  text-decoration-none fw-bold " onClick={logOut}>
            Log-Out
          </button>
         :
         <Link
         className="text-white text-decoration-none fw-bold"
         color="inherit"
         to="/login"
       >
         Login
       </Link>
       }
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel" className="fs-5">
              Dashboard
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link
                className="  text-decoration-none fw-bold p-1 text-dark fs-5"
                color="inherit"
                to="/pay"
              >
                Pay
              </Link>
              <Link
                className="  text-decoration-none fw-bold p-1 text-dark fs-5"
                color="inherit"
                to="/myOrders"
              >
                My Orders
              </Link>
              <Link
                className="  text-decoration-none fw-bold p-1 text-dark fs-5"
                color="inherit"
                to="/manageAllOrders"
              >
                Manage All Orders
              </Link>
              <Link
                className="  text-decoration-none fw-bold p-1 text-dark fs-5"
                color="inherit"
                to="/addAProduct"
              >
                Add-A-Product
              </Link>
              <Link
                className="  text-decoration-none fw-bold p-1 text-dark fs-5"
                color="inherit"
                to="/makeAdmin"
              >
                Make Admin
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default Header;
