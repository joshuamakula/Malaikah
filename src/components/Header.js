import React from "react";
import '../App.css';
import { Col, Container, Row } from "react-bootstrap";
import logo from '../images/logo.png'

function Header() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <img className="logo" src={logo} alt=""/>
                    </Col>
                    <Col className="my-nav">
                        <div>
                            About Us
                        </div>
                        <div>
                            Sercices
                        </div>
                        <div>
                            Products
                        </div>
                        <div>
                            +234 703 229 3770
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Header;                