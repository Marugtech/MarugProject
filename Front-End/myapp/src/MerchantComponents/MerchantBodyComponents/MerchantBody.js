import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './../MerchantBodyComponents/MerchantBody.css'
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Footer from '../../Components/FooterComponents/Footer';
export default function MerchantBody() {
    return (
        <div><hr></hr>
            <br></br>
            <Container>
                <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
                    <Row>
                        <Col sm={12} md={3} xl={3} lg={3}>
                            <div className='merchant-card'>
                                <br></br>
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link className='p-4 merchantnav' eventKey="tab1"><Badge style={{ color: '#343537', borderRadius: '50%', background: '#f4f0f1' }} bg=''>1</Badge> &nbsp; Restaurent Information</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='pt-4'>
                                        <Nav.Link className='merchantnav' eventKey="tab2"><Badge style={{ color: '#343537', borderRadius: '50%', background: '#f4f0f1' }} bg=''>2</Badge>	&nbsp;Restaurent Types & Timings</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='pt-4'>
                                        <Nav.Link className='merchantnav' eventKey="tab3"><Badge style={{ color: '#343537', borderRadius: '50%', background: '#f4f0f1' }} bg=''>3</Badge>  &nbsp;Select Packages Your Prefer</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='pt-4'>
                                        <Nav.Link className='merchantnav' eventKey="tab4"><Badge style={{ color: '#343537', borderRadius: '50%', background: '#f4f0f1' }} bg=''>4</Badge>	&nbsp;Upload Documents For Verfications	</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item className='pt-4'>
                                        <Nav.Link className='merchantnav' eventKey="tab5"><Badge style={{ color: '#343537', borderRadius: '50%', background: '#f4f0f1' }} bg=''>5</Badge>	&nbsp;Complete Process</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <div className='pt-5'></div>
                                <br></br>
                            </div>
                        </Col>
                        <Col sm={12} md={9} xl={9} lg={9}>
                            <div className='merchant-card'>
                                <Tab.Content className='p-4'>
                                    <Tab.Pane eventKey="tab1">
                                        <h3>Restaurent Information </h3>
                                        <div className='border-div'>
                                            <Form className='p-4 merchant-form'>
                                                <Form.Floating className="mb-3 form-float">
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="name"
                                                        placeholder="name@example.com"
                                                    />
                                                    <label htmlFor="floatingInputCustom">Restaurent Name</label>
                                                </Form.Floating>
                                                <Form.Floating className="mb-3">
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="name"
                                                        placeholder="name@example.com"
                                                    />
                                                    <label htmlFor="floatingInputCustom">Restaurent Owner Name</label>
                                                </Form.Floating>
                                                <Form.Floating className="mb-3">
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="name"
                                                        placeholder="name@example.com"
                                                    />
                                                    <label htmlFor="floatingInputCustom">Restaurent Phone Number</label>
                                                </Form.Floating>
                                                <Form.Floating className="mb-3">
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="name"
                                                        placeholder="name@example.com"
                                                    />
                                                    <label htmlFor="floatingInputCustom">Restaurent Owner Phone Number</label>
                                                </Form.Floating>
                                                <Form.Floating className="mb-3">
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="name"
                                                        placeholder="name@example.com"
                                                    />
                                                    <label htmlFor="floatingInputCustom">Restaurent email</label>
                                                </Form.Floating>
                                                <Form.Floating className="mb-3">
                                                    <Form.Control
                                                        id="floatingInputCustom"
                                                        type="name"
                                                        placeholder="name@example.com"
                                                    />
                                                    <label htmlFor="floatingInputCustom">Restaurent Location Address</label>
                                                </Form.Floating>
                                                <Button className='btn-merchanr-form'>Proceed</Button>
                                                <br></br>
                                            </Form>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab2">
                                        My glass shall not persuade me I am old, So long as youth and thou are of one date;
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab3">
                                        My glass shall not persuade me I am old, So long as youth and thou are of one date;
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab4">
                                        <h3>Upload Documents For Verifications</h3><br></br>
                                        <div className='border-div'>
                                            <Form className='p-4 merchant-form'>
                                                <Form.Group controlId="formFile" className="mb-4">
                                                    <Form.Label className='clr-label'>Upload License</Form.Label>
                                                    <Form.Control className='file-form' type="file" />
                                                </Form.Group>
                                                <Form.Group controlId="formFile" className="mb-4">
                                                    <Form.Label className='clr-label'>Upload FSSAI Certificate</Form.Label>
                                                    <Form.Control className='file-form' type="file" />
                                                </Form.Group>
                                                <Form.Group controlId="formFile" className="mb-4">
                                                    <Form.Label className='clr-label'>Upload PAN GST Adhar Card</Form.Label>
                                                    <Form.Control className='file-form' type="file" />
                                                </Form.Group>
                                                <Form.Group controlId="formFile" className="mb-4">
                                                    <Form.Label className='clr-label'>Upload Restaurent Kitchen Photos</Form.Label>
                                                    <Form.Control className='file-form' type="file" />
                                                </Form.Group>
                                                <Form.Group controlId="formFile" className="mb-4">
                                                    <Form.Label className='clr-label'>Upload Restaurent Location Photos</Form.Label>
                                                    <Form.Control className='file-form' type="file"></Form.Control>
                                                </Form.Group>
                                                <Form.Group controlId="formFile" className="mb-4">
                                                    <Form.Label className='clr-label'>Upload Restaurent Dinning Hall Photos</Form.Label>
                                                    <Form.Control className='file-form' type="file"></Form.Control>
                                                </Form.Group>
                                                <Button className='btn-complete'>Proceed To Next</Button>
                                            </Form>
                                            <br></br>
                                        </div>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab5">
                                        <h3>Add Bank Details</h3><br></br>
                                        <div className='border-div'>
                                            <Form className='p-4 merchant-form'>
                                                <Form.Group className='form-grp-field' controlId="formBasicEmail">
                                                    <Form.Control className='form-field' type="name" placeholder="Enter Account Holder Name" />
                                                </Form.Group>
                                                <Form.Group className='form-grp-field' controlId="formBasicEmail">
                                                    <Form.Control className='form-field' type="name" placeholder="Enter Account Number" />
                                                </Form.Group>
                                                <Form.Group className='form-grp-field' controlId="formBasicEmail">
                                                    <Form.Select className='form-field'>
                                                        <option>select Bank</option>
                                                        <option value=''>SBI</option>
                                                        <option value=''>Axis</option>
                                                        <option value=''>ICICI</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className='form-grp-field' controlId="formBasicEmail">
                                                    <Form.Select className='form-field' >
                                                        <option>select Branch</option>
                                                        <option value=''>Chennai</option>
                                                        <option value=''>Madurai</option>
                                                    </Form.Select>
                                                </Form.Group>
                                                <Form.Group className='form-grp-field' controlId="formBasicEmail">
                                                    <Form.Control className='form-field' type="name" placeholder="Enter IFSC Code" />
                                                </Form.Group>
                                                <Button className='btn-complete'>Complete Procees</Button>
                                                <br></br>
                                            </Form>
                                        </div>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
            <br></br>
            <Footer></Footer>
        </div>
    )
}
