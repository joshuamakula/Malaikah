import React, { useState, useRef } from 'react';
import { Col, Container, Row, Button, OverlayTrigger, Tooltip, Modal } from 'react-bootstrap';
import about from "../images/about.png"

function About() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <Container>
            <Row className="about-us">
                <Col md={12} lg={5}>
                    <h1 className="section-title"><a name="about">ABOUT US</a></h1>
                    <div className="about-text">
                        <p>Malaikah Specialist Center aim is to provide you with quality, accessible and affordable health care services & health education. Our specialized clinical services include : gynecology, pediatrics and Non-communicable Diseases.</p>
                        <p>Malaikah Specialist Center aim is to provide you with quality, accessible and affordable health care services & health education. Our specialized clinical services include : gynecology, pediatrics and Non-communicable Diseases.</p>
                    </div>
                    
                    {/* <Button variant="primary" size="lg" onClick={handleShow}>
                        More About
                    </Button>{' '} */}
                    <Button variant="primary" size="lg" onClick={handleShow}>
                        More About
                    </Button>

                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>More About Malaikah Health Specialist</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Malaikah Specialist Center aim is to provide you with quality, accessible and affordable health care services & health education. Our specialized clinical services include : gynecology, pediatrics and Non-communicable Diseases.</p>
                            <p>Malaikah Specialist Center aim is to provide you with quality, accessible and affordable health care services & health education. Our specialized clinical services include : gynecology, pediatrics and Non-communicable Diseases.</p>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    
                </Col>
                <Col md={12} lg={7}>
                    <img src={about} className="about-image" alt="About us in picture"/>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
