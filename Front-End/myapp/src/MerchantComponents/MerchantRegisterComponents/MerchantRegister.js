import {React, useState} from 'react';
import './../../MerchantComponents/MerchantRegisterComponents/MerchantRegister.css';
import MerchantImage from './../../assets/Banner/MerchantBanner.jpeg';
import MerchantImage2 from './../../assets/Banner/Merchantimg.jpeg';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/Form';
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import Form from 'react-bootstrap/Form';
import { BsPerson } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import Modal from 'react-bootstrap/Modal';
import Footer from '../../Components/FooterComponents/Footer';
import MHeader from '../MerchantHeaderComponents/MHeader';


export default function MerchantRegister(){
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);

    return(
        <div>
            <MHeader></MHeader>
           
            <img src={MerchantImage} alt="" style={{width:'100%'}}/>
            <Card className='payment-card mx-auto'>
 
                        <Container>
                            <div className='p-3'>
                                <Card.Body>
                                    <h2>Register your restaurant with us and get more customer</h2>
                                    <br />
                                    <div>
                                        <Row>
                                            <Col>
                                                <Button onClick={handleShow1} style={{ backgroundColor: '#d10000', boxShadow: 'none' }} className='btn-register p-1'>Register your restaurant</Button>
                                            </Col>
                                            <Col>
                                                <Button onClick={handleShow} style={{ backgroundColor: '#d10000', boxShadow: 'none' }} className='btn-login p-1'>Already Registered? Login</Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    <br />
                                    <br></br>
                                    <h4>Why should you parter with Waah?</h4>
                                    <h5>Waah enables you to get 60% more revenue, 10x new customers and boost your brand visibility by providing insights to improve your business. </h5>
                                    <br />
                                    <div style={{ backgroundImage: `url(${MerchantImage2})`, width: '100%', backgroundRepeat: 'no-repeat' }} >
                                        <br />
                                       
                                        <Container>
                                            <h2 style={{ color: 'white' }}>Start Your Journey With Waah</h2>
                                            <br/>
                                            <Button className="btn-startnow" style={{ boxShadow: 'none', backgroundColor: '#d10000', borderStyle: 'none'}}>Start Now</Button>
                                            </Container>
                                        <br />
                                        <br />
                                    </div>
                                </Card.Body>
                                <br/>
                                <br/>
                            </div>
                        </Container>
                      
                    </Card>
                    <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton><h3 className='color '>LOGIN</h3></Modal.Header>
                <Modal.Body >
                    <br />
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
                        <Button href="/merchant" className='but' onClick={handleClose} style={{ backgroundColor: '#d10000', borderStyle: 'none', boxShadow: 'none' }}>
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
                        {/* <Button className='but' onClick={handleClose1} style={{ backgroundColor: '#d10000', borderStyle: 'none', boxShadow: 'none' }}>
                            Register Now
                        </Button><br /><br /> */}
                        <p>By creating an account, I accept the Terms & Cconditions & Privacy Policy</p>
                    </Form>
                </Modal.Body>
            </Modal>
            <Footer></Footer>
        </div>
    );
}






