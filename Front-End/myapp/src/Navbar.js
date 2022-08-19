// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { BiMap,BiSearch,BiUserCircle,BiCartAlt,BiCaretDown } from "react-icons/bi";
import companyLogo from './assets/logo/Logo1.jpeg'

function NavScrollExample() {
  return (
    <Navbar bg="" expand="lg">
      <Container>
        <Navbar.Brand href="#"><BiMap/>Location<BiCaretDown/></Navbar.Brand>
        <div className='logo-center'>
        <img src={companyLogo} alt="Food delivery logo"/>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>

            {/* <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2"><BiMap/>Link</Nav.Link> */}
            {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
            {/* <Nav.Link href="#" disabled>
              Link
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
          <Navbar.Brand href="#"><BiSearch size={18} color="#d10000"/>SEARCH</Navbar.Brand>
          <Navbar.Brand href="#"><BiUserCircle size={18} color="#d10000"/>LOGIN</Navbar.Brand>
          <Navbar.Brand href="#"><BiCartAlt size={18} color="#d10000"/>CART</Navbar.Brand>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;