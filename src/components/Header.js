import React from "react";
import '../App.css';
import {  Container } from "react-bootstrap";
import NavMenu from "./NavMenu";
import Slider from "./Slider";
import HorizontalLine from "./HorizontalLine";
import About from "./About";


function Header() {
    return (
        <section className="web-header">
            <NavMenu />
            <HorizontalLine />
            <Slider />
        </section>
    );
}
export default Header;                