import React from 'react'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/esm/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Headerdelivery from '../DeliveryComponents/HeaderComponent/Header';
import AdminDashboard from './AdminDashboardComponents/AdminDashboard';
import DeliverypersonData from './DeliveryPerson/DeliverypersonData';
import NeworderData from './Neworders/NeworderData';
import RestaurentData from './Restaurentlist/RestaurentData';
export default function Admin() {
  return (
    <div>
    <Headerdelivery></Headerdelivery>
            <Container fluid>
            <Tab.Container id="left-tabs-example" defaultActiveKey="dashboard">
          <Row>
            <Col sm={2}  md={2} lg={2} xl={2}>
              <div className='admin-dashboard'>
              <Nav variant="pills" className="flex-column p-4">
                <Nav.Item>
                  <Nav.Link className='admin-nav' eventKey="dashboard">Dashboard</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='admin-nav' eventKey="second">Management</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='admin-nav' eventKey="Restaurentlist">Restaurent List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='admin-nav' eventKey="Customer">Customer List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='admin-nav' eventKey="Delivery">Delivery Person</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='admin-nav' eventKey="Promotions">Promotions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='admin-nav' eventKey="history">Order History</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='admin-nav' eventKey="neworders">New Orders</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='admin-nav' eventKey="report">Financial Reports</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='admin-nav' eventKey="Ratings">Ratings</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className='admin-nav' eventKey="Settings">Settings</Nav.Link>
                </Nav.Item>
              </Nav>
              </div>
            </Col>
            <Col sm={10} md={10}>
              <div className='tab-div'>
              <Tab.Content className='p-3'>
                <Tab.Pane eventKey="Restaurentlist">
                  <h4>Customer Details</h4>
                  <div>
                   <RestaurentData></RestaurentData>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="neworders">
                  <h4>New Order Details</h4>
                  <div>
                   <NeworderData></NeworderData>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="Delivery">
                  <h4>Delivery Person Details</h4>
                  <div>
                   <DeliverypersonData></DeliverypersonData>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="dashboard">
                  <h4>Hii Aravindh</h4>
                  <div>
                   <AdminDashboard></AdminDashboard>
                  </div>
                </Tab.Pane>
              </Tab.Content>
              </div>
            </Col>
          </Row>

        </Tab.Container>

            </Container>
        </div>
  )
}
