import React from "react";
import { NavLink } from "react-router-dom";

const ListWarehouse =(props)=>{
    return(
        <React.Fragment>
            <div className="list-box">
    <h3>Are you a warehouse service provider in {props.location}?</h3>
            <p>List your warehouse at AnySpaze.com and start getting leads for your business</p>
            <NavLink to="/register" className="btn btn-primary btn-lg">List your Warehouse</NavLink>
            </div>
        </React.Fragment>
    )
}
export default ListWarehouse