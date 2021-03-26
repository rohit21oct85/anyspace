import React, { useState } from "react";
import { useForm } from 'react-hook-form';
import CommonService from '../Common';

const ContactWarehouse = (props) => {
    let [enquirySucMsg, setenquirySucMsg] = useState(false);
    let [enquiryFailMsg, setEnquiryFailMsg] = useState(false);

    const { register, handleSubmit, errors } = useForm();
    const sendEnquiryMail = (data) => {

        data.warehouseId = props.warehouseId

        CommonService.postHttp("/lead", data)
            .then(
                res => {
                    setenquirySucMsg("Your enquiry has been submitted sussusfully. Our representatives will contact you soon")
                    setEnquiryFailMsg(false);

                }
            )
            .catch(err => {
                setenquirySucMsg(false)
                setEnquiryFailMsg("Some error occured, please retry after some time or contact us at support@anyspaze.com")
            })
    }

    return (
        <React.Fragment>
            {!enquirySucMsg &&
                <form onSubmit={handleSubmit(sendEnquiryMail)}
                    className="enquiryModal">
                    {props.title && <div className="heading">Contact This Warehouse</div>}
                    <div className="form-group">

                        <input type="text"
                            className={`form-control ${errors.name ? "is-invalid " : " "}`}
                            id="name"
                            placeholder="Full Name"
                            name="name"
                            ref={register({
                                required: "this field is required",
                                minLength:  {
                                    value: 2,
                                    message: "Should be minimum 2 charater long"
                                }
                            })} />
                        {errors.name && errors.name.message}

                    </div>
                    <div className="form-group">

                        <input type="text"
                            className={`form-control ${errors.email ? "is-invalid " : " "}`}
                            id="email"
                            placeholder="Email address"
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

                        {errors.email && errors.email.message}
                    </div>
                    <div className=" mb-3">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <div className="input-group-text">+91</div>
                            </div>
                            <input type="number"
                                className={`form-control ${errors.mobile ? "is-invalid " : " "}`}
                                id="mobile"
                                placeholder="Mobile"
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

                        </div>
                        <div>
                            {errors.mobile && errors.mobile.message}
                        </div>
                    </div>
                    <div className="form-group">

                        <textarea
                            className={`form-control ${errors.message ? "is-invalid " : " "}`}
                            placeholder="Please enter your requirement"
                            id="message"
                            name="message"
                            ref={register({ required: "Please describe your requirement" })}
                        ></textarea>
                        {errors.message && errors.message.message}

                    </div>

                    {enquiryFailMsg && <p className="alert alert-danger">{enquiryFailMsg}</p>}

                    <button type="submit" className="btn btn-danger btn-lg">Submit</button>
                </form>
            }

            {enquirySucMsg && <p className="alert alert-success">{enquirySucMsg}</p>}
        </React.Fragment>
    )
}

export default ContactWarehouse;