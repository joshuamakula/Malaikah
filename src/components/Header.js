import React from "react";
import '../App.css';
import { Col, Container, Row, Navbar, Nav, NavDropdown, Form, FormControl, Button, Carousel } from "react-bootstrap";
import logo from '../images/logo.png';
import nurse from '../images/nurse.png';
import phone from '../images/phone.svg';
import { Telephone } from "react-bootstrap-icons";
import NavMenu from "./NavMenu";


function Header() {
    return (
        <Container fluid className="web-header">
            <NavMenu />
            {/* <Container>
                <Row>
                    <Col className="align-items-end">
                        <img src={nurse} className="nurse" alt="" align-bottom/>
                    </Col>
                    <Col className="header-right">
                        <h1 className="slide-title">Skilled Health Specialists With Local Experience When You Need It</h1>
                        <p className="slide-text">Malaikah Specialist Center aim is to provide you with quality, accessible and affordable health care services & health education.</p>
                        <Button variant="primary" size="lg">
                            Make Appointment
                        </Button>{' '}
                    </Col>
                </Row>
            </Container> */}
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img
                        className=""
                        src={nurse}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Skilled Health Specialists With Local Experience When You Need It</h1>
                            <p>Malaikah Specialist Center aim is to provide you with quality, accessible and affordable health care services & health education. </p>
                        <Button variant="primary" size="lg">
                            Make Appointment
                        </Button>{' '}
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </Container>
        
    );
}
export default Header;                