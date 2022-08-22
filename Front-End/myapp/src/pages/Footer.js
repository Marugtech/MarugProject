import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';
import { AiOutlineCopyright,AiOutlineInstagram,AiOutlineTwitter,AiOutlineYoutube } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import image from "../assets/images/img4.jpeg"; 

function Footer() {
    
    return (
        
        <Row className='con pad' style={{ backgroundImage:`url(${image})`}}>
            <Col sm={3} className="bx "> <h6 >ABOUT COMPANY</h6><br />
                <a href="" className="bx ">About us</a><br />
                <a href="" className="bx ">Services</a><br />
                <a href="" className="bx ">Terms of service</a><br />
                <a href="" className="bx ">Privacy policy</a><br /><br />
            </Col>
            <Col sm={3} className="bx ">
                <h6 >CONTACT US</h6><br />
                <a href="" className="bx ">Ride with us</a> <br />
                <a href="" className="bx ">Help & Support</a><br />
                <a href="" className="bx ">Partner with us</a><br /><br />

            </Col>
            <Col sm={3} className="bx " >
                <h6>LEGAL TERMS</h6><br />
                <a href="#" className="bx ">Terms & Conditions</a> <br />
                <a href="#" className="bx ">Privacy Policy</a><br />
                <a href="#" className="bx ">Refund & Cancellation</a><br />
                <a href="#" className="bx ">Cookie Policy</a><br /><br /><br />

            </Col>
            <Col sm={3} className="bx ">
                <h6>SOCIAL MEDIA PLATFORM</h6><br />
               <FaFacebookF className='circle'/> <AiOutlineInstagram className='circle '/> <AiOutlineTwitter className='circle'/> <AiOutlineYoutube className='circle'/><br /><br /><br />
            </Col>
            
            <hr/>
           
          <p className="pad1  "> <AiOutlineCopyright/> Food Delivery App</p>
        </Row>
    );
}

export default Footer;