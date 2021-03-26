import React,  { useState, useEffect } from "react";
import { NavLink } from "react-router-dom"
import {useSelector} from "react-redux"
import { useForm } from 'react-hook-form';
import CommonService from '../Common';
import axios from "axios";
import { elements } from "../cons";

const Footer = () => {

    const [formSubmited, setformSubmited] = useState(false);
    const [formError, setFormError]= useState()
    const { register, handleSubmit, errors } = useForm();
    const [industry, setIndustry] = useState()
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getIndustryList`, '').then(res => {
                setIndustry(res.data)
            })
    }, []);
    
    const [services, setServices] = useState()
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getServiceList`, '').then(res => {
            setServices(res.data)
            })
    }, []);

    const formSubmit = (formData ) => {
        CommonService.postHttp('/subscribeNewsLetter', formData)
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
    const myStyle = {
        height: '50px', 
        transform: 'rotate(90deg)',
        filter: 'brightness(0) invert(1)'
    }
    const overlay = {
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,.5)'
    }
    const container = {
        maxWidth: '1200px'
    }
    return (
        <React.Fragment>
            <div className="newsletter">
            <div className="container" style={container}>
                <div className="newsletter-inner">
                    <div className="overlay">
                    <div className="row align-items-end">
                        <div className="col-lg-4">
                            <div className="newsletter-content">
                                <h4>NEWSLETTER</h4>
                                <p>Subscribe to our monthly newsletter</p>
                            </div>
                        </div>
                        <div className="col-lg-8">    
                        {!formSubmited && <form onSubmit={handleSubmit(formSubmit)} autoComplete="off">
                        <div className="form-group">
                            <input type="email"
                                className={`form-control ${errors.subscriber_email ? "is-invalid " : " "}`}
                                id="subscriber_email"
                                name="subscriber_email"
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
                            {errors.subscriber_email &&
                                errors.subscriber_email.message}
                            </div>
                        {formError && <p className="alert alert-danger">{formError}</p>}
                        <button className="btn cta cta__subscribe btn-default">
                            <div className="inner" >
                                    <div className="left">SUBSCRIBE</div>
                                    <div className="right"><span></span></div>
                                </div>
                        </button>
                        </form>
                        }

                        {formSubmited && <div>
                        <div className="alert alert-success" role="alert">
                        <a href="#" class="close" onClick={handleSubmit(closeAlert)} aria-label="close">&times;</a>
                            We have recieved your request. Our execuatives will contact you as soon as possible.
                        </div>
                        </div>}

                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <footer>
            <div className="container" style={container}>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-12">
                        <div className="footer-content">
                            
                            <div className="footer-logo">
                            <NavLink to="/">  <img src="/dist/img/home/share-removebg-preview.png" className="mb-2" style={myStyle}/>
                                    <h4 className="anyspaze_logo_text">Anyspaze</h4>
                                    </NavLink>
                            </div>
                            <p>
                                ANYSPAZE is a technology enabled logistics service provider with a vast network of warehouses across all geographically 
                                strategic locations. We are equipped with a team that finds joy in serving the clients with top-notch warehousing 
                                solutions and are highly trained in implementing the latest technologies to keep your business up-to-date with the 
                                current pace of the world. 
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-12">
                        <div className="footer-content">
                            <h4 className="footer-title">About Us</h4>
                            <div className="dash-icon">
                                <div></div>
                                <div></div>
                            </div>
                            <ul className="footer-list">
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/about-us">About the Company</NavLink></li>
                                {/* <li>
                                    <NavLink to="/">Technologies</NavLink>
                                </li> */}
                                <li><NavLink to="/blog-listing">Blogs & Industry News</NavLink></li>
                                <li><NavLink to="/">Quick Links</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="footer-content">
                            <h4 className="footer-title">Solutions Offered</h4>
                            <div className="dash-icon">
                                <div></div>
                                <div></div>
                            </div>

                            <ul className="footer-list">
                            
                            {services && services.map( (service, index) => {
                                    return (
                                        <li key={index}><NavLink to={`/${service.slug}`}>{service.name}</NavLink></li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6 col-6">
                        <div className="footer-content">
                            <h4 className="footer-title">Industries</h4>
                            <div className="dash-icon">
                                <div></div>
                                <div></div>
                            </div>

                            <ul className="footer-list">
                                {industry && industry.map( (ind, index) => {
                                    return (
                                        <li key={index}><NavLink to={`/industry/${ind.slug}`}>{ind.name}</NavLink></li>
                                    );
                                })}
                                
                            </ul>
                        </div>
                    </div>
                    
                    <div className="col-lg-3 col-md-6 col-6">
                        <div className="footer-content">
                            <h4 className="footer-title">Contact Details</h4>
                            <div className="dash-icon">
                                <div></div>
                                <div></div>
                            </div>
                            <div className="contact-details">
                                <h4 className="footer-title">
                                    ANYSPAZE
                                </h4>
                                <p>Vatika Atrium, Ground Floor, Tower B,
                                Golf Course Road, Sector 53, Gurugram
                                Haryana 122002. India</p>
                                <p>Phone:<a href="tel:+91-9569774455"> +91-9569774455</a> </p>
                                <p>Email:<a href="mailto:info@anyspaze.com"> info@anyspaze.com</a> </p>
                            </div>
                            <div className="footer-social-icon">
                                <a href="https://www.facebook.com/anyspaze/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                <a href="https://twitter.com/anyspaze" target="_blank"><i className="fab fa-twitter"></i></a>
                                <a href="https://www.instagram.com/anyspaze/" target="_blank"><i className="fab fa-instagram" ></i></a>
                                <a href="https://in.linkedin.com/company/anyspaze" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                <a href="https://www.youtube.com/channel/UC-jOLuBKv2FokelKaKU-CuA/featured" target="_blank"> <i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="contact-details">
                        <h4 className="footer-title">
                            ANYSPAZE
                        </h4>
                        <span>All right reserved</span>
                        <span>Copyright@2020</span>
                        
                    </div>
                    <div className="terms-condition">
                        <NavLink to="/terms-of-service">Terms of Use</NavLink>
                        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                        <NavLink to="/sitemap.xml">Sitemap</NavLink>
                    </div>
                </div>
            </div>
        </footer>
        <script src="/dist/js/jquery-3.5.1.min.js"></script>
        <script src="/dist/js/bootstrap.min.js"></script>
        <script src="/dist/js/accordion.js"></script>
        <script src="/dist/owlcarousel/owl.carousel.js"></script>
        <script src="/dist/js/main.js"></script>
        </React.Fragment>
    )
}
export default Footer