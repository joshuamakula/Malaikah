import React from "react";
import '../App.css';
import { Col, Container, Row } from "react-bootstrap";
import logo from '../images/logo.png';
import phone from '../images/phone.svg';
import {Telephone} from "react-bootstrap-icons";

function Header() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className="navbar-all">
                        <Col>
                            <img className="logo" src={logo} alt=""/>
                        </Col>
                        <Col className="my-nav">
                            <div>
                                About Us
                            </div>
                            <div>
                                Sercices
                            </div>
                            <div>
                                Products
                            </div>
                            <div>
                                <Telephone className="telephone-icon" />
                            <span className="telephone-number">+234 703 229 3770</span> 
                            </div>
                        </Col>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Header;                