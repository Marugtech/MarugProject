import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Header from '../HeaderComponents/Header';
import Footer from '../FooterComponents/Footer';
import './../MapComponents/Map.css'
import Card from 'react-bootstrap/Card';
import Call from './../../assets/Payment/phoneicon.jpg';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

export default function Map() {
    return (
        <div><Header></Header><hr></hr>
            <Container>
                <Card className='map-card'>
                    <div className='p-3'>
                        <Card.Body>
                            <div >
                                <h3>You made the payment successfully....</h3>
                                <p className='p-font' style={{ padding: '7px' }}><b>Order Id</b>  #45890120 <span style={{ padding: '7px' }}>Items 3</span> <span style={{ padding: '7px' }}> ₹1700 </span></p>
                            </div>
                            <div></div>
                            <Row>
                                <Col xs={12} md={7}>
                                    <div className=' p-font1 '>Your order is on the way it will reach in <b><span style={{ color: 'green' }}>45 mins</span></b>
                                        <br />
                                        <p className='p-font'>For queries you can call<b> Vinay Kumar</b></p>
                                    </div>
                                </Col>
                                <Col xs={12} md={3}>
                                    <div className=' p-font2 ' >
                                        <h3>
                                            Vinay Kumar S
                                        </h3>
                                        <p className='p-font'><b> +91 780045098</b></p>
                                    </div>
                                </Col>
                                <Col xs={12} md={2}>
                                    <div>
                                        <img className='img' src={Call} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </div>
                </Card>
                <br></br>
            </Container>
            <Footer></Footer>
        </div>
    )
}