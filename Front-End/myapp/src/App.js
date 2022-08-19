import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import Container from 'react-bootstrap/Container';
import foodimage1 from './assets/images/img1.jpeg'
import foodimage2 from './assets/images/img2.jpeg'
import foodimage3 from './assets/images/img3.jpeg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
function App() {
  return (
    <Container>
      <br></br>
      <Row>
      <Col><h3>124 Restaurents</h3></Col>
        <Col>
          <div className='filters'><Form.Select style={{border:"none"}} aria-label="Default select example">
      <option>Sort BY</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select></div>
        </Col>
        <Col>
          <div className='filters'><Form.Select style={{border:"none"}} aria-label="Default select example">
      <option>Sort BY</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select></div>
    

        </Col>
      </Row>
       <Row>
        <Col className='pt-5' xs={12} md={4}>
        <div className='cards'>
            <Card border="light">
              <Card.Img className='card-images' variant="top" src={foodimage1} alt="" />
              <Card.Body>
                <Card.Title>Hotel Cafe</Card.Title>
                <Card.Text>
                  Veg Restaurent - Indian Bases
                </Card.Text>
                <Row>
                <Col xs={12} md={5}>
                <Button style={{ background:"#d10000",border:"none"}}>Order Now</Button>
                  </Col>
                  <Col xs={12} md={4}>
                <p className='arivaltime'>Arrival time 30min</p>
                  </Col>
                  <Col xs={12} md={3}>
                <p className='text-right'>₹240</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className='pt-5' xs={12} md={4}>
        <div className='cards'>
            <Card border="light">
              <Card.Img className='card-images' variant="top" src={foodimage2} alt="" />
              <Card.Body>
                <Card.Title>Hotel Cafe</Card.Title>
                <Card.Text>
                  Veg Restaurent - Indian Bases
                </Card.Text>
                <Row>
                <Col xs={12} md={5}>
                <Button style={{ background:"#d10000",border:"none"}}>Order Now</Button>
                  </Col>
                  <Col xs={12} md={4}>
                <p className='arivaltime'>Arrival time 40min</p>
                  </Col>
                  <Col xs={12} md={3}>
                <p className='text-right'>₹240</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className='pt-5' xs={12} md={4}>
        <div className='cards'>
            <Card border="light">
              <Card.Img className='card-images' variant="top" src={foodimage3} alt="" />
              <Card.Body>
                <Card.Title>Hotel Cafe</Card.Title>
                <Card.Text>
                  Veg Restaurent - Indian Bases
                </Card.Text>
                <Row>
                <Col xs={12} md={5}>
                <Button style={{ background:"#d10000",border:"none"}}>Order Now</Button>
                  </Col>
                  <Col xs={12} md={4}>
                <p className='arivaltime'>Arrival time 40min</p>
                  </Col>
                  <Col xs={12} md={3}>
                <p className='text-right'>₹240</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='pt-5' xs={12} md={4}>
        <div className='cards'>
            <Card border="light">
              <Card.Img className='card-images' variant="top" src={foodimage1} alt="" />
              <Card.Body>
                <Card.Title>Hotel Cafe</Card.Title>
                <Card.Text>
                  Veg Restaurent - Indian Bases
                </Card.Text>
                <Row>
                <Col xs={12} md={5}>
                <Button style={{ background:"#d10000",border:"none"}}>Order Now</Button>
                  </Col>
                  <Col xs={12} md={4}>
                <p className='arivaltime'>Arrival time 40min</p>
                  </Col>
                  <Col xs={12} md={3}>
                <p className='text-right'>₹240</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className='pt-5' xs={12} md={4}>
        <div className='cards'>
            <Card border="light">
              <Card.Img className='card-images' variant="top" src={foodimage2} alt="" />
              <Card.Body>
                <Card.Title>Hotel Cafe</Card.Title>
                <Card.Text>
                  Veg Restaurent - Indian Bases
                </Card.Text>
                <Row>
                <Col xs={12} md={5}>
                <Button style={{ background:"#d10000",border:"none"}}>Order Now</Button>
                  </Col>
                  <Col xs={12} md={4}>
                <p className='arivaltime'>Arrival time 40min</p>
                  </Col>
                  <Col xs={12} md={3}>
                <p className='text-right'>₹240</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
        <Col className='pt-5' xs={12} md={4}>
        <div className='cards'>
            <Card border="light">
              <Card.Img className='card-images' variant="top" src={foodimage3} alt="" />
              <Card.Body>
                <Card.Title>Hotel Cafe</Card.Title>
                <Card.Text>
                  Veg Restaurent - Indian Bases
                </Card.Text>
                <Row>
                <Col xs={12} md={5}>
                <Button style={{ background:"#d10000",border:"none"}}>Order Now</Button>
                  </Col>
                  <Col xs={12} md={4}>
                  <p className='arivaltime'>Arrival time 40min</p>
                  </Col>
                  <Col xs={12} md={3}>
                <p className='text-right'>₹240</p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </Col>
      </Row>
      
    </Container>
  );
}

export default App;
