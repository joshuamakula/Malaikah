import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from '../images/logo.png';
import { Telephone } from "react-bootstrap-icons";

function NavMenu() {
    return (
        <Container className="nav-bar" fluid>
        <Container className="my-nav">
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand href="#home"><img className="logo" src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                                    
                    </Nav>
                    <Nav className="text-dark">
                        <Nav.Link href="#about">About Us</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>               
                        <Nav.Link href="#products">Products</Nav.Link>               
                        <Nav.Link href="#appointment">Appointment</Nav.Link>              
                        <Nav.Link href="#!" className="telephone-number"><Telephone className="telephone-icon" /><a href="tel:+2347032293770">+234 703 229 3770</a></Nav.Link>   
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </Container>
        </Container>
    )
}

export default NavMenu;