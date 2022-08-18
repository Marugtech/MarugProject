import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Carousel.css';

function Carousel1() {
  return (
    <Carousel fade>
      <Carousel.Item  className="bag">
        <Row >
          <Col  className="align"> <h3 className="align">Second slide label</h3>
            <p className="align">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Col>
          <Col  className="image">

            <img src="assests/img/a4.jpg" className="image1  " alt="" />
          </Col>
          <Col  className="image">

            <img src="assests/img/a3.jpg" className="image1 " alt="" />
          </Col>
          <Col  className="image">

            <img src="assests/img/a4.jpg" className="image1 " alt="" />
          </Col>

        </Row>


      </Carousel.Item>
      <Carousel.Item>
        <Row className="bag">
          <Col className="align"> <h3 className="align">Second slide label</h3>
            <p className="align">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Col>
          <Col className="image">

            <img src="assests/img/a4.jpg" className="image1  " alt="" />
          </Col>
          <Col className="image">

            <img src="assests/img/a3.jpg" className="image1 " alt="" />
          </Col>
          <Col className="image">

            <img src="assests/img/a4.jpg" className="image1 " alt="" />
          </Col>

        </Row>


      </Carousel.Item>

      <Carousel.Item>
        <Row className="bag">
          <Col className="align"> <h3 className="align">Second slide label</h3>
            <p className="align">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></Col>
          <Col className="image">

            <img src="assests/img/a4.jpg" className="image1  " alt="" />
          </Col>
          <Col className="image">

            <img src="assests/img/a3.jpg" className="image1 " alt="" />
          </Col>
          <Col className="image">

            <img src="assests/img/a4.jpg" className="image1 " alt="" />
          </Col>

        </Row>


      </Carousel.Item>
    </Carousel>
  );
}

export default Carousel1;