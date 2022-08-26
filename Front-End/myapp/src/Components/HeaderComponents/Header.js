import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/Form';
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import { BsPerson } from "react-icons/bs";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../HeaderComponents/Header.css'
import { ImMobile } from "react-icons/im";
import { BiMap, BiSearch, BiCartAlt, BiCaretDown } from "react-icons/bi";
import companyLogo from './../../assets/logo/Logo1.jpeg';
import Modal from 'react-bootstrap/Modal';


function Header() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#"><BiMap className='nav-icons' />Chennai - Tambaram<BiCaretDown className='nav-icons' /></Navbar.Brand>
        <div className='logo-center'>
          <img src={companyLogo} alt="Food delivery logo" />
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          </Nav>
          <Form className="d-flex">
            <Navbar.Brand href="#"><BiSearch className='nav-icons' color="#d10000" />SEARCH</Navbar.Brand>
            <Navbar.Brand href="#" onClick={handleShow}><BsPerson className='nav-icons' color="#d10000" />LOGIN</Navbar.Brand>
            <Navbar.Brand href="/checkout"><BiCartAlt className='nav-icons' color="#d10000" />CART</Navbar.Brand>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton><h3 className='color '>LOGIN</h3></Modal.Header>
        <Modal.Body >
          <h5 ><Button onClick={handleShow1} style={{ background: "white", color: "black", border: "white", fontFamily: "Figtree", fontSize: "18px", boxShadow: "none" }} className='login-btn'><span className='log-btn'>Register</span> if you dont have account</Button></h5><br />
          <Form>
            <Form.Group className="mb-3" controlId="Input1">
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  autoFocus
                />
                <div className="search-icon">
                  <AiOutlineMail />
                </div>
              </InputGroup>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Input2"
            >
              <InputGroup>
                <Form.Control type='password' placeholder='Password' />
                <div className="search-icon1">
                  <AiOutlineLock />
                </div>
              </InputGroup>
            </Form.Group>
            <Button className='but' onClick={handleClose} style={{ backgroundColor: '#d10000', borderStyle: 'none', boxShadow: 'none' }}>
              login Now
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton><h3 className='color '>REGISTER</h3></Modal.Header>
        <Modal.Body >
          <br />
          <Form>
            <Form.Group className="mb-3" controlId="Input3">
              <InputGroup>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  autoFocus
                />
                <div className="search-icon3">
                  <BsPerson />
                </div>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Input4">
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="Email"
                />
                <div className="search-icon4">
                  <AiOutlineMail />
                </div>
              </InputGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="Input5">
              <InputGroup>
                <Form.Control
                  type="number"
                  placeholder="Phone"
                />
                <div className="Mobile-Icon">
                  <ImMobile />
                </div>
              </InputGroup>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="Input6"
            >
              <InputGroup>
                <Form.Control type='password' placeholder='Password' />
                <div className='lock-icon'>
                  <AiOutlineLock />
                </div>
              </InputGroup>
            </Form.Group>
            <Button className='but' onClick={handleClose1} style={{ backgroundColor: '#d10000', borderStyle: 'none', boxShadow: 'none' }}>
              Register Now
            </Button><br/><br/>
            <p>By creating an account, I accept the Terms & Cconditions & Privacy Policy</p>
          </Form>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default Header;