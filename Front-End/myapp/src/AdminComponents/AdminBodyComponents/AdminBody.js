import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Col from 'react-bootstrap/Col';
import './../../AdminComponents/AdminBodyComponents/AdminBody.css';
import CustomerLists from './CustomerListsComponents/CustomerLists';
import AdminFooter from '../AdminFooterComponents/AdminFooter';

function AdminBody() {
    
    return (
        <Container fluid>
            <Tab.Container id="left-tabs-example" defaultActiveKey="tab1">
                <Row>
                    <Col md={2} lg={2}>
                        <div className='admin-card'>
                            <br></br>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item className='pt-1'>
                                    <Nav.Link className=' adminnav' eventKey="tab1"> Dashboard</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='pt-1'>
                                    <Nav.Link className=' adminnav' eventKey="tab2">Managment</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='pt-1'>
                                    <Nav.Link className=' adminnav' eventKey="tab3">Restaurant Lists</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='pt-1'>
                                    <Nav.Link className=' adminnav' eventKey="tab4">Customer List	</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='pt-1'>
                                    <Nav.Link className=' adminnav' eventKey="tab5">Delivery Persons</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='pt-1'>
                                    <Nav.Link className=' adminnav' eventKey="tab6">Promotions</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='pt-1'>
                                    <Nav.Link className=' adminnav' eventKey="tab7">Order History</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='pt-1'>
                                    <Nav.Link className=' adminnav' eventKey="tab8">New Orders</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='pt-1'>
                                    <Nav.Link className=' adminnav' eventKey="tab9">Financial Reports</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='pt-1'>
                                    <Nav.Link className=' adminnav' eventKey="tab10">Rating</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='pt-1'>
                                    <Nav.Link className=' adminnav' eventKey="tab11">Settings</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </div>
                    </Col>
                    <Col sm={12} md={9} xl={9} lg={9}>
                        <div className='admin-card1 p-4'>
                            <Tab.Content >
                                <Tab.Pane eventKey="tab1">
                                    <CustomerLists ></CustomerLists>
                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className='p-4'>
                                <Tab.Pane eventKey="tab2">

                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className='p-4'>
                                <Tab.Pane eventKey="tab3">

                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className='p-4'>
                                <Tab.Pane eventKey="tab4">

                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className='p-4'>
                                <Tab.Pane eventKey="tab5">

                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className='p-4'>
                                <Tab.Pane eventKey="tab5">

                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className='p-4'>
                                <Tab.Pane eventKey="tab6">

                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className='p-4'>
                                <Tab.Pane eventKey="tab7">

                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className='p-4'>
                                <Tab.Pane eventKey="tab8">

                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className='p-4'>
                                <Tab.Pane eventKey="tab9">

                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className='p-4'>
                                <Tab.Pane eventKey="tab10">

                                </Tab.Pane>
                            </Tab.Content>
                            <Tab.Content className='p-4'>
                                <Tab.Pane eventKey="tab11">

                                </Tab.Pane>
                            </Tab.Content>
                        </div>
                        <AdminFooter></AdminFooter>
                    </Col>
                   
                </Row>
            </Tab.Container>
           
        </Container>

    );
}

export default AdminBody;