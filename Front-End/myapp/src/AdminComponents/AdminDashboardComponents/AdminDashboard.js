import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'
import Card from 'react-bootstrap/Card';
import './../AdminDashboardComponents/AdminDashboard.css'
import poori from './../../assets/images/poori.jpg'
export default function AdminDashboard() {
    return (
        <div className='pt-4'>
            <Row>
                <Col sm={6} md={3} xl={3} lg={3}>
                    <Card style={{ border: "none" }} className='admin-card mb-3'>
                        <Card.Body>Total Orders</Card.Body>
                        <div className='total-num mb-4'><b>168</b></div>
                    </Card>
                </Col>
                <Col sm={6} md={3} xl={3} lg={3}>
                    <Card style={{ border: "none" }} className='admin-card mb-3'>
                        <Card.Body>Total Restaurent</Card.Body>
                        <div className='total-num mb-4'><b>1024</b></div>
                    </Card>
                </Col>
                <Col sm={6} md={3} xl={3} lg={3}>
                    <Card style={{ border: "none" }} className='admin-card mb-3'>
                        <Card.Body>Earnings</Card.Body>
                        <div className='total-num mb-4'><b>$78,001</b></div>
                    </Card>
                </Col>
                <Col sm={6} md={3} xl={3} lg={3}>
                    <Card style={{ border: "none" }} className='admin-card mb-3'>
                        <Card.Body>Monthly Earnings</Card.Body>
                        <div className='total-num mb-4'><b>$42,00</b></div>
                    </Card>
                </Col>
            </Row>
            <Row className='pt-4'>
                <Col sm={12} md={4} lg={4} xl={4}>
                    <Card className='card-top mb-3' style={{ border: "none" }}>
                        <Card.Body>
                            <div className='d-flex justify-content-between'>
                                <div>Top Stories</div>
                                <div>( last 30 days )</div>
                            </div>
                        </Card.Body>
                        <div className='details-card mb-3'>
                            <Row className='mb-4 pt-2'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Grocery Stotre <br></br><span className='muted-text'>28 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Grocery Stotre <br></br><span className='muted-text'>14 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Grocery Stotre <br></br><span className='muted-text'>10 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Grocery Stotre <br></br><span className='muted-text'>10 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Grocery Stotre <br></br><span className='muted-text'>10 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col sm={12} md={4} lg={4} xl={4}>
                    <Card className='card-top mb-3' style={{ border: "none" }}>
                        <Card.Body><div className='d-flex justify-content-between'>
                            <div>Top Drivers</div>
                            <div>( last 30 days )</div>
                        </div></Card.Body>
                        <div className='details-card mb-3'>
                            <Row className='mb-4 pt-2'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Jason smith<br></br><span className='muted-text'>28 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Test Driver 1 <br></br><span className='muted-text'>14 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Test Driver 2 <br></br><span className='muted-text'>10 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Test Driver 3 <br></br><span className='muted-text'>10 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Test Driver 4 <br></br><span className='muted-text'>10 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
                <Col sm={12} md={4} lg={4} xl={4}>
                    <Card className='card-top mb-3' style={{ border: "none" }}>
                        <Card.Body><div className='d-flex justify-content-between'>
                            <div>Top Customers</div>
                            <div>( last 30 days )</div>
                        </div></Card.Body>
                        <div className='details-card mb-3'>
                            <Row className='mb-4 pt-2'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Smith Jordan <br></br><span className='muted-text'>28 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Test Driver 1 <br></br><span className='muted-text'>14 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Test Driver 2 <br></br><span className='muted-text'>10 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Test Driver 3<br></br><span className='muted-text'>10 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                            <Row className='mb-3'>
                                <Col sm={4} md={4} lg={4} xl={4}>
                                    <img className='img-store' src={poori} alt=''></img>
                                </Col>
                                <Col sm={6} md={6} lg={6} xl={6}>
                                    <div>
                                        <p>Test Driver 4 <br></br><span className='muted-text'>10 Orders</span> </p>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Card>
                </Col>
            </Row>
           
            <h6 className='pt-4'>2022 @ Wahh all rights Reserved</h6>
        </div>
        
    )
}
