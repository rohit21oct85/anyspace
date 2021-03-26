import React, { useState, useEffect }from "react";
import { useParams, Redirect,Link, NavLink } from "react-router-dom";
import PageLayout from "../HOC/NewPageLayout";
import SEO from "../Components/Seo"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useForm } from 'react-hook-form';
import CommonService from '../Common';
import axios from "axios";
import { elements } from "../cons";
const options = {
    items: 4,
};

const Services = () => {
   
    const overlay = {
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,.5)'
    }
    const container = {
        maxWidth: '1140px'
    }
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

        <div className="page_banner service-banner ">
    <div className="overlay">
        <div className="container" style={container}>
            <div className="banner_caption">
                <div className="container" style={container}>
                    <h1 className="main_title">Our Services</h1>
                    <div className="sub-title">What we offer to clients</div>
                    <div className="dash-icon">
					    <div></div>
					    <div></div>
				    </div>
                </div>
            </div>
            <ul className="list-unstyled anyspaze_breadcrumb">
                <li className="list-inline-item"><a href="/">Home</a></li>
                <li className="list-inline-item"><i className="fas fa-chevron-right"></i></li>
                <li className="list-inline-item">Services</li>
            </ul>
        </div>
    </div>
</div>

<section className="logistic_services section-padding">
    <div className="container" style={container}>
        <div className="inner_page_heading">
            <h4 className="sub-head">International Warehouses and</h4>
            <h2 className="main-head">Logistic Services</h2>
            <div className="heading_underline">
                <img src="/dist/img/icons/delivery.png" alt="" className="img-fluid"/>
            </div>
        </div>
        
        <div className="main_content">

        <OwlCarousel
                className="owl-theme owl-carousel"
                id="logistic_slider"
                loop
                margin={5}
                dots={false}
                autoplay={true}
        >
               <div className="item" >
                    <div className="logistic_slider_inner">
                        <NavLink to="/inventory-management">
                        <div className="image">
                            <img src="/dist/img/services/inventory_item.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="detail">
                            <h3 className="logistic_name">Inventory Management</h3>
                        </div>
                        </NavLink>
                    </div>
                </div>
                
                <div className="item" >
                    <div className="logistic_slider_inner">
                        <NavLink to="/disribution-network">
                        <div className="image">
                            <img src="/dist/img/services/distribution_management_item.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="detail">
                            <h3 className="logistic_name">Distribution Network</h3>
                        </div>
                        </NavLink>
                    </div>
                </div>
                
                <div className="item" >
                    <div className="logistic_slider_inner">
                        <NavLink to="/order-processing">
                        <div className="image">
                            <img src="/dist/img/services/order_processing_item.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="detail">
                            <h3 className="logistic_name">Order Processing Fulfillment</h3>
                        </div>
                        </NavLink>
                    </div>
                </div>
                
                <div className="item" >
                    <div className="logistic_slider_inner">
                        <NavLink to="/road-transport">
                        <div className="image">
                            <img src="/dist/img/services/road_transport_item.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="detail">
                            <h3 className="logistic_name">Road Transport</h3>
                        </div>
                        </NavLink>
                    </div>
                </div>
                
                <div className="item" >
                    <div className="logistic_slider_inner">
                        <NavLink to="/packaging-storage">
                        <div className="image">
                            <img src="/dist/img/services/packaging_item.jpg" alt="" className="img-fluid"/>
                        </div>
                        <div className="detail">
                            <h3 className="logistic_name">Packaging & Storage</h3>
                        </div>
                        </NavLink>
                    </div>
                </div>
                
            </OwlCarousel>

        </div>
    </div>
