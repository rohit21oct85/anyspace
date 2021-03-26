import React, { useEffect,useState } from "react";
import {Button, Navbar,Nav,NavDropdown  } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { elements } from "../cons";
import './Header.css';

const Header = () => {
    const location = useLocation();
    const dispatch = useDispatch()
    const auth = useSelector(state => state.login.isAuthenticated);
   
    
    useEffect(() => {
        if (location.hash && document.querySelector(location.hash)) {
            window.scrollTo({ top: document.querySelector(location.hash).offsetTop, behavior: 'smooth' })
        }
    },[])
    const [services, setServices] = useState();
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getServiceList`, '').then(res => {
                setServices(res.data)
            })
    },[]);
    
    const [industry, setIndustry] = useState();
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getIndustryList`, '').then(res => {
          setIndustry(res.data)
        })
    },[]);

    
    const [warehouseLocation, setWarehouseLocation] = useState();
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getAllLocation`, '').then(res => {
            setWarehouseLocation(res.data)
        })
    },[]);

    const style = {
        position: 'absolute !important'
    }
    
    const [show, setShow ] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
        setShowServ(false);
    }
    
    
    const [showServ, setShowServ ] = useState(false);
    const showDropdownServ = (e)=>{
        setShowServ(!showServ);
    }
    const hideDropdownServ = e => {
        setShowServ(false);
    }


    const [showInd, setShowInd ] = useState(false);
    const showDropdownInd = (e)=>{
        setShowInd(!showInd);
    }
    const hideDropdownInd = e => {
        setShowInd(false);
    }


    const [showLoc, setShowLoc ] = useState(false);
    const showDropdownLoc = (e)=>{
        setShowLoc(!showLoc);
    }
    const hideDropdownLoc = e => {
        setShowLoc(false);
    }
    

    return (
        <React.Fragment>
          
          <Navbar id="fixed" style={style}  expand="lg" className="navbar navbar-expand-lg navbar-light nav-bar menu" >
            <div className="container" >
              <div  className="navbar_top">
                  <div className="top_left">
                      <ul className="mb-0 list-unstyled">
                          <li className="list-inline-item">
                              <span>Call:</span>
                              <span><a  href="tel:+91-9569774455">+91-9569774455</a></span>
                          </li>
                          <li className="list-inline-item">
                              <span>Email:</span>
                              <span>
                              <a  href="mailto:info@anyspaze.com">info@anyspaze.com</a>
                                </span>
                          </li>
                          <li className="list-inline-item">
                              <span>Mon-Sun:</span>
                              <span>9AM - 8PM</span>
                          </li>
                      </ul>
                  </div>
                  <div className="top_right">
                      <ul className="list-unstyled mb-0 social_icons" >
                          <li className="list-inline-item"><a href="https://www.facebook.com/anyspaze/" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                          <li className="list-inline-item"><a href="https://twitter.com/anyspaze" target="_blank"><i className="fab fa-twitter"></i></a></li>
                          <li className="list-inline-item"><a href="https://www.instagram.com/anyspaze/" target="_blank"><i className="fab fa-instagram"></i></a></li>
                      </ul>
                  </div>
            </div>
         
            <Navbar.Brand className="navbar-brand d-lg-none d-md-block d-block" as={Link} to="/">
                <img src="/dist/img/icons/ANYSPAZE_logo.png" alt="ANYSPAZE " className="img-fluid" style={{height: "30px"}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand className="navbar-brand d-lg-block d-none" as={Link} to="/">
                <img src="/dist/img/icons/ANYSPAZE_logo.png" alt="ANYSPAZE " className="img-fluid" style={{height: "30px"}}/>
            </Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            

                
                <Nav.Item  className="nav-item">
                    <NavLink className="nav-link " to="/about-us">About Us</NavLink>
                </Nav.Item >
                <NavDropdown title="Services"  className="nav-item navbar-nav  nav-item"
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                >
                    <NavDropdown.Item href="/services" className="dropdown-item" id="nav-dropdown">
                        Overview Services
                    </NavDropdown.Item>
                
                         {services && services.map((ser, i) => {
                        return (
                          <NavDropdown.Item as={Link} className="dropdown-item"  key={ser._id} to={`/${ser.slug}`} >
                              {ser.name}</NavDropdown.Item>
                          );
                        })}
                  
                    
                </NavDropdown>
            
                <NavDropdown title="Industries"  className="nav-item navbar-nav  nav-item "
                    show={showInd}
                    onMouseEnter={showDropdownInd} 
                    onMouseLeave={hideDropdownInd}
                >
                {industry && industry.map((ind, i) => {
                      return (
                       <NavDropdown.Item  as={Link} className="dropdown-item" key={ind._id} to={`/industry/${ind.slug}`}>{ind.name} </NavDropdown.Item>
                      );
                    })}
                </NavDropdown>
                
                <NavDropdown title="Locations"  className="nav-item navbar-nav  nav-item "
                    show={showLoc}
                    onMouseEnter={showDropdownLoc} 
                    onMouseLeave={hideDropdownLoc}
                >
                {warehouseLocation && warehouseLocation.map((warehouse, i) => {
                      return (
                       <NavDropdown.Item as={Link} className="dropdown-item" key={warehouse._id} to={`/location/${warehouse.location}`}>Warehouse In {warehouse.location} </NavDropdown.Item>
                      );
                    })}
                </NavDropdown>
                

                <Nav.Item  className="nav-item">
                    <NavLink className="nav-link " to="/blog-listing">Blogs</NavLink>
                </Nav.Item >

                <Nav.Item  className="nav-item">
                    <NavLink className="nav-link " to="/contact-us">Contact Us</NavLink>
                </Nav.Item >
                
                <Nav.Item  className="nav-item">
                      <NavLink to="/login" className="right-item">Login</NavLink>
                      <NavLink className="nav-bar-btn ml-2" to="/register">Get started</NavLink> 
                </Nav.Item >

              </Nav>
                </Navbar.Collapse>
                </div>
          </Navbar>
          
        
        </React.Fragment>
    )


}

export default Header;