import React from "react";

import PageLayout from "../HOC/NewPageLayout";
import SEO from "../Components/Seo"

const About = () => {
    
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

        <SEO />
        
<div className="hero-section about-hero">
    <div className="container" style={container}>
        <div className="hero-content">
            <div className="position-div">
                <h3 className="hero-subheading">
                    Dedicated Customers Teams & An Agile Services
                </h3>
                <h1 className="hero__heading">
                    Global Warehousing Partner To World's Famous Brands
                   
                </h1>
                <div class="dash-icon"><div></div><div></div></div>
            </div>
            <ul className="hero-breadcrumbs">
                <li><a href="#">Home</a></li>
                <li><i className="fas fa-chevron-right"></i></li>
                <li>About us</li>
            </ul>
        </div>
    </div>
</div>
<div className="reliable-section sections">
    <div className="container" style={container}>
        <div className="row">
            <div className="col-lg-6">
                <div className="img-box">
                    <img src="/dist/assets/img/about/theme_image_20 (1).jpg" alt="" className="img-fluid" />
                    <div className="box-icon">
                        <img src="/dist/assets/img/icons/Path 55.png" alt="box-icon" />
                        <h5>9.612 m</h5>
                        <p>Goods Delivered</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="reliable-content">
                    <div className="content-heading">
                       
                        <h1 className="content-title">
                            Trusted logistics expert offering scalable
                            warehouse, supply chain & transportation
                            solutions
                        </h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-md-6">
                            <div className="left-content">
                                <p>
                                    We take pride in calling ourselves
                                    the most trusted and reliable
                                    on-demand logistics provider on a
                                    global scale. With strong
                                    infrastructure facilities and an
                                    expert team of highly trained
                                    professionals, we are equipped to
                                    provide everything your business
                                    needs to gain a competitive edge in
                                    today’s bustling landscape. At
                                    ANYSPAZE, you are offered flexible
                                    and customized solutions to handle
                                    your inventories, warehousing, and
                                    distribution channels with complete
                                    efficiency and accuracy. We enable
                                    you to find cost and time saving
                                    solutions for all your inventory
                                    needs.
                                </p>
                                

                                <div className="founder">
                                    
                                    <div className="founder-sign"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="right-content">
                                <div className="quality">
                                    <h4>Quality</h4>
                                    <p>
                                        We guarantee quality in all
                                        works right from day one without
                                        charging beyond industry
                                        standards.
                                    </p>
                                </div>
                                <div className="reliability">
                                    <h4>Reliability</h4>
                                    <p>
                                        We are quick in our responses
                                        and ensure immediate solutions
                                        to all the questions of the
                                        customers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="digital-freight-section">
    <div className="container" style={container}>
        <div className="row">
            <div className="col-lg-6">
                <div className="left-content">
                    <div className="content-heading">
                        <h3 className="content-subheading">
                            Digital Warehousing That Saves Your Time
                        </h3>
                        <h1 className="content-title">
                            Stay prompt in delivering your products
                            anywhere, anytime with smart warehousing and
                            an experienced team of hard working
                            professionals
                        </h1>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="right-content">
                    <p>
                        Thanks to the latest innovations and
                        technologies for making real time visibility
                        possible across every aspect of logistics and
                        supply chain. Digital warehousing not just
                        reduces the dependency on human intervention but
                        also saves a lot of your time, which can be
                        effectively utilised to accomplish other goals
                        of your business like brand promotion. Digital
                        warehousing automates everything related to your
                        inventory, resulting in reduced human errors and
                        increased customer service.
                    </p>

                    <ul className="key-points">
                        <li>
                            <i className="fas fa-check-circle"></i>Quality
                            Control System
                        </li>
                        <li>
                            <i className="fas fa-check-circle"></i>Unrivalled workmanship
                        </li>
                        <li>
                            <i className="fas fa-check-circle"></i>100%
                            Satisfaction Guarantee
                        </li>
                        <li>
                            <i className="fas fa-check-circle"></i>Accurate
                            Testing Processes
                        </li>
                        <li>
                            <i className="fas fa-check-circle"></i>Highly
                            Professional Staff
                        </li>
                        <li>
                            <i className="fas fa-check-circle"></i>Professional and Qualified
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="price-section">
    <div className="container" style={container}>
        <div className="inner-content">
            <div className="row no-gutters">
                <div className="col-lg-6 col-md-6">
                    <div className="left-img-banner img-banner">
                        
                            <div className="banner-content">
                                <div className="box-icon">
                                    <img src="/dist/assets/img/icons/Group 301.png" alt="" />
                                </div>
                                <h4>
                                  Affordable Price, Shared Warehousing
                                </h4>
                            </div>
                       
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <div className="right-img-banner img-banner">
                     
                            <div className="banner-content">
                                <div className="box-icon">
                                    <img src="/dist/assets/img/icons/Group 318.png" alt="" />
                                </div>
                                <h4>
                                      Best in technology, Uber of Warehousing
                                </h4>

                            </div>
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

{/* <!-- Partners --> */}

<div className="service-partner-section">
    <div className="container" style={container}>
        <div className="row">
            <div className="col-lg-6">
                <div className="left-content">
                    <div className="content-heading">
                        <h3 className="content-subheading">
                            A Global Warehousing Partner to World's
                            famous brands
                        </h3>
                        <h1 className="content-title">
                            Trusted and reliable warehousing partner
                            with a global reputation and years of
                            expertise. We deliver services that are
                            result oriented.
                        </h1>
                    </div>
                    <div className="content-padding">
                        <p>
                            When it comes to offering warehouses on rent
                            or lease as per industry standards, ANYSPAZE
                            is the most preferred supplier for many
                            national and international brands. Our
                            robust and powerful solutions offer both
                            flexible and efficient warehouses equipped
                            with smart security systems and temperature
                            controlled devices for complete protection
                            and safety of your products.
                        </p>
                        <div className="service-icons">
                            <div className="icon-services">
                                <img src="/dist/assets/img/icons/Group 372.png" alt="" />
                                <h4>Transparent Pricing</h4>
                            </div>
                            <div className="icon-services">
                                <img src="/dist/assets/img/icons/Group 405.png" alt="" />
                                <h4>Fast, Efficient Delivery</h4>
                            </div>
                            <div className="icon-services">
                                <img src="/dist/assets/img/icons/Group 422.png" alt="" />
                                <h4>Warehouse Storage</h4>
                            </div>
                        </div>
                        <p>
                            We pride ourselves on providing the best
                            transport and shipping services available
                            allover the world. Our skilled personnel,
                            utilising the latest communications,
                            tracking and combined with experience
                            through integrated supply chain solutions!
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="right-img">
                    <img src="/dist/assets/img/about/theme_image_20 (1).jpg" alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    </div>
</div>
            
        
        
        </React.Fragment >
    )


}

export default PageLayout(About);