</section>
<div className="fluid_section">
<div id="slider_fluid1" className="carousel slide" data-ride="carousel" data-interval="false">

   <ul className="carousel-indicators">
    <li data-target="#slider_fluid1" data-slide-to="0" className="active">
        <a href="/inventory-management">  
        <h3 className="indicator-text">Inventory Management</h3></a>
    </li>
    <li data-target="#slider_fluid1" data-slide-to="1">
        <a href="/distribution-network">
            <h3 className="indicator-text">Distribution Management</h3></a>
    </li>
    <li data-target="#slider_fluid1" data-slide-to="2">
        <h3 className="indicator-text">Packaging & Storage</h3>
    </li>
    <li data-target="#slider_fluid1" data-slide-to="3">
    <a href="/order-processing">
        <h3 className="indicator-text">Order Processing Fulfillment</h3></a>
    </li>
    <li data-target="#slider_fluid1" data-slide-to="4">
    <a href="/find-warehouse">
        <h3 className="indicator-text">Warehouse</h3></a>
    </li>
    <li data-target="#slider_fluid1" data-slide-to="5">
    <a href="/order-processing">
        <h3 className="indicator-text">Road Transport</h3></a>
    </li>
    </ul>
  
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="row no-gutters">
        <div className="col-lg-6 col-md-6 col-12">
            <div className="left-image">
                <img src="/dist/img/services/inventory_mngmnt.jpg" alt="service image" className="img-fluid"/>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
            <div className="right-content">
                <div className="inner-container">
                   
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-6">
                            <div className="left-content-inner">
                               
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="right-content-inner">
                                <div className="top-head">
                                    <div className="icon">
                                        <img src="/dist/img/icons/inventory.png" alt="icon" className="img-fluid"/>
                                    </div>
                                    <div className="head_bottom">
                                    <div className="dash-icon">
        								<div></div>
        								<div></div>
        							</div>
        							</div>
                                </div>
                                <div className="content">
                                    <p>Increase productivity and reduce inventory costs with end-to-end supply chain visibility. Have the right
                                    products in stock as soon as your customers need them.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row no-gutters">
        <div className="col-lg-6 col-md-6 col-12">
            <div className="left-image">
                <img src="/dist/img/services/fluid-image.jpg" alt="service image" className="img-fluid"/>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
            <div className="right-content">
                <div className="inner-container">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-6">
                            <div className="left-content-inner">
                               
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="right-content-inner">
                                <div className="top-head">
                                    <div className="icon">
                                        <img src="/dist/img/icons/distribution.png" alt="icon" className="img-fluid"/>
                                    </div>
                                    <div className="head_bottom">
                                    <div className="dash-icon">
        								<div></div>
        								<div></div>
        							</div>
        							</div>
                                </div>
                                <div className="content">
                                    <p>Operate efficiently and effectively with most advanced distribution management practices from ANYSPAZE
                                    and fulfill orders with high efficiency during the peak seasons of business.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row no-gutters">
        <div className="col-lg-6 col-md-6 col-12">
            <div className="left-image">
                <img src="/dist/img/services/packaging_&storage.jpg" alt="service image" className="img-fluid"/>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
            <div className="right-content">
                <div className="inner-container">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-6">
                            <div className="left-content-inner">
                               
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="right-content-inner">
                                <div className="top-head">
                                    <div className="icon">
                                        <img src="/dist/img/icons/packages.png" alt="icon" className="img-fluid"/>
                                    </div>
                                    <div className="head_bottom">
                                    <div className="dash-icon">
        								<div></div>
        								<div></div>
        							</div>
        							</div>
                                </div>
                                <div className="content">
                                    <p>Our warehouse storage and packaging solutions are meticulously designed to guarantee 100% safety of your 
                                    goods throughout its lifecycle from the warehouse to its final destination. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row no-gutters">
        <div className="col-lg-6 col-md-6 col-12">
            <div className="left-image">
                <img src="/dist/img/services/order_processing.jpg" alt="service image" className="img-fluid"/>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
            <div className="right-content">
                <div className="inner-container">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-6">
                            <div className="left-content-inner">
                                
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="right-content-inner">
                                <div className="top-head">
                                    <div className="icon">
                                        <img src="/dist/img/icons/progress.png" alt="icon" className="img-fluid"/>
                                    </div>
                                    <div className="head_bottom">
                                    <div className="dash-icon">
        								<div></div>
        								<div></div>
        							</div>
        							</div>
                                </div>
                                <div className="content">
                                    <p>Focus on expanding your business and let ANYSPAZE handle everything in real time to ensure fast and 
                                    accurate order fulfillment with greater accuracy and efficiency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row no-gutters">
        <div className="col-lg-6 col-md-6 col-12">
            <div className="left-image">
                <img src="/dist/img/services/warehouse.jpg" alt="service image" className="img-fluid"/>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
            <div className="right-content">
                <div className="inner-container">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-6">
                            <div className="left-content-inner">
                                
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="right-content-inner">
                                <div className="top-head">
                                    <div className="icon">
                                        <img src="/dist/img/icons/warehouses.png" alt="icon" className="img-fluid"/>
                                    </div>
                                    <div className="head_bottom">
                                    <div className="dash-icon">
        								<div></div>
        								<div></div>
        							</div>
        							</div>
                                </div>
                                <div className="content">
                                    <p>We provide customized and state-of-the-art warehousing services equipped with all the latest safety 
                                    devices to meet the diverse needs of businesses working in different verticals.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="row no-gutters">
        <div className="col-lg-6 col-md-6 col-12">
            <div className="left-image">
                <img src="/dist/img/services/road_trnsprt.jpg" alt="service image" className="img-fluid"/>
            </div>
        </div>
        <div className="col-lg-6 col-md-6 col-12">
            <div className="right-content">
                <div className="inner-container">
                    <div className="row no-gutters">
                        <div className="col-lg-6 col-md-6">
                            <div className="left-content-inner">
                               
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="right-content-inner">
                                <div className="top-head">
                                    <div className="icon">
                                        <img src="/dist/img/icons/road.png" alt="icon" className="img-fluid"/>
                                    </div>
                                    <div className="head_bottom">
                                    <div className="dash-icon">
        								<div></div>
        								<div></div>
        							</div>
        							</div>
                                </div>
                                <div className="content">
                                    <p>Cater to a broad range of customers across any part of the country and stay active on the track with our 
                                    reliable, flexible and widespread logistics.</p>
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
</div>

