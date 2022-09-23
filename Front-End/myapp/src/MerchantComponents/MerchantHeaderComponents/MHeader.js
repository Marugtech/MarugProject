import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './../../assets/logo/Logo1.jpeg'
import { BsPersonCircle } from "react-icons/bs";
import './../../MerchantComponents/MerchantHeaderComponents/MHeader.css';

function MHeader() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={Logo}
                        className="d-inline-block align-top image"
                        alt=""
                    />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Brand>
                        <h5>Merchant Register <BsPersonCircle></BsPersonCircle></h5>
                    </Navbar.Brand>
                </Navbar.Collapse>
            </Container>
            <hr/>
        </Navbar>
    );
}

export default MHeader;