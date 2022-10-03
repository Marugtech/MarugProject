import React from 'react';
import { BarChart, Bar, XAxis, YAxis,
	CartesianGrid } from 'recharts';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import './../Cardbody/Cardbody.css'
import { BsPersonCircle,BsFillStarFill } from "react-icons/bs";
import person1 from './../../../assets/images/person.jpg' ;

function Cardbody() {
  const data = [
		{ name: '08/01/17', x: 12, y: 2 },
		{ name: '09/01/17', x: 22, y: 3 },
		{ name: '10/01/17', x: 13, y: 15 },
		{ name: '11/01/17', x: 44, y: 35 },
		{ name: '12/01/17', x: 35, y: 45},
		{ name: '01/01/18', x: 62, y: 25 },
		{ name: '02/01/18', x: 37, y: 17},
		{ name: '03/01/18', x: 28, y: 32 },
		{ name: '04/01/18', x: 19, y: 43},
	];
  return (
    <Card className='cardbg'>
      <Card.Body>
        <Row>
          <Col md={2} lg={2}>
          <h5>Customer Details </h5>
            <hr />
          </Col>
          <Col md={8} lg={8}></Col>
          <Col md={2} lg={2}><Dropdown>
            <Dropdown.Toggle style={{ backgroundColor: "white", color: "black", borderColor: "black", boxShadow: "none" }}>
              Hotel Buhari
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">
                Home Page
              </Dropdown.Item>
              <Dropdown.Item href="#">
                Settings
              </Dropdown.Item>
              <Dropdown.Item href="#">
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown></Col>
        </Row>
        <br></br>
        <Card className='p-4'>
          <Card.Body>
            <h4>
              Buhari Restaurant Rating and Reviews
            </h4>

            <Card  style={{border:'none'}}>
              <Row className='p-1'>
                <Col md={4} lg={4} className='p-4'>
                <Card className='cardbg'>
                  <Row className='p-4'>
                    <Col md={6} lg={6} >
                    <h1 className='card1 center' >4.7</h1>
                    <BsFillStarFill className='star-color' /><BsFillStarFill className='star-color' /><BsFillStarFill className='star-color' /><BsFillStarFill className='star-color' /><BsFillStarFill className='star-color' />
                    <h5 className='card1'>2528 reviews</h5>
                    </Col>
                    <Col md={6} lg={6}>
                    5 <BsFillStarFill style={{color:'orange'}}/>1933 <br/>
                    4 <BsFillStarFill style={{color:'orange'}}/> 438 <br/>
                    3 <BsFillStarFill style={{color:'orange'}}/> 99<br/>
                    2 <BsFillStarFill  style={{color:'orange'}}/> 31<br/>
                    1 <BsFillStarFill style={{color:'orange'}}/> 27
                    </Col>
                    
                  </Row>
                  </Card>
                </Col>
                <Col sm={12} md={8} lg={8} className='p-4'>
               <div >
               <BarChart width={400} height={200} className='size' data={data} >
			<CartesianGrid />
			<XAxis dataKey="name" />
			<YAxis />
			<Bar dataKey="x" stackId="a" fill="#8884d8" />
			<Bar dataKey="y" stackId="a" fill="#82ca9d" />
		</BarChart>
               </div>
                </Col>
              </Row>
            </Card>

            <br/><br/><br/>
            <Row>
              <Col md={3} lg={3}>
                <h4>Top Rating Reviews</h4>
                <Card className='cardbg p-3' style={{border:'none'}}>

                  <Card className='p-3 mb-2' style={{border:'none'}}>
                    <p style={{ color: 'lightblue', textAlign: "right" }}>Read Reviews</p>
                    <Row>
                      <Col md={3} lg={3}><BsPersonCircle className='person-icon'/></Col>
                      <Col><h6>Jhon Golden</h6>
                      <BsFillStarFill className='star-icon'/><BsFillStarFill className='star-icon'/><BsFillStarFill className='star-icon'/><BsFillStarFill className='star-icon'/><BsFillStarFill className='star-icon'/>
                      </Col>
                     
                    </Row>
                  </Card>
                  
                  <Card className='p-3 mb-2' style={{border:'none'}}>
                    <p style={{ color: 'lightblue', textAlign: "right" }}>Read Reviews</p>
                    <Row>
                      <Col md={3} lg={3}><BsPersonCircle className='person-icon' /></Col>
                      <Col><h6>Jhon Golden</h6>
                      <BsFillStarFill className='star-icon'/><BsFillStarFill className='star-icon'/><BsFillStarFill className='star-icon'/><BsFillStarFill className='star-icon'/><BsFillStarFill className='star-icon'/>
                      </Col>
                    </Row>
                  </Card>
                 
                  <Card className='p-3 ' style={{border:'none'}}>
                    <p  style={{ color: 'lightblue', textAlign: "right" }}>Read Reviews</p>
                    <Row>
                      <Col md={3} lg={3}><BsPersonCircle className='person-icon'/></Col>
                      <Col><h6>Jhon Golden</h6>
                      <BsFillStarFill className='star-icon'/><BsFillStarFill className='star-icon'/><BsFillStarFill className='star-icon'/><BsFillStarFill className='star-icon'/><BsFillStarFill className='star-icon'/>
                      </Col>
                    </Row>
                  </Card>
                </Card>


              </Col>
              <Col>
              <h4>Recent Feedback</h4>
                <Card className='cardbg p-3' style={{border:'none'}}>
                  <Card style={{border:'none'}} className='mb-2'>
                    <Row>
                      <Col md={1} lg={1} className='p-3 pt-2'>
                        <img src={person1} className='p-2 person-img' alt='' />
                      </Col>
                      <Col md={3} lg={3} className='p-4 pt-2 '><span style={{color:'orange'}}>#F33565</span>
                      <h6 className='h6'>Alexander Roshan</h6>
                      <p className='p1'>13/6/2007 13.04.24</p>
                      </Col>
                      <Col md={4} lg={4} className='p-3'><p className='p1 mt-3'>Modern Teaching Methods and Value-based Education for Your Child’s All-round Development.  </p></Col>
                      <Col md={2} lg={2} className='p-2'>
                        <h2 className='center'>2.5</h2>
                        <div className='center'>
                        <BsFillStarFill className='star-icon1'/><BsFillStarFill className='star-icon1'/><BsFillStarFill className='star-icon1'/><BsFillStarFill className='star-icon1'/><BsFillStarFill className='star-icon1'/>
                        </div>
                      </Col>
                      <Col md={2} lg={2} className='p-3 pt-5'>
                        <p ><span style={{color:'red'}}> Delete </span><span  style={{color:'green'}}> Publish </span></p> 
                         
                      </Col>
                    </Row>
                  </Card>
                
                  <Card style={{border:'none'}} className='mb-2' >
                    <Row>
                      <Col md={1} lg={1} className='p-3 pt-2'>
                        <img src={person1}  className='p-2 person-img' alt="" />
                      </Col>
                      <Col md={3} lg={3} className='p-4 pt-2 '><span style={{color:'orange'}}>#F33565</span>
                      <h6 className='h6'>Alexander Roshan</h6>
                      <p className='p1'>13/6/2007 13.04.24</p>
                      </Col>
                      <Col md={4} lg={4} className='p-3'><p className='p1 mt-3'>Modern Teaching Methods and Value-based Education for Your Child’s All-round Development.  </p></Col>
                      <Col md={2} lg={2} className='p-2'>
                        <h2 className='center'>2.5</h2>
                        <div className='center'>
                        <BsFillStarFill className='star-icon1'/><BsFillStarFill className='star-icon1'/><BsFillStarFill className='star-icon1'/><BsFillStarFill className='star-icon1'/><BsFillStarFill className='star-icon1'/>
                        </div>
                      </Col>
                      <Col md={2} lg={2} className='p-3 pt-5'>
                        <p ><span style={{color:'red'}}> Delete </span><span  style={{color:'green'}}> Publish </span></p> 
                         
                      </Col>
                    </Row>
                  </Card>
                 
                  <Card style={{border:'none'}} className='mb-2' >
                    <Row>
                      <Col md={1} lg={1} className='p-3 pt-2'>
                        <img src={person1}  className='p-2 person-img' alt='' />
                      </Col>
                      <Col md={3} lg={3} className='p-4 pt-2 '><span style={{color:'orange'}}>#F33565</span>
                      <h6 className='h6'>Alexander Roshan</h6>
                      <p className='p1'>13/6/2007 13.04.24</p>
                      </Col>
                      <Col md={4} lg={4} className='p-3'><p className='p1 mt-3'>Modern Teaching Methods and Value-based Education for Your Child’s All-round Development.  </p></Col>
                      <Col md={2} lg={2} className='p-2'>
                        <h2 className='center'>2.5</h2>
                        <div className='center'>
                        <BsFillStarFill className='star-icon1'/><BsFillStarFill className='star-icon1'/><BsFillStarFill className='star-icon1'/><BsFillStarFill className='star-icon1'/><BsFillStarFill className='star-icon1'/>
                        </div>
                       
                      </Col>
                      <Col md={2} lg={2} className='p-3 pt-5'>
                        <p ><span style={{color:'red'}}> Delete </span><span  style={{color:'green'}}> Publish </span></p> 
                         
                      </Col>
                    </Row>
                  </Card>


                </Card>
              </Col>
            </Row>


          </Card.Body>
        </Card>
      </Card.Body>
    </Card>
  );
}

export default Cardbody;