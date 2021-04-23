import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Facebook, Twitter, Youtube } from 'react-bootstrap-icons';
import logo from "../images/logo.png"

function Footer() {
    return (
        <Container className="footer" fluid>
            <Container>
                <Row>
                    <Col md={8}>
                        <img src={logo} alt="Malaikah Logo" className="footer-logo" />
                    </Col>
                    <Col md={4} className="footer-text-1">
                        <p>Privacy Policy</p>
                        <p>|</p>
                        <p>Terms of Service</p>
                        <p>|</p>
                        <p>Cookies</p>
                    </Col>
                </Row>
                <Row>
                    <Col className="footer-copy">
                        <p> © 2021 Copyright. All rightes reserved.</p>
                        <p>
                            <Facebook /> &nbsp;
                            <Twitter /> &nbsp;
                            <Youtube /> &nbsp;
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Footer;