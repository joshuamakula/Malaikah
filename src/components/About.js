import React, { useState, useRef } from 'react';
import { Col, Container, Row, Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import about from "../images/about.png"

function About() {

    return (
        <Container>
            <Row className="about-us">
                <Col md={12} lg={5}>
                    <h1 className="section-title"><a name="about">ABOUT US</a></h1>
                    <div className="about-text">
                        <p>Malaikah Specialist Center aim is to provide you with quality, accessible and affordable health care services & health education. Our specialized clinical services include : gynecology, pediatrics and Non-communicable Diseases.</p>
                        <p>Malaikah Specialist Center aim is to provide you with quality, accessible and affordable health care services & health education. Our specialized clinical services include : gynecology, pediatrics and Non-communicable Diseases.</p>
                    </div>
                    
                            <Button variant="primary" size="lg" data-toggle="modal" data-target="#exampleModalCenter">
                                More About
                            </Button>{' '}
                            
                        
                        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                                </div>
                            </div>
                        </div>
                            
                </Col>
                <Col md={12} lg={7}>
                    <img src={about} className="about-image" alt="About us in picture"/>
                </Col>
            </Row>
        </Container>
    );
}

export default About;
