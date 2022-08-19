// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import { BiMap,BiSearch,BiUserCircle,BiCartAlt,BiCaretDown } from "react-icons/bi";
import companyLogo from './assets/logo/Logo1.jpeg';
import React, { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
function NavScrollExample() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#"><BiMap/>Location<BiCaretDown/></Navbar.Brand>
        <div className='logo-center'>
        <img src={companyLogo} alt="Food delivery logo"/>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2"><BiMap/>Link</Nav.Link> */}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
          <Navbar.Brand href="#"><BiSearch size={18} color="#d10000"/>SEARCH</Navbar.Brand>
          <Navbar.Brand href="#" onClick={handleShow}><BiUserCircle size={18} color="#d10000"/>LOGIN</Navbar.Brand>
          <Navbar.Brand href="#"><BiCartAlt size={18} color="#d10000"/>CART</Navbar.Brand>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        <div className='modal-text'><h2>Login</h2></div>
        </Modal.Header>
        
        
          <Form>
          <div className="register">
            <input className="inputbox" type="text" placeholder="Enter Name"  /><br></br>
            <input className="inputbox" type="text" placeholder="Enter Email"  /><br></br>
            <input className="inputbox" type="Password" placeholder="Enter Password" />
            <button  className="appbutton" type="button">Sign Up</button>
        </div>
          </Form>
        
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
    </Navbar>
  );
}

export default NavScrollExample;