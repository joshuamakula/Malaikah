import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

function Appointment(params) {
    return (
        <Container fluid className="appointment-fluid">
            <Container>
                <h1 className="section-title service"><a name="appointment">APPOINTMENT</a></h1>
                <Row>
                    <Col>
                        <h1 className="appointment-h1">Make an Appointment To Talk To Our Specialists</h1>
                        <p className="appointment-p">It is a long established fact that our medical professional attend to your needs</p>
                    </Col>
                    <Col>
                        <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                        </div>
                        <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Appointment;