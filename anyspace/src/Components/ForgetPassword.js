import React, { useState } from "react";
import AdminLayout from "../HOC/AdminLayout";
import { NavLink, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form';
import CommonService from "../Common";
import Loader from "./Loader"

const ForgetPassword = () => {
    const { resetPWToken, userId } = useParams()
    const { register, handleSubmit, errors } = useForm();
    const [Succmsg, setSuccmsg] = useState();
    const [Errmsg, setErrmsg] = useState();
    const [isLoading, setIsLoading] = useState(false);



    const forgetPwSubmit = (formData) => {
        setIsLoading(true)
        CommonService.postHttp("/forgetPw", formData)
            .then(res => {
                setErrmsg("")
                setSuccmsg("An email with instruction to reset password has been sent");
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err);
                if (err && err.response && err.response.status === 400) {
                    setErrmsg("We did not found any user associated to this email")
                } else {
                    setErrmsg("Some error occured")
                }
                setIsLoading(false)
            })
    }
    const submitrestpw = (restFormData) => {
        setIsLoading(true)
        CommonService.postHttp("/resetPw", restFormData)
            .then(res => {
                setErrmsg("");
                setSuccmsg("Password has been updated successfully");
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err);

                setErrmsg("Failed to reset password or link has been expired");
                setSuccmsg("");
                setIsLoading(false);
            })

    }

    return (
        <React.Fragment>
            <div className="login-page">
                <div className="container">

                    <div className="row justify-content-center">
                        {resetPWToken && <div className="col-12 col-sm-6">
                            <h1>Recover your password</h1>

                            <form onSubmit={handleSubmit(submitrestpw)} className="login-form">
                                <div className="form-group row">
                                    <label htmlFor="newPassword" className="col-sm-4 col-form-label ">New password</label>
                                    <div className="col-sm-8">
                                        <input type="hidden" name="resetPWToken" value={resetPWToken} ref={register()} />
                                        <input type="hidden" name="userId" value={userId} ref={register()} />


                                        <input type="password"
                                            placeholder="New password"
                                            className={`form-control ${errors.newPassword ? "is-invalid " : " "}`}
                                            id="newPassword"
                                            name="newPassword"
                                            ref={register({
                                                required: "This field is required"

                                            })} />
                                        {errors.newPassword && errors.newPassword.message}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="confirmpw" className="col-sm-4 col-form-label ">Confirm password</label>
                                    <div className="col-sm-8">

                                        <input type="password"
                                            placeholder="Confirm password"
                                            className={`form-control ${errors.confirmpw ? "is-invalid " : " "}`}
                                            id="confirmpw"
                                            name="confirmpw"
                                            ref={register({
                                                required: "This field is required"

                                            })} />
                                        {errors.confirmpw && errors.confirmpw.message}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    {Succmsg && <p className="alert alert-success">{Succmsg}</p>}
                                    {Errmsg && <p className="alert alert-danger">{Errmsg}</p>}
                                    <div className="col-sm-4"></div>
                                    <div className="col-sm-8">
                                        {isLoading ? <Loader /> :
                                            <button type="submit" className="btn btn-primary btn-lg">Reset password</button>
                                        }

                                    </div>
                                </div>
                            </form>

                        </div>}
                        {!resetPWToken &&
                            <div className="col-12 col-sm-6">
                                <h1>Forgot your password?</h1>
                                <form onSubmit={handleSubmit(forgetPwSubmit)} className="login-form">
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label ">Email</label>
                                        <div className="col-sm-10">
                                            <input type="text"
                                                placeholder="Email"
                                                className={`form-control ${errors.email ? "is-invalid " : " "}`}
                                                id="email"
                                                name="email"
                                                ref={register({
                                                    required: "This field is required",
                                                    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

                                                })} />
                                            {errors.email &&
                                                errors.email.type === "required" && <span>This field is required</span>}
                                            {errors.email &&
                                                errors.email.type === "pattern" && <span>Please enter a valid email</span>}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-12">
                                            {Succmsg && <p className="alert alert-success">{Succmsg}</p>}
                                            {Errmsg && <p className="alert alert-danger">{Errmsg}</p>}
                                        </div>
                                        <div className="col-sm-2"></div>
                                        <div className="col-sm-10">
                                            {isLoading ? <Loader /> :
                                                <button type="submit" className="btn btn-primary btn-lg">Send me password</button>
                                            }
                                        </div>
                                    </div>
                                </form>



                            </div>
                        }
                    </div>
                    <div className="row justify-content-center">

                        <div className="col-12 col-sm-6">
                            <hr />
                            <div className="no-account">
                                <div className="text-center">
                                    <NavLink to="/login" className="btn btn-danger">Login to manage warehouses</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment >
    )
}
export default AdminLayout(ForgetPassword)