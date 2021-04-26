import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Iframe from 'react-iframe';
import kare from "../images/kare.png";
import health from "../images/health.png";

function Products() {
    return (
        <Container className="product-fluid" fluid>
            <Container className="products">
                <h1 className="section-title service"><a name="products">Products</a></h1>
                <Row className="product-row">
                    <Col>
                        <Iframe url="https://www.youtube.com/embed/7u2gc-yeAkw"
                            width="450px"
                            height="400px"
                            id="myId"
                            className="myClassname"
                            display="initial"
                            position="relative"/>
                    </Col>
                    <Col className="product-list">
                        
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img src={health} className="product-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title product-title">Card title</h5>
                                    <p class="card-text product-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="card mb-3">
                            <div class="row g-0">
                                <div class="col-md-4">
                                <img src={health} className="product-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title product-title">Card title</h5>
                                    <p class="card-text product-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                </Container>
            </Container>
    );
}

export default Products;