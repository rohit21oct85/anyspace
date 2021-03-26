import React, { useState } from "react";
import AdminLayout from "../HOC/AdminLayout";
import { NavLink, Redirect } from "react-router-dom"
import { FaSpinner } from "react-icons/fa"
import { useForm } from 'react-hook-form';
import CommonService from '../Common';

const Register = () => {
    const [errorMessage, seterrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [showLoader, setShowLoader] = useState(false);
    const { register, handleSubmit, errors } = useForm()

    const registerSubmit = (data) => {
        setShowLoader(true)

        CommonService.postHttp("/signup", data).then(res => {

            if (res.status === 201) {
                seterrorMessage("")
                setSuccessMessage('Your account is successfuly created, and under screening.')
            }
            setShowLoader(false)
        })
            .catch(err => {
                console.log(err)
                if (err.response && err.response.status === 422) {

                    seterrorMessage("An user with this email address already exist.")
                } else {
                    seterrorMessage("Some error occured, please try again later")
                }
                setShowLoader(false)

            })
    }

    return (
        <React.Fragment>
             {localStorage.getItem('token') && <Redirect to="/dashboard" />}
            <div className="login-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-6">
                            <h1>Sign Up</h1>
                            {!successMessage &&
                                <form className="login-form"  onSubmit={handleSubmit(registerSubmit)} >
                                    <div className="form-group row">
                                        <label htmlFor="staticuser" className="col-sm-2 col-form-label">Full Name</label>
                                        <div className="col-sm-10">
                                            <input type="text"
                                                className={`form-control ${errors.name ? "is-invalid " : " "}`}
                                                id="staticuser"
                                                name="name"
                                                ref={register({
                                                    required: "Please enter full name"

                                                })}/>
                                               {errors.name && errors.name.message}

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
                                        <div className="col-sm-10">
                                            <input type="email"
                                                 className={`form-control ${errors.email ? "is-invalid " : " "}`}
                                                id="staticEmail"
                                                name="email"
                                                ref={register({
                                                    required: "Please enter your email",
                                                    pattern: {value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                                                message:"Please enter a valid email"}

                                                })}/>
                                                {errors.email && errors.email.message}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                        <div className="col-sm-10">
                                            <input type="password"
                                                className={`form-control ${errors.password ? "is-invalid " : " "}`}
                                                id="inputPassword"
                                                name="password"
                                                ref={register({
                                                    required: "Please enter password",
                                                    minLength: {value:8,message:"Password should be minimum 6 charter long"}

                                                })}/>
                                                {errors.password && errors.password.message}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="inputConfirmPassword" className="col-sm-2 col-form-label">Confirm Password</label>
                                        <div className="col-sm-10">
                                            <input type="password"
                                                className={`form-control ${errors.confirmPassword ? "is-invalid " : " "}`}
                                                id="inputConfirmPassword"
                                                name="confirmPassword"
                                                ref={register({
                                                    required: true,
                                                    validate:value=> value === document.querySelector("#inputPassword").value

                                                })}/>
                                                                                                                                    {errors.confirmPassword &&
                                            errors.confirmPassword.type === "required" && <span>This field is required</span>}
                                             {errors.confirmPassword &&
                                            errors.confirmPassword.type === "validate" && <span>Password should match</span>}

                                        </div>
                                    </div>

                                    {errorMessage && <p className="alert alert-danger" role="alert">{errorMessage}</p>}


                                    {showLoader &&
                                        <FaSpinner className="spinner" />
                                    }
                                    {!showLoader &&
                                       <div className="row"><div className="col-sm-10 offset-sm-2"><button type="submit" className="btn btn-primary btn-lg">Submit</button></div></div>

                                    }
                                </form>

                            }

                            {successMessage && !errorMessage && <p className="alert alert-success" role="alert">{successMessage}</p>}

                            <hr />
                            <div className="no-account">
                                Have an account? <NavLink to="/login" className="btn btn-primary">Login Now</NavLink><br /><br />

                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    )
}
export default AdminLayout(Register)