<section className="main_features section-padding">
    <div className="container"  style={container}>
        <div className="inner_page_heading">
            <h4 className="sub-head">Why choose us</h4>
            <h2 className="main-head">The main Features</h2>
            <div className="heading_underline">
                <img src="/dist/img/icons/delivery.png" alt="" className="img-fluid"/>
            </div>
        </div>
        <p className="sub_info">We are a leading warehouse provider for expanding your business. We offer powerful solutions including warehousing,
        inventory management and order fulfillment.</p>
        
        <div className="main_content">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-12">
                    <div className="left-content">
                        <div className="inner_div">
                            <div className="left">
                                <h4 className="entry-title">100% satisfied customers</h4>
                                <p className="info">Achieving 100% results with well planned order fulfillment techniques and smart inventory 
                                management solutions.
                                </p>
                            </div>
                            <div className="right">
                                <img src="/dist/img/icons/support.png" alt="icon" className="img-fluid"/>
                            </div>
                        </div>
                        
                        <div className="inner_div">
                            <div className="left">
                                <h4 className="entry-title">Quality Service affordable price</h4>
                                <p className="info">We are committed to delivering comprehensive services that are remarkable in terms of price, 
                                and quality. 
                                </p>
                            </div>
                            <div className="right">
                                <img src="/dist/img/services/box.png" alt="icon" className="img-fluid"/>
                            </div>
                        </div>
                        
                        <div className="inner_div">
                            <div className="left">
                                <h4 className="entry-title">Worldwide locations</h4>
                                <p className="info">Strengthen your business anytime, anyplace with our remarkable connected warehouses spread 
                                across major cities worldwide. 
                                </p>
                            </div>
                            <div className="right">
                                <img src="/dist/img/icons/travel.png" alt="icon" className="img-fluid"/>
                            </div>
                        </div>
                        
                        <div className="inner_div">
                            <div className="left">
                                <h4 className="entry-title">modern Vehicle Fleet</h4>
                                <p className="info">Distribute goods on time with our modern fleet equipped with the latest gadgets for real time 
                                surveillance. 
                                </p>
                            </div>
                            <div className="right">
                                <img src="/dist/img/icons/truck.png" alt="icon" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-7 col-md-7 col-12">
                    <div className="right-image">
                        <img src="/dist/img/services/main_feature.jpg" alt="" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="brochuers">
    <div className="overlay" style={overlay}>
        <div className="brochure_icon">
        <div className="image">
            <img src="/dist/img/services/brochure.png" alt="brochure" className="img-fluid"/>
        </div>
    </div>
        <div className="container" style={container}>
            <div className="row">
            <div className="col-lg-8 col-md-8 col-12">
                <div className="brochures_content">
                    <h2 className="main-head">Download our service brochures</h2>
                    <p className="info">Accelerate your business with qualified experts from ANYSPAZE and scale your warehousing network worldwide.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
                <div className="download_option">
                    <a href="javascript:void(0)">
                        <div className="inner">
                            <div className="left">Download now</div>
                            <div className="right"><span></span></div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        </div>
    </div>
