import React from 'react';
import { Col, Container, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import logo from '../images/logo.png';
import phone from '../images/phone.svg';
import { Telephone } from "react-bootstrap-icons";

function NavMenu() {
    return(
        <Container>
            <Navbar bg="transparent" expand="lg">
                <Navbar.Brand href="#home"><img className="logo" src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                                    
                    </Nav>
                    <Nav className="text-dark">
                        <Nav.Link href="#!">About Us</Nav.Link>
                        <Nav.Link href="#!">Services</Nav.Link>               
                        <Nav.Link href="#!">Products</Nav.Link>              
                        <Nav.Link href="#!" className="telephone-number"><Telephone className="telephone-icon" /><a href="tel:+2347032293770">+234 703 229 3770</a></Nav.Link>   
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavMenu;