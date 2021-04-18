import React from "react";
import '../App.css';
import {  Container } from "react-bootstrap";
import NavMenu from "./NavMenu";
import Slider from "./Slider";


function Header() {
    return (
        <Container fluid className="web-header">
            <NavMenu />
            <Slider />
        </Container>
        
    );
}
export default Header;                