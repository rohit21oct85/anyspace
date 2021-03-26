import React, { useState, useEffect } from "react";
import AdminLayout from "../HOC/AdminLayout"
import { Navbar } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import CommonService from "../Common";
import { elements } from "../cons"

const Billing = () => {
    const { register, handleSubmit, errors, setValue } = useForm();
    const [Err, setErr] = useState();
    const [Succmsg, setSuccmsg] = useState();
    const [defaultData, setDefaultData]= useState({})


    useEffect(() => {
        CommonService.getHttp("/billinginfo").then(res => {

            setDefaultData(res.data);
            setValue("state",res.data.billingAddress.state)

        })
            .catch(err => {
                if (err.response && err.response.status === 401) {
                    CommonService.invalidSession()
                }
            })
    },[setValue])


    const updateBillingInfo = (formData) => {
        CommonService.postHttp("/billinginfo", formData)
            .then(res => {

                setSuccmsg("Billing Info updated successfully");
                setErr("")
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 401) {
                    CommonService.invalidSession()
                }
                if (err.status === 422) {
                    setErr("Invalid credential")
                } else {
                    setErr("Some err occured")
                }
            })


    }
    return (
        <React.Fragment>

            <React.Fragment>

                <Navbar bg="primary" expand="lg" variant="dark" >
                    <Navbar.Brand>Billing Information</Navbar.Brand>

                </Navbar>

                <div className="container-fluid add-warehouse-page">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <form onSubmit={handleSubmit(updateBillingInfo)}>
                                <div className="step">
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <h2>Company Information</h2>
                                        </div>

                                        <label htmlFor="companyName" className="col-12 col-md-3 col-form-label">Company Name</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                placeholder="Company Name"
                                                className={`form-control ${errors.companyName ? "is-invalid " : " "}`}
                                                id="companyName"
                                                name="companyName"
                                                defaultValue={defaultData.companyName}
                                                ref={register({
                                                    required: "This field is required"

                                                })} />
                                            {errors.companyName && errors.companyName.message}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="name" className="col-12 col-md-3 col-form-label">Contact Person</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                placeholder="Contact Person"
                                                className={`form-control ${errors.name ? "is-invalid " : " "}`}
                                                id="name"
                                                name="name"
                                                defaultValue={defaultData.name}
                                                ref={register({
                                                    required: "This field is required"

                                                })} />
                                            {errors.name && errors.name.message}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="email" className="col-12 col-md-3 col-form-label">Email</label>
                                        <div className="col-12 col-md-6">
                                            <input type="email"
                                                placeholder="Email"
                                                className={`form-control ${errors.email ? "is-invalid " : " "}`}
                                                id="email"
                                                name="email"
                                                defaultValue={defaultData.email}
                                                ref={register({
                                                    required: true,
                                                    pattern: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

                                                })} />
                                            {errors.email &&
                                                errors.email.type === "required" && <span>This field is required</span>}
                                            {errors.email &&
                                                errors.email.type === "pattern" && <span>Please enter a valid email</span>}

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="mobile" className="col-12 col-md-3 col-form-label">Mobile</label>
                                        <div className="col-12 col-md-6">
                                            <input type="number"
                                                placeholder="Mobile"
                                                className={`form-control ${errors.mobile ? "is-invalid " : " "}`}
                                                id="mobile"
                                                name="mobile"
                                                defaultValue={defaultData.mobile}
                                                ref={register({
                                                    required: "Please enter mobile number",
                                                    minLength: {
                                                        value: 10,
                                                        message: "Please enter a valid 10 digit mobile number"
                                                    },
                                                    maxLength: {
                                                        value: 10,
                                                        message: "Please enter a valid 10 digit mobile number"
                                                    }

                                                })} />
                                            {errors.mobile && errors.mobile.message}

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="gst" className="col-12 col-md-3 col-form-label">GST</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                placeholder="gst"
                                                className={`form-control ${errors.gst ? "is-invalid " : " "}`}
                                                id="gst"
                                                name="gst"
                                                defaultValue={defaultData.gst}
                                                ref={register} />
                                            {errors.gst && errors.gst.message}

                                        </div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <h2>Billing Address</h2>
                                        </div>
                                        <label htmlFor="addressline1" className="col-12 col-md-3 col-form-label">Address Line 1</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                placeholder="Address Line 1"
                                                className={`form-control ${errors.addressline1 ? "is-invalid " : " "}`}
                                                id="addressline1"
                                                name="addressline1"
                                                defaultValue={defaultData.billingAddress?defaultData.billingAddress.addressline1:""}
                                                ref={register({
                                                    required: true

                                                })} />
                                            {errors.addressline1 && errors.addressline1.message}

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="addressline2" className="col-12 col-md-3 col-form-label">Address Line 2</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                placeholder="Address Line 2"
                                                className={`form-control ${errors.addressline2 ? "is-invalid " : " "}`}
                                                id="addressline2"
                                                name="addressline2"
                                                defaultValue={defaultData.billingAddress?defaultData.billingAddress.addressline2:""}
                                                ref={register}
                                            />
                                            {errors.addressline2 && errors.addressline2.message}

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="addressline3" className="col-12 col-md-3 col-form-label">Address Line 3</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                placeholder="Address Line 2"
                                                className={`form-control ${errors.addressline3 ? "is-invalid " : " "}`}
                                                id="addressline3"
                                                name="addressline3"
                                                defaultValue={defaultData.billingAddress?defaultData.billingAddress.addressline3:""}
                                                ref={register}
                                            />
                                            {errors.addressline3 && errors.addressline3.message}

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="city" className="col-12 col-md-3 col-form-label">City</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                placeholder="City"
                                                className={`form-control ${errors.city ? "is-invalid " : " "}`}
                                                id="city"
                                                name="city"
                                                defaultValue={defaultData.billingAddress?defaultData.billingAddress.city:""}
                                                ref={register({
                                                    required: true

                                                })} />
                                            {errors.city &&
                                                errors.city.message}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="pin" className="col-12 col-md-3 col-form-label">PIN</label>

                                        <div className="col-12 col-md-6">
                                            <input type="number"
                                                placeholder="pin"
                                                className={`form-control ${errors.pin ? "is-invalid " : " "}`}
                                                id="pin"
                                                name="pin"
                                                defaultValue={defaultData.billingAddress && defaultData.billingAddress.pin}
                                                ref={register({
                                                    required: "Please enter PIN code",
                                                    minLength: {
                                                        value: 6,
                                                        message: "PIN code must 6 digits long"
                                                    },
                                                    maxLength: {
                                                        value: 6,
                                                        message: "PIN code should not be longer then 6 digits"
                                                    }

                                                })} />
                                            {errors.pin &&
                                                errors.pin.message}
                                        </div>
                                    </div>
                                    <div className="form-group row">

                                        <label htmlFor="state" className="col-12 col-md-3 col-form-label">State</label>
                                        <div className="col-12 col-md-6">
                                            <select
                                                className={`form-control ${errors.state ? "is-invalid " : " "}`}
                                                id="state"
                                                name="state"
                                                ref={register({
                                                    required: "This field is required"

                                                })}>
                                                <option>Select</option>
                                                {
                                                    elements.stateList.map((state, k) => {
                                                        return <option
                                                            key={k}
                                                            value={state.name}

                                                        >
                                                            {state.name}

                                                        </option>
                                                    })
                                                }
                                            </select>



                                            {errors.state && errors.state.message}

                                        </div>
                                    </div>

                                    {Err && <p className="alert alert-danger">{Err}</p>}
                                    {Succmsg && <p className="alert alert-success">{Succmsg}</p>}




                                </div>
                                <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>

        </React.Fragment>
    )
}
export default AdminLayout(Billing)