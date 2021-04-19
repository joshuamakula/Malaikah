import React from 'react';
import { Card, Container, Row, CardDeck, Col } from 'react-bootstrap';
import store from "../images/store.png";
import ambulance from "../images/ambulance.png";
import surgery from "../images/surgery.png";
import education from "../images/education.png";
import pediatric from "../images/pediatric.png";
import disease from "../images/disease.png";
import gynacology from "../images/gynacology.png";
import eye from "../images/eye.png";

function Services() {
    return (
        <Container>
                <h1 className="section-title"><a name="services">SERVICES</a></h1>
            <Row className="our-services">
                <Col sm={12} md={6} lg={3}>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={store}/>
                            <Card.Title>
                                <h4>Patient Medical Store</h4>
                            </Card.Title>
                            <Card.Text>
                                Pain, Common Cold.Bacterial Sinusitis, Cough and many other conditions associated with Children 
                            </Card.Text>
                        </Card>
                </CardDeck>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={ambulance}/>
                            <Card.Title>
                                <h4>Executive Ambulance</h4>
                            </Card.Title>
                            <Card.Text>
                                We use a blend of Natural and western medicine to cure non communicable diseases at a very affordable price
                            </Card.Text>
                        </Card>
                </CardDeck>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={surgery}/>
                            <Card.Title>
                                <h4>Medical Surgeries</h4>
                            </Card.Title>
                            <Card.Text>
                                We Deliver Competent  based,  affordable Gynecological Services .such as Cervical Dysplasia,
                            </Card.Text>
                        </Card>
                </CardDeck>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={education}/>
                            <Card.Title>
                                <h4>Pediatric</h4>
                            </Card.Title>
                            <Card.Text>
                                Pain, Common Cold.Bacterial Sinusitis, Cough and many other conditions associated with Children
                            </Card.Text>
                        </Card>
                </CardDeck>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={pediatric}/>
                            <Card.Title>
                                <h4>Health Education</h4>
                            </Card.Title>
                            <Card.Text>
                                Our Specialists will help restore your site. conditions such as glaucoma, iritis, and chemical burns
                            </Card.Text>
                        </Card>
                </CardDeck>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={disease}/>
                            <Card.Title>
                                <h4>Diseases</h4>
                            </Card.Title>
                            <Card.Text>
                                We use a blend of Natural and western medicine to cure non communicable diseases at a very affordable price
                            </Card.Text>
                        </Card>
                </CardDeck>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={gynacology}/>
                            <Card.Title>
                                <h4>Gynacology</h4>
                            </Card.Title>
                            <Card.Text>
                                We Deliver Competent  based,  affordable Gynecological Services .such as Cervical Dysplasia,
                            </Card.Text>
                        </Card>
                </CardDeck>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={eye}/>
                            <Card.Title>
                                <h4>Eye Clinic</h4>
                            </Card.Title>
                            <Card.Text>
                                Our Specialists will help restore your site. conditions such as glaucoma, iritis, and chemical burns
                            </Card.Text>
                        </Card>
                </CardDeck>
                </Col>
            </Row>
        </Container>
    );
}

export default Services;