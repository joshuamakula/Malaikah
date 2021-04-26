import React from 'react';
import { Container, Button, Carousel } from "react-bootstrap";
import nurse from '../images/nurse.png';

function Slider () {
    return (
        <Container className="slider">
                <Carousel>
                    <Carousel.Item>
                        <img
                        className=""
                        src={nurse}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Skilled Health Specialists With Local Experience When You Need It</h1>
                            <p>Malaikah Specialist Center aim is to provide you with quality, accessible and affordable health care services & health education. </p>
                        <a href="#appointment">
                            <Button variant="primary" size="lg">
                                    Make Appointment
                            </Button>{' '}
                        </a>
                        
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
    );
}

export default Slider;