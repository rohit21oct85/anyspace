import React, { useEffect, useState} from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import logo from "../images/logo.svg";
import { Link } from 'react-router-dom';
import * as actionCreator from "../Store/actions/index"
import axios from "axios";
import { elements } from "../cons";
import './HeaderHome.css';

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

    return (
        <React.Fragment>
            <header className="header">

                <Navbar id="Home" collapseOnSelect expand="xl" bg="primary" className="site" variant="dark" fixed="top">
                    <NavLink to="/" className="navbar-brand">
                        <img src={logo} alt="logo" className="logo img-fluid" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link as={Link} to="/#what-we-do" className="nav-link"  >What We Do</Nav.Link>
                            <Nav.Link as={Link} to="/about-us" className="nav-link" >Company</Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown">
                                {services && services.map((ser, i) => {
                                return (
                                <NavDropdown.Item as={Link} className="dropdown-item" key={ser._id} to={`/${ser.slug}`}>{ser.name}</NavDropdown.Item>
                                );
                                })}
                            </NavDropdown>

                            <Nav.Link as={Link}to="/find-warehouse" className="nav-link">Find Warehouse</Nav.Link>
                            <Nav.Link as={Link} to="/contact-us" className="nav-link">Contact Us</Nav.Link>
                            <Nav.Link as={Link} to="/blog-listing" className="nav-link">Blogs</Nav.Link>
                        </Nav>
                        {auth &&
                            <Nav>
                                <NavLink to="/dashboard" className="nav-link"><FaUserCircle /> My Account</NavLink>

                            </Nav>
                        }
                        {!auth &&
                            <Nav>
                                <NavLink to="/login" className="nav-link">Sign In</NavLink>
                                <NavLink to="/register" className="btn btn-danger">Get Started</NavLink>
                            </Nav>
                        }
                    </Navbar.Collapse>

                </Navbar>
            </header>



        </React.Fragment>

    )


}

export default Header;