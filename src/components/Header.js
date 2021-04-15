import React from "react";
import '../App.css';
import { Col, Container, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import logo from '../images/logo.png';
import phone from '../images/phone.svg';
import {Telephone} from "react-bootstrap-icons";

function Header() {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home"><img className="logo" src={logo} alt=""/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                                    
                    </Nav>
                    <Nav>
                        <Nav.Link href="#!">About Us</Nav.Link>
                        <Nav.Link href="#!">Services</Nav.Link>               
                        <Nav.Link href="#!">Products</Nav.Link>              
                        <Nav.Link href="#!"><Telephone className="telephone-icon" /><a href="tel:+2347032293770">+234 703 229 3770</a></Nav.Link>   
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
        // <div>
        //     <Container>
        //         <Row>
        //             <Col className="navbar-all">
        //                 <Col>
        //                     <img className="logo" src={logo} alt=""/>
        //                 </Col>
        //                 <Col className="my-nav">
        //                     <div>
        //                         About Us
        //                     </div>
        //                     <div>
        //                         Sercices
        //                     </div>
        //                     <div>
        //                         Products
        //                     </div>
        //                     <div>
        //                         <Telephone className="telephone-icon" />
        //                     <span className="telephone-number">+234 703 229 3770</span> 
        //                     </div>
        //                 </Col>
        //             </Col>
        //         </Row>
        //     </Container>
        // </div>
    );
}
export default Header;                