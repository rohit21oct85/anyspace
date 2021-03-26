import React, { useState, useEffect }from "react";
import ContactForm from "../Components/ContactForm"
import { FaChartLine, FaMicrochip, FaWarehouse, FaShippingFast, FaClock, FaFighterJet, FaExpand, FaBox, FaUserTie, FaHandshake, FaRegIdBadge } from "react-icons/fa";
import PageLayout from "../HOC/NewPageLayout";
import { Link, NavLink, useParams } from "react-router-dom";

import SEO from "../Components/Seo"
import anyspazePlaystore from "../images/anyspazePlaystore.png";
import QuickSearch from "../Components/QuickSearch"

import { useForm } from 'react-hook-form';
import CommonService from '../Common';
import axios from "axios";
import { elements } from "../cons";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Home = () => {
    
    const imgStyle = {
        width: '40px',
        height: '44px'
    }
    const imgIcon = {
        filter: 'brightness(0) invert(1)',
        width: '40px',
        height: '44px'
    }
    
    

    
        const params = useParams();
        const slug = params.slug;
        if(slug != undefined){
            const limit = 6;
        }
        const [blogs, setblogs] = useState();
        const [page, setPage] = useState(1);
        const [limit, setLimit] = useState(6);
        const [nextPage, setNextPage] = useState();
        const [prevPage, setPrevPage] = useState();
    
        useEffect(() => {
            axios.get(`${elements.API_ENDPOINT}/getBlogsList/?category=${slug}&page=${page}&limit=${limit}`).then(res => {
                    if(slug != undefined){
                        console.log("blog Data " + res.data.data)
                        const nextData = res.data.next;
                        const prevData = res.data.prev;
                        setNextPage(nextData);
                        setPrevPage(prevData);
                        const blogData = res.data.data; 
                        console.log(blogData);
                        const filteredBlog = blogData.filter( blog => blog.category === slug);
                        console.log(filteredBlog);
                        setblogs(filteredBlog)
                    }else{
                        console.log("blog Data " + res.data)
                        const nextData = res.data.next;
                        const prevData = res.data.prev;
                        setNextPage(nextData);
                        setPrevPage(prevData);
                        const blogData = res.data.data; 
                        setblogs(blogData)
                    }
                })

       
},[page,limit,slug]);
    
useEffect(()=> {
    var section = document.getElementById('countNum');     
    window.addEventListener('scroll', (e) => {
        var hasEntered = false;
      
        const position = section.offsetTop ;
        
        console.log(position);
        var shouldAnimate = (window.scrollY + window.innerHeight) - 325 >= section.offsetTop;
        
        if (shouldAnimate && !hasEntered) {

            hasEntered = true;
            if(hasEntered = true ){

                    const counters = document.querySelectorAll('.counter');
                    const speed = 10000; 

                    counters.forEach(counter => {
                    const updateCount = () => {
                    const target = +counter.getAttribute('data-count')  ;
                    const count = +counter.innerText;

                    
                        if (count < target) {
                           
                                counter.innerText = count + Math.round(target /10) ;
                                setTimeout(updateCount, speed);
                        } else {
                            counter.innerText = target;
                           
                        }
                    };

                    updateCount();
                    } );
        };
        }
    });
    
});
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
    


    return (

        <React.Fragment>

            <SEO />

    <div className="headmass">
        <div className="container">
            <div className="banner_caption">
            <div className="row align-items-center">
                    <div className="col-lg-4  col-12 col-md-6 order-md-1 order-1">
                        <div className="main_caption">
                            <h1 className="title1">HI,</h1>
                            <h2 className="title2">We are</h2>
                            <h2 className="title3">Anyspaze</h2>
                            <div className="google_play">
                                <a href="https://play.google.com/store/apps/details?id=com.anyspazeapp" target="_blank">
                                    <img src="/dist/img/home/download.png" alt="download" className="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-12 order-md-2 order-2">
                        <div className="banner_search">
                            <QuickSearch />
                               
                            
                            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12 order-md-3 order-3">
                        <div className="right_image">
                            <img src="/dist/img/home/banner-image.png" className="img-fluid" alt="Anyspaze_banner"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="choose_us ">
        <div className="container">
            
                
                    <div className="section-heading text-center">
                        <h2 className="entry-heading">
                            <span className="heading_num">
                               <span>0</span>
                               <span className="num">1</span>
                            </span>
                            <strong>Why choose us</strong>
                        </h2>
                        <p className="sub-title">We take great pride in offering fast, flexible, and cost-effective warehousing and logistics 
                        solutions for clients. Grow your business comprehensively without any hassle and manage your inventories effectively 
                        with ANYSPAZE.</p>
                    </div>
                    
                    <div className="main-content">
                        <div className="overlay">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="choose_us_inner">
                                    <div className="choose-icon-wrap">
                    					<div className="choose-icon">
                        					<div className="background-line">
                                                <img  style={imgIcon}  src="/dist/img/icons/digital.png" alt="" />
                                                <img style={imgStyle}  src="/dist/img/icons/digital.png" className="icon_last" alt=""/>
                                                <div className="background-line-bottom"></div>
                        					</div>
                    					</div>
                					</div>
                					<div className="choose_us_content">
                					    <h4 className="entry-title">Digital</h4>
                					    <p className="info">Keep up the pace with the ever-growing and ever-changing digital business landscape with
                					    our automated digital solutions. Enjoy end-to-end visibility across your supply chain at a reduced 
                					    labour cost.</p>
                					</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="choose_us_inner">
                                    <div className="choose-icon-wrap">
                    					<div className="choose-icon">
                        					<div className="background-line">
                                                <img  style={imgIcon} src="/dist/img/icons/scalable.png" alt="" />
                                                <img style={imgStyle}  src="/dist/img/icons/scalable.png" className="icon_last" alt=""/>
                                                <div className="background-line-bottom"></div>
                        					</div>
                    					</div>
                					</div>
                					<div className="choose_us_content">
                					    <h4 className="entry-title">Scalable</h4>
                					    <p className="info">We offer scalable and flexible storage solutions for all kinds of products and provide
                					    a large on-demand fulfillment network for enterprises to deliver goods anytime, anyplace with high 
                					    efficiency.</p>
                					</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="choose_us_inner">
                                    <div className="choose-icon-wrap">
                    					<div className="choose-icon">
                        					<div className="background-line">
                                                <img  style={imgIcon} src="/dist/img/icons/best-price.png" alt="" />
                                                <img style={imgStyle}  src="/dist/img/icons/best-price.png" className="icon_last" alt=""/>
                                                <div className="background-line-bottom"></div>
                        					</div>
                    					</div>
                					</div>
                					<div className="choose_us_content">
                					    <h4 className="entry-title">Best Price</h4>
                					    <p className="info">Our warehouses are reasonably priced and are robustly constructed to ensure complete 
                					    safety & security of your inventories. We also offer customized storage solutions that correctly match
                					    your needs and budget. </p>
                					</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <div className="choose_us_inner">
                                    <div className="choose-icon-wrap">
                    					<div className="choose-icon">
                        					<div className="background-line">
                                                <img  style={imgIcon}  src="/dist/img/icons/quick-support.png" alt="" />
                                                <img style={imgStyle}  src="/dist/img/icons/quick-support.png" className="icon_last" alt=""/>
                                                <div className="background-line-bottom"></div>
                        					</div>
                    					</div>
                					</div>
                					<div className="choose_us_content">
                					    <h4 className="entry-title">Quick Support</h4>
                					    <p className="info">Modern businesses require modern services that are quick, fast and reliable. We are 
                					    highly skilled and equipped to handle all your complex queries and provide quick guidance with immediate 
                					    solutions.</p>
                					</div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
        </div>
    </div>



    <div className="get_quote ">
        <div className="container">
            <div className="row">
                <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="section-heading ">
                        <h2 className="entry-title">Get a quote</h2>
                        <p className="sub-title mb-0">Talk to our experts about your requirements and we will find the best storage facility.</p>
                    </div>
                </div>
                <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="quote-form">
                    {!formSubmited && <form onSubmit={handleSubmit(formSubmit)} autocomplete="off">
                    <div className="form-row form-group">
                        
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
                        {/* <form>
                            <input type="text" className="form-control" placeholder="Name" />
                            <input type="text" className="form-control" placeholder="Company" />
                            <input type="email" className="form-control" placeholder="Email" />
                            <input type="text" className="form-control" placeholder="Phone" />
                            <textarea className="form-control" rows="3" placeholder="Message"></textarea>
                            <button type="submit" className="btn btn-default">
                                <div className="inner">
                                    <div className="left">Submit</div>
                                    <div className="right"><span></span></div>
                                </div>
                            </button>
                        </form>
                         */}
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div className="our_service section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="section-heading ">
                        <h2 className="entry-heading">
                            <span className="heading_num">
                                <span>0</span>
                                <span className="num">2</span>
                            </span>
                            <strong>Our Services</strong>
                        </h2>
                        
                    </div>
                    <p className="info">ANYSPAZE offers 360 degree solutions to fuel the growth of your business. We are a leading expert in 
                    offering high quality inventory management, distribution management and order fulfillment services.  </p>
                    <p className="info">Mirum est notare quam littera gothica, parum claram kiets lorem liver.</p>
                        
                    <a className="link" href="/services">View all services</a>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                    <div className="services_listed">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className="services_inner">
                                    <a href="/inventory-management">
                                        <div className="hex-image image1">
                                            
                                        </div>
                                    
                                        <h4 className="title">Inventory Management</h4>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className="services_inner">
                                    <a href="/distribution-network">
                                        <div className="hex-image image2">
                                            
                                        </div>
                                    
                                        <h4 className="title">Distribution Network</h4>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className="services_inner">
                                    <a href="javascript:void(0)">
                                        <div className="hex-image image3">
                                            
                                        </div>
                                    
                                        <h4 className="title">Road Transport</h4>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className="services_inner">
                                    <a href="/order-processing">
                                        <div className="hex-image image4">
                                            
                                        </div>
                                    
                                        <h4 className="title">Order Processing</h4>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className="services_inner">
                                    <a href="/warehousing">
                                        <div className="hex-image image5">
                                            
                                        </div>
                                    
                                        <h4 className="title">Warehouse</h4>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-4 col-6">
                                <div className="services_inner">
                                    <a href="javascript:void(0)">
                                        <div className="hex-image image6">
                                            
                                        </div>
                                    
                                        <h4 className="title">Packaging & Storage</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
                
        </div>
    </div>
    

    <div className="our_techno ">
        <div className="overlay section-padding">
            <div className="container">
            <div className="section-heading text-center">
                <h2 className="entry-heading">
                    <span className="heading_num">
                        <span>0</span>
                        <span className="num">3</span>
                    </span>
                    <strong>Our Technologies</strong>
                </h2>
                <p className="sub-title">We use the latest technologies and concepts like on-demand warehousing and live tracking with mobile
                applications to scale your business on the global digital landscape.</p>
            </div>
            
            <div className="main-content">
            <OwlCarousel className="owl-theme owl-carousel "
                            id="technologies"
                            loop
                            margin={5}
                            items={6}
                            dosts={false}
                            autoplay={true}>
                    <div className="item">
                        <div className="techno_inner">
                            <a href="javascript:void(0)">
                                <div className="icon">
                                    <img src="/dist/img/home/data-analytics.png" alt="WMS" className="img-fluid"/>
                                </div>
                                <h4 className="title">Data & Analytics</h4>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="techno_inner">
                            <a href="javascript:void(0)">
                                <div className="icon">
                                    <img src="/dist/img/home/IOT.png" alt="WMS" className="img-fluid"/>
                                </div>
                                <h4 className="title">IOT Enabled</h4>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="techno_inner">
                            <a href="javascript:void(0)">
                                <div className="icon">
                                    <img src="/dist/img/home/api.png" alt="WMS" className="img-fluid"/>
                                </div>
                                <h4 className="title">Data Integration & Visibility</h4>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="techno_inner">
                            <a href="javascript:void(0)">
                                <div className="icon">
                                    <img src="/dist/img/home/software_development.png" alt="WMS" className="img-fluid"/>
                                </div>
                                <h4 className="title">Software Development</h4>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="techno_inner">
                            <a href="javascript:void(0)">
                                <div className="icon">
                                    <img src="/dist/img/home/GPS.png" alt="WMS" className="img-fluid"/>
                                </div>
                                <h4 className="title">GPS</h4>
                            </a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="techno_inner">
                            <a href="javascript:void(0)">
                                <div className="icon">
                                    <img src="/dist/img/home/experience.png" alt="Experience" className="img-fluid"/>
                                </div>
                                <h4 className="title">Experience</h4>
                            </a>
                        </div>
                    </div>
                    </OwlCarousel>
            </div>
        </div>
        </div>
    </div>
    

    <div className="industry-figures section-padding" id="countNum">
        <div className="overlay ">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-4 col-md-4 col-sm-12 col-12">
                        <div className="section-heading">
                            <h2 className="entry-heading">
                                <span className="heading_num">
                                    <span>0</span>
                                    <span className="num">4</span>
                                </span>
                                <strong>Industry Figures</strong>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-12 col-12">
                        <div className=" industry-counters-main">
                                    <div className="">
                                    <div className="counter_inner_main">
                                        <div className="right-content">
                                            <i className="fas fa-tasks"></i>
                                        </div>
                                        <div className="left-content">
                                            <h3 className="counter-num"><span className="counter" data-count="2500">0</span></h3>
                                            <div className="sub-text">Projects Handled</div>
                                        </div>
                                        
                                    </div>
                                    </div>
                                    <div className="">
                                    <div className="counter_inner_main">
                                        <div className="right-content">
                                            <i className="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div className="left-content">
                                            <h3 className="counter-num"><span className="counter" data-count="20">0</span><span>+</span></h3>
                                            <div className="sub-text">Locations</div>
                                        </div>
                                        
                                    </div>
                                    </div>
                                    <div className="">
                                    <div className="counter_inner_main">
                                        <div className="right-content">
                                           <i className="fas fa-warehouse"></i>
                                        </div>
                                        <div className="left-content">
                                            <h3 className="counter-num"><span className="counter" data-count="80">0</span><span>+</span></h3>
                                            <div className="sub-text">Warehouses</div>
                                        </div>
                                        
                                    </div>
                                    </div>
                                    
                                    <div className="">
                                    <div className="counter_inner_main">
                                        <div className="right-content">
                                            <i className="fas fa-shield-alt"></i>
                                        </div>
                                        <div className="left-content">
                                            <h3 className="counter-num"><span className="counter" data-count="80">0</span><span>M</span></h3>
                                            <div className="sub-text">Storage Area</div>
                                        </div>
                                        
                                    </div>
                                    </div>
                                </div>
                            
                        
                    </div>
                    <div className="col-lg-12 col-12">
                        <div className="industry-slider-main">
                            <div id="industry-slider" className="carousel slide" data-ride="carousel">

                            
                              <ul className="carousel-indicators">
                                <li data-target="#industry-slider" data-slide-to="0" className="active"></li>
                                <li data-target="#industry-slider" data-slide-to="1"></li>
                                <li data-target="#industry-slider" data-slide-to="2"></li>
                                <li data-target="#industry-slider" data-slide-to="4"></li>
                              </ul>
                              
                             
                              <div className="carousel-inner">
                                <div className="carousel-item active">
                                  <div className="inner_main">
                                      <div className="media ">
                                                <div className="left_image">
                                                  <img src="/dist/assets/img/home/Sam.jpg" alt="" className="img-fluid"/>
                                              </div>
                                            <div className="media-body">
                                              <div className="right_content">
                                                  <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim 
                                                  placer at facer possim assum.</p>
                                                  <h5 className="name">Baryan Kennedy</h5>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bg_layer">
                                              
                                          </div>
                                     
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <div className="inner_main">
                                      <div className="media ">
                                                <div className="left_image">
                                                  <img src="/dist/assets/img/home/Sam.jpg" alt="" className="img-fluid"/>
                                              </div>
                                            <div className="media-body">
                                              <div className="right_content">
                                                  <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim 
                                                  placer at facer possim assum.</p>
                                                  <h5 className="name">Baryan Kennedy</h5>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bg_layer">
                                              
                                          </div>
                                     
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <div className="inner_main">
                                      <div className="media ">
                                                <div className="left_image">
                                                  <img src="/dist/assets/img/home/Sam.jpg" alt="" className="img-fluid"/>
                                              </div>
                                            <div className="media-body">
                                              <div className="right_content">
                                                  <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim 
                                                  placer at facer possim assum.</p>
                                                  <h5 className="name">Baryan Kennedy</h5>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bg_layer">
                                              
                                          </div>
                                     
                                  </div>
                                </div>
                                <div className="carousel-item">
                                  <div className="inner_main">
                                      <div className="media ">
                                                <div className="left_image">
                                                  <img src="/dist/assets/img/home/Sam.jpg" alt="" className="img-fluid"/>
                                              </div>
                                            <div className="media-body">
                                              <div className="right_content">
                                                  <p>Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim 
                                                  placer at facer possim assum.</p>
                                                  <h5 className="name">Baryan Kennedy</h5>
                                              </div>
                                            </div>
                                          </div>
                                          <div className="bg_layer">
                                              
                                          </div>
                                     
                                  </div>
                                </div>
                              </div>
                              
                            
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    
    <div className="blog_update section-padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-md-4 col-12">
                    <div className="section-heading">
                        <h2 className="entry-heading">
                            <span className="heading_num">
                                <span>0</span>
                                <span className="num">5</span>
                            </span>
                            <strong>Blog Update</strong>
                        </h2>
                        <p className="info">We welcome our clients and readers to read our blogs and stay updated with the latest trends in the
                        warehousing industry.</p>
                    </div>
                </div>
                
                <div className="col-lg-7 col-md-8 col-12">
                    <div className="blog_update_slider">
                    {blogs && (
                        
                    <OwlCarousel className="owl-theme owl-carousel "
                            id="blog-slider"
                            loop
                            margin={5}
                            dots="false"
                            items={2}
                            autoplay={true}>
                        {blogs && blogs.map((blog, index) => {
                            return (
                            <div className="item" key={index}>
                                <div className="slider_inner blog-item">
                                    <a href="javascript:void(0)">
                                    <div className="image_div">
                                        <img src={blog.image} alt="" className="img-fluid"/>
                                        <div className="blog_overlay">
                                            <div className="entry-title">{blog.category}</div>
                                            <div className="content">
                                                 {blog.title}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blog-hover">
                                    <NavLink to={`/blog-details/${blog.slug}`}>
	                                   <div className="sh-entry-blog2">
	                                       <span className="cat">
	                                           <p>{blog.category}</p>
	                                       </span>
	                                       <h3>{blog.title}</h3>
	                                   </div>
	                                   
                                    <div dangerouslySetInnerHTML={{ __html: blog && blog.description.substring(0,100)  }} />
                                    
                                    
                                    <span className="entry-sh-footer">
                                        <span className="date">
                                            <i className="fa fa-calendar"></i>August 11, 2015
                                    	</span>
                                       
                                    </span>
                                    </NavLink>
			                    </div>
                                    </a>
                                </div>
                            </div>
                            
                            )
                        })}
                        </OwlCarousel>
                        
                        )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
   
	
         
            



        </React.Fragment >
    )


}

export default PageLayout(Home);