import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo  from './../../assets/logo/Logo1.jpeg'
import './../MerchantFooterComponent/MerchantFooter.css'
import { BsPersonCircle } from "react-icons/bs";

export default function MerchantFooter() {
  return (
    <div><Navbar>
    <Container>
      <Navbar.Brand href="#home">
        <img className='img-logo' src={logo} alt=''></img>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <div className='reg-merch'>Merchant Register &nbsp; <BsPersonCircle></BsPersonCircle></div>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}
