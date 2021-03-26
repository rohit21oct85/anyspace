import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from 'react-hook-form';
import CommonService from '../Common';

const ContactForm = () => {
    const [formSubmited, setformSubmited] = useState(false);
    const [formError, setFormError]= useState()
    const { register, handleSubmit, errors } = useForm()

    const formSubmit = (formData ) => {
        CommonService.postHttp('/contactForm', formData)
            .then(function (response) {

                if (response.status === 200) {
                    setformSubmited(true);
                }
            })
            .catch(function (error) {
                console.log(error);
                setFormError("Some error occured, failed to submit form")
            });
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6">
                        <h2 className="heading">Looking for a new warehousing or distribution solution?</h2>

                        <p>
                        We are the most reliable on-demand logistics platform to source large warehouses on affordable rent or lease. Leverage our warehousing and distribution solutions to deliver your products anywhere in India at a faster rate and on time with great accuracy, reliability, and integrity.
                        </p>

                        <Link to="/register">Warehouse & Transport providers, want to join our network?<br />
                            Click here to proceed »</Link>
                    </div>
                    <div className="col-12 col-sm-6">
                        {!formSubmited &&
                            <form onSubmit={handleSubmit(formSubmit)}>
                                <div className="form-group row">
                                    <label htmlFor="fullname" className="col-12 col-form-label">Full Name</label>
                                    <div className="col-12">
                                        <input type="text"
                                            className={`form-control ${errors.fullname ? "is-invalid " : " "}`}
                                            id="fullname"
                                            name="fullname"


                                            ref={register({
                                                required: "Please enter full name"

                                            })} />
                                        {errors.fullname &&
                                            errors.fullname.message}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="staticEmail" className="col-12 col-form-label">Email</label>
                                    <div className="col-12">
                                        <input type="email"
                                            className={`form-control ${errors.email ? "is-invalid " : " "}`}
                                            id="staticEmail"
                                            name="email"
                                            ref={register({
                                                required: "Please enter your email",
                                                pattern: {
                                                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                                                    ,
                                                    message: "Please enter valid email"
                                                }
                                            })}
                                        />
                                        {errors.email &&
                                            errors.email.message}

                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label htmlFor="company" className="col-12 col-form-label">Company</label>
                                    <div className="col-12">
                                        <input type="text"
                                            className={`form-control ${errors.company ? "is-invalid " : " "}`}
                                            id="company"
                                            name="company"
                                            ref={register({
                                                required: "Please enter company name"

                                            })} />
                                        {errors.company &&
                                            errors.company.message}
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label htmlFor="mobile" className="col-12 col-form-label">Mobile</label>
                                    <div className="col-12">
                                        <input type="number"
                                            className={`form-control ${errors.mobile ? "is-invalid " : " "}`}
                                            id="mobile"
                                            name="mobile"
                                            ref={register({
                                                required: "Please enter your mobile number",
                                                minLength: {
                                                    value: 10,
                                                    message: "Mobile number should be 10 digits long"
                                                },
                                                maxLength: {
                                                    value: 10,
                                                    message: "Mobile number should not be more then 10 digits"
                                                }
                                            })} />
                                        {errors.mobile &&
                                            errors.mobile.message }
                                    </div>
                                </div>


                                <div className="form-group row">
                                    <label htmlFor="message" className="col-12 col-form-label">Message</label>
                                    <div className="col-12">
                                        <textarea
                                            className={`form-control ${errors.message ? "is-invalid " : " "}`}
                                            id="message"
                                            name="message"
                                            ref={register({
                                                required: "Please enter your message here"

                                            })} />
                                        {errors.message &&
                                            errors.message.message}
                                    </div>
                                </div>

                                <div className="row"><div className="col-12">

                                    {formError && <p className="alert alert-danger">{formError}</p>}
                                    <button type="submit" className="btn btn-primary btn-lg">Submit</button></div></div>

                            </form>

                        }
                        {formSubmited && <div>

                            <div className="alert alert-success" role="alert">
                                We have recieved your request. Our execuatives will contact you as soon as possible.
                            </div>
                        </div>}

                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactForm