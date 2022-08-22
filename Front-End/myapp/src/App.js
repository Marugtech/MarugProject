import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css';
import Container from 'react-bootstrap/Container';
import foodimage1 from './assets/images/img1.jpeg'
import foodimage2 from './assets/images/img2.jpeg'
import foodimage3 from './assets/images/img3.jpeg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaFilter } from "react-icons/fa";
import Form from 'react-bootstrap/Form';
import Popup from 'reactjs-popup';
import popimg1 from './assets/images/popimg1.jpg'
import popimg2 from './assets/images/popimg2.jpg'
import popimg3 from './assets/images/popimg3.jpg'
import popimg4 from './assets/images/popimg4.jpg'
import popimg5 from './assets/images/popimg5.jpg'
import popimg6 from './assets/images/popimg6.jpg'
function App() {
  return (
    <Container>
      <br></br>
      <Row>
        <div className="d-flex">
          <div className=" flex-grow-1"><h1>124 Restaurents</h1></div>
          <div className=''><Form.Select>
            <option >SortBy</option>
            <option value="">Cost:High To Low</option>
            <option value="">Cost:Low To High</option>
            <option value="">Rating</option>
            <option value="">Delivery Time</option>
          </Form.Select></div>
          <div className="p-2">Filter<FaFilter /></div>
        </div>
      </Row>
      <hr/>
       <Row>
       <h4>Products Arrounds You</h4>
        <Col className='pt-3' xs={12} md={4}>
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
              <Popup trigger={<Button style={{background:"#ECECEC", color:"black", border:"white", fontFamily:"Figtree",fontSize:"23px", boxShadow:"none"}} className="quickview cards">QUICK VIEW</Button>}
           position="center bottom" className='pop-position'>
           <div className='quickview-popup'>
           <div className='popup-card cards'>
            <Card border="light">
              {/* <Card.Img className='card-images' variant="top" src={foodimage3} alt="" /> */}
              <Card.Body>
                <Card.Title style={{textAlign:"center"}}>MENU</Card.Title>
                <hr/>
                <Row>
        
                <Col xs={4} md={4}>
                  <h6><b>Hotel Buhari</b></h6>
                  <p>Tambaram</p>
                  <hr/>
                  <p>Combos</p>
                  <p>Veg Soups</p>
                  <p>Non Veg Soups</p>
                  <p>Mutton Biryani</p>
                  <p>Chicken Biryani</p>
                  <p>Bucket Biryani</p>
                  </Col>
                  <Col xs={8} md={8}>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg1} alt="" />
                      <p className='pop-align'>Chicken Pepper</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg2} alt="" />
                      <p className='pop-align'>Mutton Masala</p>
                      </Col>
                      

                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg3} alt="" />
                      <p className='pop-align'>Chicken Chukka</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg4} alt="" />
                      <p className='pop-align'>Mutton Chukka</p>
                      </Col>
                     

                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg5} alt="" />
                      <p className='pop-align'>Kadai Chicken</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg6} alt="" />
                      <p className='pop-align'>Butter Chicken Masala</p>
                      </Col>
                      
                    </Row>
                  
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
           </div>
          </Popup>
            </Card>
          </div>
        </Col>
        <Col className='pt-3' xs={12} md={4}>
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
              <Popup trigger={<Button style={{background:"#ECECEC", color:"black", border:"white", fontFamily:"Figtree",fontSize:"23px", boxShadow:"none"}} className="quickview cards">QUICK VIEW</Button>}
           position="center bottom" className='pop-position'>
           <div className='quickview-popup'>
           <div className='popup-card cards'>
            <Card border="light">
              {/* <Card.Img className='card-images' variant="top" src={foodimage3} alt="" /> */}
              <Card.Body>
                <Card.Title style={{textAlign:"center"}}>MENU</Card.Title>
                <hr/>
                <Row>
        
                <Col xs={4} md={4}>
                  <h6><b>Hotel Buhari</b></h6>
                  <p>Tambaram</p>
                  <hr/>
                  <p>Combos</p>
                  <p>Veg Soups</p>
                  <p>Non Veg Soups</p>
                  <p>Mutton Biryani</p>
                  <p>Chicken Biryani</p>
                  <p>Bucket Biryani</p>
                  </Col>
                  <Col xs={8} md={8}>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg1} alt="" />
                      <p className='pop-align'>Chicken Pepper</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg2} alt="" />
                      <p className='pop-align'>Mutton Masala</p>
                      </Col>
                      

                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg3} alt="" />
                      <p className='pop-align'>Chicken Chukka</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg4} alt="" />
                      <p className='pop-align'>Mutton Chukka</p>
                      </Col>
                     

                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg5} alt="" />
                      <p className='pop-align'>Kadai Chicken</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg6} alt="" />
                      <p className='pop-align'>Butter Chicken Masala</p>
                      </Col>
                      
                    </Row>
                  
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
           </div>
          </Popup>
            </Card>
          </div>
          
          
        </Col>
        <Col className='pt-3' xs={12} md={4}>
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
              <Popup trigger={<Button style={{background:"#ECECEC", color:"black", border:"white", fontFamily:"Figtree",fontSize:"23px", boxShadow:"none"}} className="quickview cards">QUICK VIEW</Button>}
           position="center bottom" className='pop-position'>
           <div className='quickview-popup'>
           <div className='popup-card cards'>
            <Card border="light">
              {/* <Card.Img className='card-images' variant="top" src={foodimage3} alt="" /> */}
              <Card.Body>
                <Card.Title style={{textAlign:"center"}}>MENU</Card.Title>
                <hr/>
                <Row>
        
                <Col xs={4} md={4}>
                  <h6><b>Hotel Buhari</b></h6>
                  <p>Tambaram</p>
                  <hr/>
                  <p>Combos</p>
                  <p>Veg Soups</p>
                  <p>Non Veg Soups</p>
                  <p>Mutton Biryani</p>
                  <p>Chicken Biryani</p>
                  <p>Bucket Biryani</p>
                  </Col>
                  <Col xs={8} md={8}>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg1} alt="" />
                      <p className='pop-align'>Chicken Pepper</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg2} alt="" />
                      <p className='pop-align'>Mutton Masala</p>
                      </Col>
                      

                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg3} alt="" />
                      <p className='pop-align'>Chicken Chukka</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg4} alt="" />
                      <p className='pop-align'>Mutton Chukka</p>
                      </Col>
                     

                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg5} alt="" />
                      <p className='pop-align'>Kadai Chicken</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg6} alt="" />
                      <p className='pop-align'>Butter Chicken Masala</p>
                      </Col>
                      
                    </Row>
                  
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
           </div>
          </Popup>
            </Card>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className='pt-3' xs={12} md={4}>
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
              <Popup trigger={<Button style={{background:"#ECECEC", color:"black", border:"white", fontFamily:"Figtree",fontSize:"23px", boxShadow:"none"}} className="quickview cards">QUICK VIEW</Button>}
           position="center bottom" className='pop-position'>
           <div className='quickview-popup'>
           <div className='popup-card cards'>
            <Card border="light">
              {/* <Card.Img className='card-images' variant="top" src={foodimage3} alt="" /> */}
              <Card.Body>
                <Card.Title style={{textAlign:"center"}}>MENU</Card.Title>
                <hr/>
                <Row>
        
                <Col xs={4} md={4}>
                  <h6><b>Hotel Buhari</b></h6>
                  <p>Tambaram</p>
                  <hr/>
                  <p>Combos</p>
                  <p>Veg Soups</p>
                  <p>Non Veg Soups</p>
                  <p>Mutton Biryani</p>
                  <p>Chicken Biryani</p>
                  <p>Bucket Biryani</p>
                  </Col>
                  <Col xs={8} md={8}>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg1} alt="" />
                      <p className='pop-align'>Chicken Pepper</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg2} alt="" />
                      <p className='pop-align'>Mutton Masala</p>
                      </Col>
                      

                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg3} alt="" />
                      <p className='pop-align'>Chicken Chukka</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg4} alt="" />
                      <p className='pop-align'>Mutton Chukka</p>
                      </Col>
                     

                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg5} alt="" />
                      <p className='pop-align'>Kadai Chicken</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg6} alt="" />
                      <p className='pop-align'>Butter Chicken Masala</p>
                      </Col>
                      
                    </Row>
                  
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
           </div>
          </Popup>
            </Card>
          </div>
        </Col>
        <Col className='pt-3' xs={12} md={4}>
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
              <Popup trigger={<Button style={{background:"#ECECEC", color:"black", border:"white", fontFamily:"Figtree",fontSize:"23px", boxShadow:"none"}} className="quickview cards">QUICK VIEW</Button>}
           position="center bottom" className='pop-position'>
           <div className='quickview-popup'>
           <div className='popup-card cards'>
            <Card border="light">
              {/* <Card.Img className='card-images' variant="top" src={foodimage3} alt="" /> */}
              <Card.Body>
                <Card.Title style={{textAlign:"center"}}>MENU</Card.Title>
                <hr/>
                <Row>
        
                <Col xs={4} md={4}>
                  <h6><b>Hotel Buhari</b></h6>
                  <p>Tambaram</p>
                  <hr/>
                  <p>Combos</p>
                  <p>Veg Soups</p>
                  <p>Non Veg Soups</p>
                  <p>Mutton Biryani</p>
                  <p>Chicken Biryani</p>
                  <p>Bucket Biryani</p>
                  </Col>
                  <Col xs={8} md={8}>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg1} alt="" />
                      <p className='pop-align'>Chicken Pepper</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg2} alt="" />
                      <p className='pop-align'>Mutton Masala</p>
                      </Col>
                      

                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg3} alt="" />
                      <p className='pop-align'>Chicken Chukka</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg4} alt="" />
                      <p className='pop-align'>Mutton Chukka</p>
                      </Col>
                     

                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg5} alt="" />
                      <p className='pop-align'>Kadai Chicken</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg6} alt="" />
                      <p className='pop-align'>Butter Chicken Masala</p>
                      </Col>
                      
                    </Row>
                  
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
           </div>
          </Popup>
            </Card>
          </div>
        </Col>
        <Col className='pt-3' xs={12} md={4}>
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
              <Popup trigger={<Button style={{background:"#ECECEC", color:"black", border:"white", fontFamily:"Figtree",fontSize:"23px", boxShadow:"none"}} className="quickview cards">QUICK VIEW</Button>}
           position="center bottom" className='pop-position'>
           <div className='quickview-popup'>
           <div className='popup-card cards'>
            <Card border="light">
              {/* <Card.Img className='card-images' variant="top" src={foodimage3} alt="" /> */}
              <Card.Body>
                <Card.Title style={{textAlign:"center"}}>MENU</Card.Title>
                <hr/>
                <Row>
        
                <Col xs={4} md={4}>
                  <h6><b>Hotel Buhari</b></h6>
                  <p>Tambaram</p>
                  <hr/>
                  <p>Combos</p>
                  <p>Veg Soups</p>
                  <p>Non Veg Soups</p>
                  <p>Mutton Biryani</p>
                  <p>Chicken Biryani</p>
                  <p>Bucket Biryani</p>
                  </Col>
                  <Col xs={8} md={8}>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg1} alt="" />
                      <p className='pop-align'>Chicken Pepper</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg2} alt="" />
                      <p className='pop-align'>Mutton Masala</p>
                      </Col>
                      

                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg3} alt="" />
                      <p className='pop-align'>Chicken Chukka</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg4} alt="" />
                      <p className='pop-align'>Mutton Chukka</p>
                      </Col>
                     

                    </Row>
                    <Row>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg5} alt="" />
                      <p className='pop-align'>Kadai Chicken</p>
                      </Col>
                      <Col xs={6} md={6}>
                      <Card.Img className='popup-img' variant="top" src={popimg6} alt="" />
                      <p className='pop-align'>Butter Chicken Masala</p>
                      </Col>
                      
                    </Row>
                  
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
           </div>
          </Popup>
            </Card>
          </div>
        </Col>
      </Row>
   
 
    </Container>
  );
}

export default App;
