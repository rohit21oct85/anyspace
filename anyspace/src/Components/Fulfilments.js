import React from "react";
import AdminLayout from "../HOC/AdminLayout"
import {Navbar} from"react-bootstrap";

const Fulfilments =()=>{
    return(
        <React.Fragment>

<Navbar bg="primary" expand="lg" variant="dark" >
                <Navbar.Brand>Fulfilments</Navbar.Brand>

            </Navbar>


        </React.Fragment>
    )
}
export default AdminLayout(Fulfilments)