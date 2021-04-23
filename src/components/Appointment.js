import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';

function Appointment() {
    return (
        <Container fluid className="appointment-fluid">
            <Container className="appointment-cont">
                <h1 className="section-title service"><a name="appointment">APPOINTMENT</a></h1>
                <Row className="row-cointainer">
                    <Col>
                        <h1 className="appointment-h1">Make an Appointment To Talk To Our Specialists</h1>
                        <p className="appointment-p">It is a long established fact that our medical professional attend to your needs</p>
                    </Col>
                    <Col>
                        <div className="appointment-form">
                            <Form>
                                <div class="mb-3">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Name" required/>
                                </div>
                                <div class="mb-3">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Your Phone" required/>
                                </div>
                                <div class="mb-3">
                                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Your Email" required/>
                                </div>
                                <div class="mb-3">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Subject" required/>
                                </div>
                                <div class="mb-3">
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Describe your problem"></textarea>
                                </div>
                                <div class="mb-3">
                                <Button variant="primary" size="lg">
                                    More About
                                </Button>{' '}
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Appointment;