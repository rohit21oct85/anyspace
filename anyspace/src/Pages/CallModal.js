import React , { useState, useEffect } from "react";
import { Link, NavLink, useParams,useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form';
import CommonService from '../Common';
import axios from "axios";
import { elements } from "../cons";

const CallModal = () => {
    const [formSubmited, setformSubmited] = useState(false);
    const [callUsData, setCallUsData] = useState("");

    const [formError, setFormError]= useState();
    const { register, handleSubmit, errors } = useForm()

    const formSubmit = (event) => {
        CommonService.postHttp('/callUsForm', callUsData)
            .then(function (response) {
                if (response.status === 200) {
                    setformSubmited(true);
                }
            })
            .catch(function (error) {
                console.log(error);
                setFormError(error.message)
            });
    }

    const closeAlert = () => {
        setformSubmited(false);
    }
    
    const closeErrorAlert = () => {
        setFormError("");
    }

    
    return(

<React.Fragment>


<div className="modal fade" id="callusNow" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
        <div className="modal-content">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      <div className="modal-body">
        
      <h1><span>Connect With our Solution Expert</span></h1>
        <div className="calUs_form">
        {!formSubmited && <form onSubmit={handleSubmit(formSubmit)} autocomplete="off">
                    <div className="form_part">
                       <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" 
                            className={`form-control ${errors.fullname ? "is-invalid " : " "}`}
                            placeholder="" 
                            ref={register({
                                required: "Please enter full name"
                            })}
                            required
                            onChange={(e) => setCallUsData({...callUsData, fullname: e.target.value })}
                            />
                            {errors.fullname &&
                                errors.fullname.message}
                        </div>
                        <div className="form-group">
                            <label>Mobile</label>
                            <input type="text" 
                            className={`form-control ${errors.mobile ? "is-invalid " : " "}`}
                            placeholder=""
                            onChange={(e) => setCallUsData({...callUsData, mobile: e.target.value })}
                            required
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
                            })}
                            />
                            {errors.mobile &&
                                errors.mobile.message}
                        </div> 
                    </div>
                    
                      <div className="form_part">
                        <div className="form_select">
                            <label>Customer Requiremnet</label>
                            <select  
                            onChange={(e) => setCallUsData({...callUsData, requirement: e.target.value })}
                            required>
                                <option value="">--None--</option>
                                <option value="I Want Space">I Want Space</option>
                                <option value="I Want to Leave out my space">I Want to Lease Out my space</option>
                                <option vaue="Other requirement">Other Requirement</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text"
                            required
                            className={`form-control ${errors.email ? "is-invalid " : " "}`}
                            ref={register({
                                required: "Please enter your email",
                                pattern: {
                                    value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
                                    ,
                                    message: "Please enter valid email"
                                }
                            })} 
                            onChange={(e) => setCallUsData({...callUsData, email: e.target.value })}
                            placeholder="Enter Email"/>
                            {errors.email &&
                            errors.email.message}
                        </div> 
                            
                        </div> 
                        <div className="callus_form_privacy">
                                <em>We guarantee &nbsp; your privacy. Hence we 
                                    <strong>NEVER SPAM</strong>!<br /> 
                                    Read&nbsp;<NavLink to={`/terms-of-service`}>terms &amp; conditions</NavLink>
                                    &nbsp;| <NavLink to={`/privacy-policy`}>privacy policy</NavLink>.</em>
                            </div>

                {formError && <div>
                    <div className="alert alert-success mt-5" role="alert">
                    <a href="#" className="close" onClick={handleSubmit(closeErrorAlert)} aria-label="close">&times;</a>
                    {formError}
                        </div>
                    </div>
                }
        
                    <div className="callus_submit">
                         <button className="btn" type="submit">Submit</button>
                    </div>
                   
                </form>
            }
            {formSubmited && <div>

            <div className="alert alert-success mt-5" role="alert">
                <a href="#" className="close" onClick={handleSubmit(closeAlert)} aria-label="close">&times;</a>
                We have recieved your request. Our execuatives will contact you as soon as possible.
            </div>
            </div>}
        </div>
    </div>
  </div>
</div>
</div>

</React.Fragment>
    )
}

export default CallModal;
