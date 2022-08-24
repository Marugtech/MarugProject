import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import './../FooterComponents/Footer.css';
import { AiOutlineCopyright, AiOutlineInstagram, AiOutlineTwitter, AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import image from "./../../assets/images/img4.jpeg";

function Footer() {
    return (
        <div style={{ backgroundImage: `url(${image})` }}>
            <Container>
                <Row className='pt-5' >
                    <Col sm={3} className="alignment "> <h6 >ABOUT COMPANY</h6><br />
                        <p className="alignment ">About us</p>
                        <p className="alignment ">Career</p>
                        <p className="alignment ">Our Team</p>
                        <p className="alignment ">Latest News</p><br />
                    </Col>
                    <Col sm={3} className="alignment ">
                        <h6 >CONTACT US</h6><br />
                        <p className="alignment ">Ride with us</p>
                        <p className="alignment ">Help & Support</p>
                        <p className="alignment ">Partner with us</p><br />
                    </Col>
                    <Col sm={3} className="alignment " >
                        <h6>LEGAL TERMS</h6><br />
                        <p className="alignment ">Terms & Conditions</p>
                        <p className="alignment ">Privacy Policy</p>
                        <p className="alignment ">Refund & Cancellation</p>
                        <p className="alignment ">Cookie Policy</p><br />
                    </Col>
                    <Col sm={3} className="alignment ">
                        <h6>SOCIAL MEDIA PLATFORM</h6><br />
                        <FaFacebookF className='circle' /> <AiOutlineInstagram className='circle ' /> <AiOutlineTwitter className='circle' /> <AiOutlineYoutube className='circle' /><br /><br /><br />
                    </Col>
                    <hr className='white-color' />
                    <p className='white-color' > <AiOutlineCopyright /> Food Delivery App</p>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;