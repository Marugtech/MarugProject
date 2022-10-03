import React from 'react'
import Container from 'react-bootstrap/esm/Container'
//import banerimg from './../../assets/Banner/orderbaner.png'
import './../PersondetailsComponents/Person.css'
import Card from 'react-bootstrap/Card';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import deliveryimg from './../../assets/Banner/delivery.jpeg'
import Headerdelivery from '../HeaderComponent/Header';
export default function person() {
    return (
        <div>
            <Headerdelivery></Headerdelivery>
            <div>
            <img  src={deliveryimg} alt='' className='img-baner'></img>
                {/* <img className='img-baner' src={banerimg} alt='' fluid></img> */}
            </div>
            <div className='persong-bg'>
                <br></br>
                <Container fluid>
                    <Card style={{ border: "none" }}  className='person-card' >
                        <Card.Body className='card-body p-4'>
                            <Card.Title>Submit The Following Details</Card.Title>
                            <br></br>
                            <Row>
                                <Col xs={12} sm={12} md={9} lg={9} xl={9}>
                                    <Form className="mb-3">
                                        <FloatingLabel className="mb-3" controlId="nmae" label="Enter FullName">
                                            <Form.Control type="name" placeholder="Enter FullName" />
                                        </FloatingLabel>
                                        <FloatingLabel className="mb-3" controlId="nmae" label="Enter UserName">
                                            <Form.Control type="name" placeholder="Enter UserName" />
                                        </FloatingLabel>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email address"
                                            className="mb-3"
                                        >
                                            <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                        <FloatingLabel className="mb-3" controlId="floatingPassword" label="Password">
                                            <Form.Control type="password" placeholder="Password" />
                                        </FloatingLabel>
                                        <Form.Group controlId="formFileLg" className="mb-3">
                                            <Form.Label>Upload License</Form.Label>
                                            <Form.Control type="file" size="lg" />
                                        </Form.Group>
                                        <Form.Group controlId="formFileLg" className="mb-3">
                                            <Form.Label>Upload Adhar Card</Form.Label>
                                            <Form.Control type="file" size="lg" />
                                        </Form.Group>
                                        <Form.Group controlId="formFileLg" className="mb-3">
                                            <Form.Label>Upload Bike Photos</Form.Label>
                                            <Form.Control type="file" size="lg" />
                                        </Form.Group>
                                        <Form.Group controlId="formFileLg" className="mb-3">
                                            <Form.Label>Upload Bike Insurence</Form.Label>
                                            <Form.Control type="file" size="lg" />
                                        </Form.Group>
                                        <Form.Group controlId="formFileLg" className="mb-3">
                                            <Form.Label>Upload Profile Photo</Form.Label>
                                            <Form.Control type="file" size="lg" />
                                        </Form.Group>
                                        <button className="btn-details">Submit Details</button>
                                    </Form>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                </Container>
                <br></br>
            </div>
            <Card style={{border:"none"}}>
                <Card.Body>20222 @ wahh All Rights Reserved</Card.Body>
            </Card>
        </div>
    )
}
