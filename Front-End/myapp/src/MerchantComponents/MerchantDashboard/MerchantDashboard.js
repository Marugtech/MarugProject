//import { Button } from 'bootstrap';
import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row'
import Nav from 'react-bootstrap/Nav';
import './../MerchantDashboard/MerchantDashboard.css'
import { MdOutlineSpaceDashboard, MdOutlineFormatListBulleted } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { TbToolsKitchen2 } from "react-icons/tb";
import Table from 'react-bootstrap/Table';
import Tab from 'react-bootstrap/Tab';
import Form from 'react-bootstrap/Form';
export default function MerchantDashboard() {
    return (
        <div>
            <Container fluid>
                <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
                    <Row>
                        <Col xs={12} sm={12} md={2} xl={2} lg={2}>
                            <div className='dashboard-dark'>
                                <Nav variant="pills" className="flex-column p-4">
                                    <Nav.Item>
                                        <Nav.Link className=' merchantnav' eventKey="dashboard"><h6><MdOutlineSpaceDashboard></MdOutlineSpaceDashboard>&nbsp;Dashboard</h6></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className=' merchantnav' eventKey="profile"><h6><FaRegUser></FaRegUser>&nbsp;Profile</h6></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className=' merchantnav' eventKey="additems"><h6><TbToolsKitchen2></TbToolsKitchen2>&nbsp;Add Items</h6></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link className=' merchantnav' eventKey="itemlist"><h6><MdOutlineFormatListBulleted></MdOutlineFormatListBulleted>&nbsp;Item List</h6></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={10} xl={10} lg={10}>
                            <div className='dashboard-white'>
                                <div className='p-3 '>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="dashboard">
                                            <Table  responsive striped>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Item Name</th>
                                                        <th>Category</th>
                                                        <th>Date & Time</th>
                                                        <th>Status</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Chicken Biriyani</td>
                                                        <td>Non-vegetarian</td>
                                                        <td className='date-time'>20-07-22 &nbsp; 3.00pm</td>
                                                        <td className='date-time'>
                                                            <Form.Select>
                                                                <option>Delivered</option>
                                                                <option value="1">Delivered</option>
                                                                <option value="2">Pending</option>
                                                            </Form.Select>
                                                        </td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>1</td>
                                                        <td>Mutton Biriyani</td>
                                                        <td>Non-vegetarian</td>
                                                        <td>20-07-22 &nbsp; 4.30pm</td>
                                                        <td>   <Form.Select>
                                                                <option>Delivered</option>
                                                                <option value="1">Delivered</option>
                                                                <option value="2">Pending</option>
                                                            </Form.Select></td>
                                                        <td></td>
                                                    </tr>
                                                    <tr>
                                                        <td>3</td>
                                                        <td>Biriyani</td>
                                                        <td>vegetarian</td>
                                                        <td>20-07-22 &nbsp; 2.30pm</td>
                                                        <td>   <Form.Select>
                                                                <option>Delivered</option>
                                                                <option value="1">Delivered</option>
                                                                <option value="2">Pending</option>
                                                            </Form.Select></td>
                                                        <td>Edit<i class="fas fa-edit"></i></td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>
                                    </Tab.Content>
                                    <Tab.Content>
                                    <Tab.Pane eventKey="additems">
                                      <div className='add-background'>
                                        <h4>hiii</h4>
                                        <h4>hiii</h4>
                                        <h4>hiii</h4>
                                        <h4>hiii</h4>
                                        <h4>hiii</h4>

                                      </div>

                                    </Tab.Pane>
                                    </Tab.Content>
                                       
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    )
}
