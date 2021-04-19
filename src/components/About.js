import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from "../images/about.png"

function About() {
    return (
        <Container>
            <Row className="about-us">
                <Col md={12} lg={5}>
                    <h1 className="section-title"><a name="about">ABOUT US</a></h1>
                    <p>Malaikah Specialist Center aim is to provide you with quality, accessible and affordable health care services & health education. Our specialized clinical services include : gynecology, pediatrics and Non-communicable Diseases.</p>
                    <p>Malaikah Specialist Center aim is to provide you with quality, accessible and affordable health care services & health education. Our specialized clinical services include : gynecology, pediatrics and Non-communicable Diseases.</p>
                </Col>
                <Col md={12} lg={7}>
                    <img src={about} className="about-image" alt="About us in picture"/>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
