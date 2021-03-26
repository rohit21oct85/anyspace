import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../Store/actions/index";
import logo from "../images/logo.svg"
const AdminSidebar = () => {
    const auth = useSelector(state => state.login);
    const dispatch = useDispatch();

    let navItems = <div>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <div className="havhead" >WAREHOUSE</div>
        <NavLink to="/warehose-setup">Add Warehouse</NavLink>
        <NavLink to="/manage-warehouse">Manage Warehouse(s)</NavLink>
        {/* <div className="havhead">Reporting</div>
        <NavLink to="/inventory">Inventory On Hand</NavLink>
        <NavLink to="/shipments">Shipments</NavLink> */}
    </div>


    return (
        <React.Fragment>
            <Navbar fixed="top" className="d-block d-lg-none mobile-nav" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <NavLink className="navbar-brand" to="/"><img src={logo} className="logo img-fluid" alt="logo" /></NavLink>
                {auth.isAuthenticated &&
                    <React.Fragment>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                        <Navbar.Collapse id="responsive-navbar-nav">

                            {navItems}
                            <NavLink to="/change-password">Change Password</NavLink>
                            <NavLink to="/billing">Business Profile</NavLink>

                            <button className="btn btn-danger mt-1" onClick={() => dispatch(actionCreators.logout())}>Logout</button>
                        </Navbar.Collapse>
                    </React.Fragment>
                }
            </Navbar>

            <div className="admin-sidebar d-none d-lg-block  ">
                <NavLink to="/">
                    <img src={logo} className="logo img-fluid" alt="logo" />
                </NavLink>
                {auth.isAuthenticated &&
                    <div className="nav-m">
                        <div className="User-Menu">
                            <Dropdown alignRight className="user-head">
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                                    {localStorage.getItem('userName')}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <NavLink className="dropdown-item" to="/change-password">Change Password</NavLink>

                                    <NavLink className="dropdown-item" to="/billing">Business Profile</NavLink>


                                    <button className="btn btn-danger mt-2" onClick={() => dispatch(actionCreators.logout())}>Logout</button>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <nav className="admin-nav">
                            {navItems}
                        </nav>
                    </div>

                }

            </div>

        </React.Fragment>
    )
}

export default AdminSidebar;