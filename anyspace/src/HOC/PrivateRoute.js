import React from 'react';
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {


   const auth =  useSelector(state => state.login.isAuthenticated) || localStorage.getItem("token");

    return (
        <Route {...rest} render={props => (

            auth ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />



        )} />)
}



export default PrivateRoute;