</section>

<section className="extra_services ">
    <div className="container" style={container}>
        <div className="inner_page_heading">
            <h4 className="sub-head">More Offers</h4>
            <h2 className="main-head">Extra Services</h2>
            <div className="heading_underline">
                <img src="/dist/img/icons/delivery.png" alt="" className="img-fluid"/>
            </div>
        </div>
        <div className="main_content">
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="extra_services_inner">
                    <div className="left_image">
                        <img src="/dist/img/icons/hot-air-balloon.png" alt="icon" className="img-fluid"/>
                    </div>
                    <div className="right_content">
                        <h4 className="entry-title">Pallet Leasing</h4>
                        <p className="info">Manage your goods efficiently throughout the supply chain with our industry-standard pallets that 
                        come in customized sizes, designs, and materials. Our professionals also record pallet movement with complete accuracy.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="extra_services_inner">
                    <div className="left_image">
                        <img src="/dist/img/icons/delivery_cargo.png" alt="icon" className="img-fluid"/>
                    </div>
                    <div className="right_content">
                        <h4 className="entry-title">Cargo Moving</h4>
                        <p className="info">Get ready to load and ship your goods to any geographic location with our innovative logistics 
                        solutions. We guarantee the best, reliable and fastest route for all your cargo shipments.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="extra_services_inner">
                    <div className="left_image">
                        <img src="/dist/img/icons/phone.png" alt="icon" className="img-fluid"/>
                    </div>
                    <div className="right_content">
                        <h4 className="entry-title">Smartphone App</h4>
                        <p className="info">Smart and easy-to-use mobile applications for accurate data about inventory, shipping, and orders right
                        at your fingertips. Monitor your warehouse productivity with real time reporting at any time from anywhere.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="extra_services_inner">
                    <div className="left_image">
                        <img src="/dist/img/icons/delivery_car.png" alt="icon" className="img-fluid"/>
                    </div>
                    <div className="right_content">
                        <h4 className="entry-title">Vehicle Leasing</h4>
                        <p className="info">Save on your business costs by leasing fleet vehicles from ANYSPAZE at a lower monthly payment. All our 
                        fleet vehicles are well-equipped with useful gadgets promising a smoother driving experience.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="extra_services_inner">
                    <div className="left_image">
                        <img src="/dist/img/icons/open-24-hours.png" alt="icon" className="img-fluid"/>
                    </div>
                    <div className="right_content">
                        <h4 className="entry-title">24/7 Support</h4>
                        <p className="info">Our ability to offer uninterrupted and unmatched support services makes us the most trusted and reliable
                        logistics service provider in the industry. Working with us guarantees complete peace of mind.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="extra_services_inner">
                    <div className="left_image">
                        <img src="/dist/img/icons/search.png" alt="icon" className="img-fluid"/>
                    </div>
                    <div className="right_content">
                        <h4 className="entry-title">Cargo Tracking</h4>
                        <p className="info">Know all the whereabouts of your cargo throughout its journey with our standard tracking services. With
                        cargo tracking functionality, you can notify your customers about the status of their shipments.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
</section>

