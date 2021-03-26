import React from "react";
import AdminLayout from "../HOC/AdminLayout"
import {Navbar} from"react-bootstrap";
const Warehosue =()=>{
    return(
        <React.Fragment>

<Navbar bg="primary" expand="lg" variant="dark" >
                <Navbar.Brand>Warehosue</Navbar.Brand>

            </Navbar>
            </React.Fragment>
    )
}
export default AdminLayout(Warehosue)