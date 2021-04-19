import React from 'react';
import { Card, Container, Row, CardDeck, Col } from 'react-bootstrap';
import store from "../images/store.png";
import ambulance from "../images/ambulance.png";

function Services() {
    return (
        <Container>
                <h1 className="section-title">SERVICES</h1>
            <Row className="our-services">
                <Col>
                    <CardDeck>
                        <Card className="col-12 col-md-6 col-lg-3">
                            <Card.Img variant="top" src={store}/>
                            <Card.Title>
                                <h4>"Patient Medical Store"</h4>
                            </Card.Title>
                            <Card.Text>
                                Pain, Common Cold.Bacterial Sinusitis, Cough and many other conditions associated with Children 
                            </Card.Text>
                        </Card>
                        <Card className="col-12 col-md-6 col-lg-3">
                            <Card.Img variant="top" src={store}/>
                            <Card.Title>
                                <h4>"Patient Medical Store"</h4>
                            </Card.Title>
                            <Card.Text>
                                Pain, Common Cold.Bacterial Sinusitis, Cough and many other conditions associated with Children 
                            </Card.Text>
                        </Card>
                        <Card className="col-12 col-md-6 col-lg-3">
                            <Card.Img variant="top" src={store}/>
                            <Card.Title>
                                <h4>"Patient Medical Store"</h4>
                            </Card.Title>
                            <Card.Text>
                                Pain, Common Cold.Bacterial Sinusitis, Cough and many other conditions associated with Children 
                            </Card.Text>
                        </Card>
                        <Card className="col-12 col-md-6 col-lg-3">
                            <Card.Img variant="top" src={store}/>
                            <Card.Title>
                                <h4>"Patient Medical Store"</h4>
                            </Card.Title>
                            <Card.Text>
                                Pain, Common Cold.Bacterial Sinusitis, Cough and many other conditions associated with Children 
                            </Card.Text>
                        </Card>
                </CardDeck>
                </Col>
            </Row>
        </Container>
    );
}

export default Services;