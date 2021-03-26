
import React , { useState , useEffect} from "react"
import PageLayout from "../HOC/NewPageLayout";
import SEO from "../Components/Seo"
import { useForm } from 'react-hook-form';
import CommonService from '../Common';
import axios from "axios";
import { elements } from "../cons";

const Contact =()=>{
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
    const closeAlert = () => {
        setformSubmited(false);
    }
    

    const overlay = {
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,.5)'
    }
    const container = {
        maxWidth: '1140px'
    }
    return(
        <React.Fragment>
		<SEO />
        <div className="hero-section contact-us-banner">
            <div className="overlay" style={overlay}>
            <div className="container" style={container}>
                <div className="hero-content">
                    <div className="position-div">
                        <h1 className="hero__heading">CONTACT US</h1>
                    </div>

                    <ul className="hero-breadcrumbs">
                        <li><a href="/">Home</a></li>
                        <li><i className="fas fa-chevron-right"></i></li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>

        <section className="keep-in-touch ">
            <div className="container" style={container}>
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6 col-md-6 ">
                        <div className="keep-in-touch-content">
                            <div className="section-heading">
                                <h2 className="section__title">Keep in touch with us</h2>
                                <p></p>
                            </div>

                            <div className="address-info">
                                <div className="address-inner-info">
                                    <i className="fas fa-map-marked-alt"></i>
                                    <div className="address-box">
                                        <h4>Address</h4>
                                        <p>Vatika Atrium, Ground fLOOR, Towe-B Golf Course Road,Sector -53, Gurgaon - 122002, India</p>
                                    </div>
                                </div>
                                <div className="address-inner-info">
                                    <i className="fas fa-phone-alt"></i>
                                    <div className="address-box">
                                        <h4>Phone</h4>
                                        <a href="tel:+91 9569774455">
                                               <p>+91-9569774455</p>
                                        </a>
                                    </div>
                                </div>
                                <div className="address-inner-info">
                                    <i className="fas fa-envelope"></i>
                                    <div className="address-box">
                                        <h4>Mail Us</h4>
                                        <a href="mailto:info@anyspaze.com"><p>info@anyspaze.com</p></a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="maps">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1754.1726800781814!2d77.10237060821757!3d28.439003804157053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d183124b3ce65%3A0x5141be864fb54e8d!2sVatika%20Business%20Centre%20%26%20Co-working%20Spaces!5e0!3m2!1sen!2sin!4v1596700364464!5m2!1sen!2sin" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="know-about-with-us">
            <div className="overlay">
            <div className="container" style={container}>
                <div className="section-heading">
                    <h2 className="section__title">Know more about us</h2>
                    <p>Connect with us to get world class warehousing facility backed by technology at effective prices</p>
                </div>
                {!formSubmited && <form onSubmit={handleSubmit(formSubmit)} autocomplete="off">
                    <div className="form-row form-group">
                        <div className="col-md-6 col-12">
                            <input type="text"
                                className={`form-control ${errors.fullname ? "is-invalid " : " "}`}
                                id="fullname"
                                name="fullname"
                                placeholder="Full Name"
                                ref={register({
                                    required: "Please enter full name"
                                })} />
                            {errors.fullname &&
                                errors.fullname.message}
                        </div>
                        <div className="col-md-6 col-12">
                        <input type="email"
                            className={`form-control ${errors.email ? "is-invalid " : " "}`}
                            id="staticEmail"
                            name="email"
                            placeholder="Email"
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
                    <div className="form-row form-group">
                        <div className="col-md-6 col-12">
                            
                        <input type="number"
                            className={`form-control ${errors.mobile ? "is-invalid " : " "}`}
                            id="mobile"
                            name="mobile"
                            placeholder="Mobile"
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
                        <div className="col-md-6 col-12">
                            
                        <input type="text"
                            className={`form-control ${errors.company ? "is-invalid " : " "}`}
                            id="company"
                            name="company"
                            placeholder="Company"
                            ref={register({
                                required: "Please enter company name"

                            })} />
                        {errors.company &&
                            errors.company.message}
                        </div>
                    </div>
                    <div className="form-group">
                    <textarea
                        className={`form-control ${errors.message ? "is-invalid " : " "}`}
                        id="message"
                        name="message"
                        placeholder="Enter Message"
                        ref={register({
                            required: "Please enter your message here"

                        })} />
                    {errors.message &&
                        errors.message.message}
                    </div>
                    {formError && <p className="alert alert-danger">{formError}</p>}

                    <button type="submit" className="btn btn-default" name="submit" id="submit">
                    
                        <div className="inner" >
                            <div className="left">Send Message</div>
                            <div className="right"><span></span></div>
                        </div>
                    </button>
                </form>
                }

                {formSubmited && <div>

                <div className="alert alert-success mt-5" role="alert">
                    <a href="#" class="close" onClick={handleSubmit(closeAlert)} aria-label="close">&times;</a>
                    We have recieved your request. Our execuatives will contact you as soon as possible.
                </div>
                </div>}

            </div>
            </div>
        </section>

        </React.Fragment>
    )
}


export default PageLayout(Contact)