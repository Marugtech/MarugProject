import React from 'react';
import Row from 'react-bootstrap/Row';
import './Body.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Foodimg1 from './../../assets/images/img2.jpeg';
import Foodimg2 from './../../assets/images/img1.jpeg';
import Foodimg3 from './../../assets/images/img3.jpeg';
import Popup from 'reactjs-popup';
import Button from 'react-bootstrap/Button';
import popimg1 from './../../assets/images/popimg1.jpg'
import popimg2 from './../../assets/images/popimg2.jpg'
import popimg3 from './../../assets/images/popimg3.jpg'
import popimg4 from './../../assets/images/popimg4.jpg'
import popimg5 from './../../assets/images/popimg5.jpg'
import popimg6 from './../../assets/images/popimg6.jpg'
export default function Body() {
    return (
        <Container>
            <Row>
                <Col sm={12} xs={12} md={4} xl={4} lg={4} xxl={4} className='pt-4'> <Card className='card'>
                    <Card.Img className='card-img' variant="top" src={Foodimg3} />
                    <Card.Body>
                        <Card.Title> Biriyani</Card.Title>
                        <Card.Text>
                            Veg Restaurents - Indian Bases
                        </Card.Text>
                        <div class="d-flex justify-content-between">
                            <div><Button href="/checkout" className='btn-cart' style={{ borderStyle: 'none', backgroundColor: '#d10000', boxShadow:'none' }}>Add To Cart</Button></div>
                            <div><small>Arrival TIme 40 min</small></div>
                            <div>₹176</div>
                        </div>
                    </Card.Body>
                    <Popup trigger={<Button style={{ background: "#ECECEC", color: "black", border: "white", fontFamily: "Figtree", fontSize: "15px", boxShadow: "none", alignItems:'center'}} className="card">QUICK VIEW</Button>}
                        position="center bottom" className='pop-position'>
                        <Card className='cards'>
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center", fontSize: '15px' }}>MENU</Card.Title>
                                <hr />
                                <Row className="d-flex justify-content-between">
                                    <Col xs={4} md={4}>
                                        <p className='p-popup'><b>Hotel Buhari</b></p>
                                        <p className='p1-popup'>Tambaram</p>
                                        <hr />
                                        <p className='p1-popup'>Combos</p>
                                        <p className='p1-popup'>Veg Soups</p>
                                        <p className='p1-popup'>Non Veg Soups</p>
                                        <p className='p1-popup'>Mutton Biryani</p>
                                        <p className='p1-popup'>Chicken Biryani</p>
                                        <p className='p1-popup'>Bucket Biryani</p>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg1} alt="" />
                                                <p className='pop-align'>Chicken Pepper</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg2} alt="" />
                                                <p className='pop-align'>Mutton Masala</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg3} alt="" />
                                                <p className='pop-align'>Chicken Chukka</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg4} alt="" />
                                                <p className='pop-align'>Mutton Chukka</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg5} alt="" />
                                                <p className='pop-align'>Kadai Chicken</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg6} alt="" />
                                                <p className='pop-align'>Butter Chicken Masala</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Popup>
                </Card></Col>
                <Col sm={12} xs={12} md={4} xl={4} lg={4} xxl={4} className='pt-4'> <Card className='card'>
                    <Card.Img className='card-img' variant="top" src={Foodimg2} />
                    <Card.Body>
                        <Card.Title>Buhari</Card.Title>
                        <Card.Text>
                            Veg Restaurents - Indian Bases
                        </Card.Text>
                        <div class="d-flex justify-content-between">
                            <div><Button href="/checkout" className='btn-cart' style={{ borderStyle: 'none', backgroundColor: '#d10000', boxShadow:'none' }}>Add To Cart</Button></div>
                            <div><small>Arrival TIme 40 min</small></div>
                            <div>₹176</div>
                        </div>
                    </Card.Body>
                    <Popup trigger={<Button style={{ background: "#ECECEC", color: "black", border: "white", fontFamily: "Figtree", fontSize: "15px", boxShadow: "none", alignItems:'center' }} className="card">QUICK VIEW</Button>}
                        position="center bottom" className='pop-position'>
                        <Card className='cards'>
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center", fontSize: '15px' }}>MENU</Card.Title>
                                <hr />
                                <Row className="d-flex justify-content-between">
                                    <Col xs={4} md={4}>
                                        <p className='p-popup'><b>Hotel Buhari</b></p>
                                        <p className='p1-popup'>Tambaram</p>
                                        <hr />
                                        <p className='p1-popup'>Combos</p>
                                        <p className='p1-popup'>Veg Soups</p>
                                        <p className='p1-popup'>Non Veg Soups</p>
                                        <p className='p1-popup'>Mutton Biryani</p>
                                        <p className='p1-popup'>Chicken Biryani</p>
                                        <p className='p1-popup'>Bucket Biryani</p>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg1} alt="" />
                                                <p className='pop-align'>Chicken Pepper</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg2} alt="" />
                                                <p className='pop-align'>Mutton Masala</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg3} alt="" />
                                                <p className='pop-align'>Chicken Chukka</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg4} alt="" />
                                                <p className='pop-align'>Mutton Chukka</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg5} alt="" />
                                                <p className='pop-align'>Kadai Chicken</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg6} alt="" />
                                                <p className='pop-align'>Butter Chicken Masala</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Popup>
                </Card></Col>
                <Col sm={12} xs={12} md={4} xl={4} lg={4} xxl={4} className='pt-4'> <Card className='card'>
                    <Card.Img className='card-img' variant="top" src={Foodimg1} />
                    <Card.Body>
                        <Card.Title>Hotel Cafe</Card.Title>
                        <Card.Text>
                            Veg Restaurents - Indian Bases
                        </Card.Text>
                        <div class="d-flex justify-content-between">
                            <div><Button href="/checkout" className='btn-cart' style={{ borderStyle: 'none', backgroundColor: '#d10000', boxShadow:'none' }}>Add To Cart</Button></div>
                            <div><small>Arrival TIme 40 min</small></div>
                            <div>₹176</div>
                        </div>
                    </Card.Body>
                    <Popup trigger={<Button style={{ background: "#ECECEC", color: "black", border: "white", fontFamily: "Figtree", fontSize: "15px", boxShadow: "none", alignItems:'center' }} className="card">QUICK VIEW</Button>}
                        position="center bottom" className='pop-position'>
                        <Card className='cards'>
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center", fontSize: '15px' }}>MENU</Card.Title>
                                <hr />
                                <Row className="d-flex justify-content-between">
                                    <Col xs={4} md={4}>
                                        <p className='p-popup'><b>Hotel Buhari</b></p>
                                        <p className='p1-popup'>Tambaram</p>
                                        <hr />
                                        <p className='p1-popup'>Combos</p>
                                        <p className='p1-popup'>Veg Soups</p>
                                        <p className='p1-popup'>Non Veg Soups</p>
                                        <p className='p1-popup'>Mutton Biryani</p>
                                        <p className='p1-popup'>Chicken Biryani</p>
                                        <p className='p1-popup'>Bucket Biryani</p>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg1} alt="" />
                                                <p className='pop-align'>Chicken Pepper</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg2} alt="" />
                                                <p className='pop-align'>Mutton Masala</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg3} alt="" />
                                                <p className='pop-align'>Chicken Chukka</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg4} alt="" />
                                                <p className='pop-align'>Mutton Chukka</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg5} alt="" />
                                                <p className='pop-align'>Kadai Chicken</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg6} alt="" />
                                                <p className='pop-align'>Butter Chicken Masala</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Popup>
                </Card></Col>
            </Row>
            <Row>
                <Col sm={12} xs={12} md={4} xl={4} lg={4} xxl={4} className='pt-4'> <Card className='card'>
                    <Card.Img className='card-img' variant="top" src={Foodimg1} />
                    <Card.Body>
                        <Card.Title>Hotel Cafe</Card.Title>
                        <Card.Text>
                            Veg Restaurents - Indian Bases
                        </Card.Text>
                        <div class="d-flex justify-content-between">
                            <div><Button href="/checkout" className='btn-cart' style={{ borderStyle: 'none', backgroundColor: '#d10000', boxShadow:'none' }}>Add To Cart</Button></div>
                            <div><small>Arrival TIme 40 min</small></div>
                            <div>₹176</div>
                        </div>
                    </Card.Body>
                    <Popup trigger={<Button style={{ background: "#ECECEC", color: "black", border: "white", fontFamily: "Figtree", fontSize: "15px", boxShadow: "none", alignItems:'center' }} className="card">QUICK VIEW</Button>}
                        position="center bottom" className='pop-position'>
                        <Card className='cards'>
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center", fontSize: '15px' }}>MENU</Card.Title>
                                <hr />
                                <Row className="d-flex justify-content-between">
                                    <Col xs={4} md={4}>
                                        <p className='p-popup'><b>Hotel Buhari</b></p>
                                        <p className='p1-popup'>Tambaram</p>
                                        <hr />
                                        <p className='p1-popup'>Combos</p>
                                        <p className='p1-popup'>Veg Soups</p>
                                        <p className='p1-popup'>Non Veg Soups</p>
                                        <p className='p1-popup'>Mutton Biryani</p>
                                        <p className='p1-popup'>Chicken Biryani</p>
                                        <p className='p1-popup'>Bucket Biryani</p>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg1} alt="" />
                                                <p className='pop-align'>Chicken Pepper</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg2} alt="" />
                                                <p className='pop-align'>Mutton Masala</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg3} alt="" />
                                                <p className='pop-align'>Chicken Chukka</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg4} alt="" />
                                                <p className='pop-align'>Mutton Chukka</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg5} alt="" />
                                                <p className='pop-align'>Kadai Chicken</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg6} alt="" />
                                                <p className='pop-align'>Butter Chicken Masala</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Popup>
                </Card></Col>
                <Col sm={12} xs={12} md={4} xl={4} lg={4} xxl={4} className='pt-4'> <Card className='card'>
                    <Card.Img className='card-img' variant="top" src={Foodimg2} />
                    <Card.Body>
                        <Card.Title>Buhari</Card.Title>
                        <Card.Text>
                            Veg Restaurents - Indian Bases
                        </Card.Text>
                        <div class="d-flex justify-content-between">
                            <div><Button href="/checkout" className='btn-cart' style={{ borderStyle: 'none', backgroundColor: '#d10000', boxShadow:'none' }}>Add To Cart</Button></div>
                            <div><small>Arrival TIme 40 min</small></div>
                            <div>₹176</div>
                        </div>
                    </Card.Body>
                    <Popup trigger={<Button style={{ background: "#ECECEC", color: "black", border: "white", fontFamily: "Figtree", fontSize: "15px", boxShadow: "none", alignItems:'center' }} className="card">QUICK VIEW</Button>}
                        position="center bottom" className='pop-position'>
                        <Card className='cards'>
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center", fontSize: '15px' }}>MENU</Card.Title>
                                <hr />
                                <Row className="d-flex justify-content-between">
                                    <Col xs={4} md={4}>
                                        <p className='p-popup'><b>Hotel Buhari</b></p>
                                        <p className='p1-popup'>Tambaram</p>
                                        <hr />
                                        <p className='p1-popup'>Combos</p>
                                        <p className='p1-popup'>Veg Soups</p>
                                        <p className='p1-popup'>Non Veg Soups</p>
                                        <p className='p1-popup'>Mutton Biryani</p>
                                        <p className='p1-popup'>Chicken Biryani</p>
                                        <p className='p1-popup'>Bucket Biryani</p>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg1} alt="" />
                                                <p className='pop-align'>Chicken Pepper</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg2} alt="" />
                                                <p className='pop-align'>Mutton Masala</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg3} alt="" />
                                                <p className='pop-align'>Chicken Chukka</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg4} alt="" />
                                                <p className='pop-align'>Mutton Chukka</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg5} alt="" />
                                                <p className='pop-align'>Kadai Chicken</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg6} alt="" />
                                                <p className='pop-align'>Butter Chicken Masala</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Popup>
                </Card></Col>
                <Col sm={12} xs={12} md={4} xl={4} lg={4} xxl={4} className='pt-4'> <Card className='card'>
                    <Card.Img className='card-img' variant="top" src={Foodimg3} />
                    <Card.Body>
                        <Card.Title>The Biriyani</Card.Title>
                        <Card.Text>
                            Veg Restaurents - Indian Bases
                        </Card.Text>
                        <div class="d-flex justify-content-between">
                            <div><Button href="/checkout" className='btn-cart' style={{ borderStyle: 'none', backgroundColor: '#d10000', boxShadow:'none' }}>Add To Cart</Button></div>
                            <div><small>Arrival TIme 40 min</small></div>
                            <div>₹176</div>
                        </div>
                    </Card.Body>
                    <Popup trigger={<Button style={{ background: "#ECECEC", color: "black", border: "white", fontFamily: "Figtree", fontSize: "15px", boxShadow: "none", alignItems:'center' }} className="card">QUICK VIEW</Button>}
                        position="center bottom" className='pop-position'>
                        <Card className='cards'>
                            <Card.Body>
                                <Card.Title style={{ textAlign: "center", fontSize: '15px' }}>MENU</Card.Title>
                                <hr />
                                <Row className="d-flex justify-content-between">
                                    <Col xs={4} md={4}>
                                        <p className='p-popup'><b>Hotel Buhari</b></p>
                                        <p className='p1-popup'>Tambaram</p>
                                        <hr />
                                        <p className='p1-popup'>Combos</p>
                                        <p className='p1-popup'>Veg Soups</p>
                                        <p className='p1-popup'>Non Veg Soups</p>
                                        <p className='p1-popup'>Mutton Biryani</p>
                                        <p className='p1-popup'>Chicken Biryani</p>
                                        <p className='p1-popup'>Bucket Biryani</p>
                                    </Col>
                                    <Col xs={8} md={8}>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg1} alt="" />
                                                <p className='pop-align'>Chicken Pepper</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg2} alt="" />
                                                <p className='pop-align'>Mutton Masala</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg3} alt="" />
                                                <p className='pop-align'>Chicken Chukka</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg4} alt="" />
                                                <p className='pop-align'>Mutton Chukka</p>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg5} alt="" />
                                                <p className='pop-align'>Kadai Chicken</p>
                                            </Col>
                                            <Col xs={6} md={6}>
                                                <Card.Img className='popup-image' variant="top" src={popimg6} alt="" />
                                                <p className='pop-align'>Butter Chicken Masala</p>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Popup>
                </Card></Col>
            </Row>
            <br></br>
            <br></br>
        </Container>

    )
}