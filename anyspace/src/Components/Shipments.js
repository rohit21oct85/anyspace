import React from "react";
import AdminLayout from "../HOC/AdminLayout"
import { Navbar } from "react-bootstrap";
const Shipments = () => {
    return (
        <React.Fragment>

            <React.Fragment>

                <Navbar bg="primary" expand="lg" variant="dark" >
                    <Navbar.Brand>Shipments</Navbar.Brand>

                </Navbar>
            </React.Fragment>

        </React.Fragment>
    )
}
export default AdminLayout(Shipments)