import React from "react";
import Container from 'react-bootstrap/Container';
import { GrLocation } from 'react-icons/gr';
import { BsFillPersonFill, BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css';
import NavLink from "react-bootstrap/esm/NavLink";


const Navb = () => {
    return (
            <div>
          <div>
            <Container>
                <div className=" header">
                    <a href="#default" className="logo"><GrLocation />
                        <select name="location" id="location" className="drop">
                            <option value="Chennai - Tambaram">Chennai - Tambaram</option>
                            <option value="Chennai - Mylapore">Chennai - Mylapore</option>
                            <option value="Chennai - Ashok Nagarl">Chennai - Ashok Nagar</option>
                            <option value="Chennai - Egmore">Chennai - Egmore</option>
                        </select>

                    </a>
                    
                    <div className="header-center ">
                    <img src="assests/img/a1.jpg" className="img-fluid" alt=""/>
                    </div>
                    <div className="header-right top">
                        <a href="#"><BsSearch className="icon" /> SEARCH</a>
                        <a href="#"><BsFillPersonFill className="icon" /> LOGIN</a>
                        <a href="#"><AiOutlineShoppingCart className="icon" /> CART</a>
                    </div>
                    </div>
                    </Container>
            </div>
           
    
        </div>
        

        // <Navbar collapseOnSelect fixed="top">
        //     <Container>
        //     <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        // <Navbar.Collapse id="responsive-navbar-nav">
        //     <Nav>
        //         <NavLink to="/"><BsSearch className="icon" /> SEARCH</NavLink>
        //         <NavLink to="/"><BsSearch className="icon" /> SEARCH</NavLink>
        //         <NavLink to="/"><BsSearch className="icon" /> SEARCH</NavLink>
        //     </Nav>
        // </Navbar.Collapse>
        //         </Container> 
        // </Navbar>


      
    )
}

export default Navb;