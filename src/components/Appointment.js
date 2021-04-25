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
                            <Form id="appointment-form" action="appointment-form-handler.php" method="post">
                                <div class="mb-3">
                                <input type="text" class="form-control" name="name" placeholder="Your Name" required/>
                                </div>
                                <div class="mb-3">
                                <input type="text" class="form-control" name="phone" placeholder="Your Phone" required/>
                                </div>
                                <div class="mb-3">
                                <input type="email" class="form-control" name="email" placeholder="Your Email" required/>
                                </div>
                                <div class="mb-3">
                                <input type="text" class="form-control" name="subject" placeholder="Subject" required/>
                                </div>
                                <div class="mb-3">
                                <textarea class="form-control" name="problem" rows="3" placeholder="Describe your problem"></textarea>
                                </div>
                                <div class="mb-3">
                                <Button type="submit" variant="primary" size="lg" block>
                                    Book Appointment
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