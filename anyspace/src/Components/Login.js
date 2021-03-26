import React from "react";
import AdminLayout from "../HOC/AdminLayout";
import { NavLink, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../Store/actions/index";
import { FaSpinner } from "react-icons/fa";
import { useForm } from 'react-hook-form';

const Login = () => {

    const { register, handleSubmit, errors } = useForm()

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.login.isAuthenticated);
    const errorStatus = useSelector(state => state.login.errorCode);
    const state1 = useSelector(state => state.login);
    const isLoading = useSelector(state => state.login.loading);


    const loginSubmit = (data) => {

        dispatch(actionCreators.login(data))
    }

    return (
        <React.Fragment>
            {isAuthenticated && <Redirect to="/dashboard" />}

            <div className="login-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <h1>Login to our Portal</h1>

                            <form onSubmit={handleSubmit(loginSubmit)} className="login-form">
                                <div className="form-group row">
                                    <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                    <div className="col-sm-10">
                                        <input type="email"
                                            className={`form-control ${errors.email ? "is-invalid " : " "}`}
                                            id="staticEmail" name="email"

                                            ref={register({
                                                required: true,
                                                pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

                                            })}
                                        />
                                        {errors.email &&
                                            errors.email.type === "required" && <span>This field is required</span>}
                                        {errors.email &&
                                            errors.email.type === "pattern" && <span>Please enter a valid email</span>}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
                                    <div className="col-sm-10">
                                        <input type="password"
                                            className={`form-control ${errors.password ? "is-invalid " : " "}`}
                                            id="password"
                                            name="password"

                                            ref={register({
                                                required: "This field is required"

                                            })} />


                                        {errors.password && errors.password.message}
                                    </div>
                                </div>




                                {errorStatus === 400 && <div className="alert alert-danger" role="alert">User name or password are invalid</div>}

                                {errorStatus && errorStatus !== 403 && errorStatus !== 400 && <div className="alert alert-danger" role="alert">User email and password do not match</div>}
                                {errorStatus && errorStatus === 403 && <div className="alert alert-danger" role="alert">Your Account has been disabled by admin, Kindly contact support for more information</div>}
                                {!isLoading
                                    && <div className="row"><div className="col-sm-10 offset-sm-2"><button type="submit" className="btn btn-primary btn-lg">Submit</button></div></div>
                                }

                                {isLoading && <FaSpinner className="spinner" />}
                            </form>

                            <hr />
                            <div className="no-account">
                                Don't have an account? <NavLink to="/register" className="btn btn-primary">Request an Account</NavLink><br /><br />

                                <NavLink to="/forget-password">Forgot Password?</NavLink>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}
export default AdminLayout(Login)