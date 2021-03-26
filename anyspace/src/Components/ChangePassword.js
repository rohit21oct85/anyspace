import React from "react";
import AdminLayout from "../HOC/AdminLayout"
import { Navbar } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../Store/actions/index";
import Loader from "./Loader";
import { useEffect } from "react";
const ChangePassword = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();
    let passowrdChaneHandler = useSelector(state => state.password);
    useEffect(()=>{
        dispatch(actionCreators.clearPasswordChangeState())
    },[dispatch])
    const changePassword = (formData) => {
        dispatch(actionCreators.changePassword(formData));
    }

    return (

        <React.Fragment>



                <Navbar bg="primary" expand="lg" variant="dark" >
                    <Navbar.Brand>Change Password</Navbar.Brand>

                </Navbar>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-12 col-sm-6">
                            <form className="change-password-page" onSubmit={handleSubmit(changePassword)}>
                                <div className="form-group">

                                    <label htmlFor="currentPassword">Current Password</label>
                                    <input type="password"
                                        placeholder="Current Password"
                                        className={`form-control ${errors.currentPassword ? "is-invalid " : " "}`}
                                        id="currentPassword"
                                        name="currentPassword"
                                        ref={register({
                                            required: "This field is required"

                                        })} />
                                    {errors.currentPassword && errors.currentPassword.message}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="newPassword">New Password</label>
                                    <input type="password"
                                        placeholder="New Password"
                                        className={`form-control ${errors.newPassword ? "is-invalid " : " "}`}
                                        id="newPassword"
                                        name="newPassword"
                                        ref={register({
                                            required: "This field is required"

                                        })} />
                                    {errors.newPassword && errors.newPassword.message}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password"
                                        placeholder="Confirm Password"
                                        className={`form-control ${errors.confirmPassword ? "is-invalid " : " "}`}
                                        id="confirmPassword"
                                        name="confirmPassword"
                                        ref={register({
                                            required: true,
                                            validate: value => value === document.querySelector("#newPassword").value

                                        })} />
                                    {errors.confirmPassword &&
                                        errors.confirmPassword.type === "required" && <span>This field is required</span>}
                                    {errors.confirmPassword &&
                                        errors.confirmPassword.type === "validate" && <span>Password should match</span>}
                                </div>

                                {passowrdChaneHandler.passwordChanged === false && <p className="alert alert-danger">{passowrdChaneHandler.data && passowrdChaneHandler.data.response.data.message}</p>}
                                {passowrdChaneHandler.passwordChanged && <p className="alert alert-success">{passowrdChaneHandler.data.message}</p>}


                                {!passowrdChaneHandler.loading &&
                                <button type="submit" className="btn btn-primary">Submit</button>
                                }
                                {passowrdChaneHandler.loading &&
                                <Loader/>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>


    )
}
export default AdminLayout(ChangePassword)