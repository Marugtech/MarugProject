import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BsPersonCircle } from "react-icons/bs";
import logo from './../../assets/logo/Logo.jpeg'
import './../HeaderComponent/Header.css'
export default function headerdelivery() {
    return (
        <div>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            className="img-logo"
                            alt=""
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Brand>
                            <h5>Hi <span className='person-name'>Karthi</span> &nbsp;<BsPersonCircle></BsPersonCircle></h5>
                        </Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
