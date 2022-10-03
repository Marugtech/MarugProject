import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import deliveryimg from './../../assets/Banner/delivery1.jpeg'
import Card from 'react-bootstrap/Card';
import './../OrderComponents/Order.css'
import Table from 'react-bootstrap/Table';
import poori from './../../assets/images/poori.jpg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import locationmap from './../../assets/Banner/locationmap.png'
import Headerdelivery from '../HeaderComponent/Header';
export default function Order() {
  return (
    <div>
      <Headerdelivery></Headerdelivery>
      <div className='deliverybaner' style={{ backgroundImage: `url(${deliveryimg})` }}>
        <Container>
          {/* <Row className='align-items-end'>
            <Col sm={12} md={8} lg={8} xl={8}></Col>
            <Col className='d-flex banercard' sm={12} md={4} lg={4} xl={4}>
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
                <Card.Body>This is some text within a card body.</Card.Body>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
          </Row> */}
        </Container>
      </div>
      <Container>
        <br></br>
        <Card style={{ border: "none" }} className="ordercard">
          <Card.Body>
            <Table responsive>
              <thead>
                <tr>
                  <th></th>
                  <th>Available Orders</th>
                  <th>Location</th>
                  <th>Order Status</th>
                  <th>Duration</th>
                  <th>Distance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='img-width'>
                    <img className='store-img' src={poori} alt=''></img>
                  </td>
                  <td className='locat-width'><h6>The FlowerStore</h6><span>10 Orders</span></td>
                  <td className='locat-width'><h5>No, 10 Anna Street SnA Flats</h5></td>
                  <td className='pick-color'>Picked By Others</td>
                  <td><h6>45 Mins</h6></td>
                  <td><h6>5Km</h6></td>
                </tr>
                <tr>
                  <td><img className='store-img' src={poori} alt=''></img></td>
                  <td className='locat-width'><h6>The FlowerStore</h6><span>10 Orders</span></td>
                  <td className='locat-width'><h5>No, 10 Anna Street SnA Flats</h5></td>
                  <td className='pick-color'>Picked By Others</td>
                  <td><h6>45 Mins</h6></td>
                  <td><h6>5Km</h6></td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <div className='pt-4 mt-4'>
          <Row>
            <Col sm={12} md={5} lg={5} xl={5}>
              <p className='order-text'>Order Picked at <b>5.20pm</b> Your expecting to reach destination on time</p>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={8} lg={8} xl={8}>
              <img className='location-img' src={locationmap} alt=''></img>
            </Col>
            <Col sm={12} md={4} lg={4} xl={4}>
              <Card style={{ border: "none" }} className="ordercard">
                <Card.Body>
                  <div className='p-4'>
                    <div>
                      <h5>Start Location</h5>
                      <h6>No, 10 Anna Street SNA Flats</h6>
                      <hr></hr>
                    </div>
                    <div>
                      <h5>End Location</h5>
                      <h6>No, 10 Anna Street SNA Flats</h6>
                      <hr></hr>
                    </div>
                    <div>
                      <h5>Duration</h5>
                      <h6>45 Mins</h6>
                      <hr></hr>
                    </div>
                    <div>
                      <h5>Distance</h5>
                      <h6>8Km</h6>
                      <hr></hr>
                    </div>
                    <div>
                      <h5>Customer Details</h5>
                      <h4>Aravindh Kumar</h4>
                      <h6>9876543210</h6>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <br></br>
      </Container>
      <Card style={{ border: "none" }} className="ordercard">
        <Container>
          <Card.Body>2022 @ Wahh All Rights Reserved</Card.Body>
        </Container>
      </Card>
    </div>

  )
}