<section className="quote_faqs section-padding">
    <div className="top_head">
        <div className="left">
            <h2 className="main_title">Request a Quote</h2>
        </div>
        <div className="right">
            <h2 className="main_title">General Faq's</h2>
        </div>
        <div className="icon">
            <div className="icons_image">
                <img className="img-fluid" src="/dist/img/icons/truck.png" alt="icons"/>
            </div>
        </div>
    </div>
    <div className="main_content">
        <div className="overlay">
            <div className="container" style={container}>
        <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
                <div className="quote-form">
                {!formSubmited && <form onSubmit={handleSubmit(formSubmit)} autocomplete="off">
                    <div className="form-row form-group">
                        <div className="col-md-12 col-12">
                            <input type="text"
                                className={`form-control ${errors.fullname ? "is-invalid " : " "}`}
                                id="fullname"
                                name="fullname"
                                placeholder="Full Name"
                                autocomplete="none"
                                ref={register({
                                    required: "Please enter full name"

                                })} />
                            {errors.fullname &&
                                errors.fullname.message}
                        </div>
                        <div className="col-md-12 col-12">
                        <input type="email"
                            className={`form-control ${errors.email ? "is-invalid " : " "}`}
                            id="staticEmail"
                            name="email"
                            placeholder="Email"
                            autocomplete="none"
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
                        <div className="col-md-12 col-12">
                            
                        <input type="number"
                            className={`form-control ${errors.mobile ? "is-invalid " : " "}`}
                            id="mobile"
                            name="mobile"
                            placeholder="Mobile"
                            autocomplete="none"
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
                        <div className="col-md-12 col-12">
                            
                        <input type="text"
                            className={`form-control ${errors.company ? "is-invalid " : " "}`}
                            id="company"
                            name="company"
                            placeholder="Company"
                            autocomplete="none"
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
            <div className="col-lg-6 col-md-6 col-12">
                <div id="accordion" className="myaccordion">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      
                        <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" 
                        data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                         <h2 className="mb-0"> How does on-demand warehousing and fulfillment work?</h2>
                          <span className="fa-stack fa-sm">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </button>
                      
                    </div>
                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                      <div className="card-body">
                        <p>On-demand warehousing and fulfillment is the flexible concept of renting extra or under-utilized warehouse space 
                        to other companies on a temporary contract basis. The concept is rightly embraced by leading companies like AirBnB and 
                        Uber. It can be termed as a cost-effective option for immediate warehouse needs.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                     
                        <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse"
                        data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                           <h2 className="mb-0">What are the most common applications of on-demand warehousing? </h2>
                          <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </button>
                      
                    </div>
                    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                      <div className="card-body">
                        <p>Perhaps some of the best examples of on-demand fulfillment and warehousing providers include Ware2Go, Darkstore, 
                        Flexe, Flowspace, and Stord. All these well-established companies operate a wide network of warehouses globally and 
                        help merchants with immediate warehouse storage space along with valued services like packaging and shipping.</p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      
                        <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse"
                        data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <h2 className="mb-0">Are there minimum requirements to utilize Anyspaze?</h2>
                          <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </button>
                      
                    </div>
                    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                      <div className="card-body">
                        <p>No, there are no minimum requirements to rent or lease a warehouse from ANYSPAZE. The entire process is handled 
                        efficiently by experienced professionals and will help you find the best warehouse space for your inventories at your
                        desired location. </p>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingFour">
                      
                        <button className="d-flex align-items-center justify-content-between btn btn-link collapsed" data-toggle="collapse" 
                        data-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                          <h2 className="mb-0">What is Pop-Up fulfillment? </h2>
                          <span className="fa-stack fa-2x">
                            <i className="fas fa-circle fa-stack-2x"></i>
                            <i className="fas fa-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </button>
                      
                    </div>
                    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordion">
                      <div className="card-body">
                        <p>Pop-Up fulfillment is a logical solution for letting companies utilize excess warehouse capacity offered by other 
                        companies. For example, if the demand for specific product spikes during a particular season, the company can always 
                        pop-up an extra warehouse to stock the inventory.</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
</section>

       
        </React.Fragment >
    )


}

export default PageLayout(Services);