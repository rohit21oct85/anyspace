import React, { useState, useEffect} from "react";
import PageLayout from "../HOC/NewPageLayout";
import { Navbar, Nav, NavDropdown,Accordion,Card,Button } from "react-bootstrap";
import SEO from "../Components/Seo"
import { Link, NavLink } from "react-router-dom";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import { elements } from "../cons";
import './services.css';
import CallModal from "./CallModal";

const OrderProcessing = () => {
   
    const overlay = {
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,.5)'
    }
    const container = {
        maxWidth: '1200px'
    }
    const [services, setServices] = useState();
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getServiceList`, '').then(res => {
                setServices(res.data)
            })
    },[]);
    const slug = window.location.pathname;
    const [serviceContent, setServiceContent] = useState()
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getServiceContent`, {slug: slug.replace('/','')},
            ).then(res => {
                setServiceContent(res.data)
            })
    },[slug]);

    return (

        <React.Fragment>

        <SEO />
        
        <div className="hero-section inventory-hero" style={{  overflow: 'hidden'  }}>
        <img src={serviceContent && serviceContent.headmask_image} style={{ width: '100%' }}/>
            <div className="overlay">
            <div className="container" style={container}>
            <div className="hero-content">
                <div className="position-div">
                    <h1 className="hero__heading">
                    ORDER PROCESSING FULFILLMENT
                    </h1>
                    <div className="dash-icon">
                        <div></div>
                        <div></div>
                    </div>

                </div>
                <ul className="hero-breadcrumbs">
                    <li><Link to="/">Home</Link></li>
                    <li><i className="fas fa-chevron-right"></i></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><i className="fas fa-chevron-right"></i></li>
                    <li>ORDER PROCESSING FULFILLMENT</li>
                </ul>
            </div>
            </div>
            </div>
        </div>
        <div className="warehouse-wrapper container">
        <div className="col-md-12">
        <div className="row">
            <div className="col-lg-4 padding-right">
                <div className="transport-services">
                    <h4>Our Services</h4>
                    <ul>
                    {services && services.map((ser, i) => {
                          return (
                            <li key={ser._id}>
                            <NavLink to={`/${ser.slug}`}>
                                {ser.name}
                                <i className="fas fa-arrow-right"></i>
                            </NavLink>
                            </li>
                          );
                        })}
                    </ul>
                </div>
                <div className="schedule-appointment">
                    <div className="overlay" style={overlay}>
                    <h4>Dedicated Customer Teams & Agile Services</h4>
                    <p>
                        Our worldwide presence ensure the timeless, cost
                        efficiency compliance adherence required to
                        ensure your production timelines are met.
                    </p>
                  <NavLink to="#" data-target="#callusNow" data-toggle="modal" className="cta cta__schedule">Schedule An Appointment</NavLink>
                </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="warehouse-overview inventory-overview">
                    <div className="overview">
                    <h3>Overview</h3>
                    {serviceContent && <React.Fragment>
                        <div dangerouslySetInnerHTML={{
                            __html: serviceContent.overview
                        }}></div>
                        </React.Fragment>}
                    </div>
                    <div className="stats">
                        <h4>Stats & Charts</h4>
                        <div className="row align-items-center">
                            <div className="col-lg-7">
                            {serviceContent && <React.Fragment>
                        <div dangerouslySetInnerHTML={{
                            __html: serviceContent.stats
                        }}></div>
                        </React.Fragment>}
                            </div>
                            <div className="col-lg-5">
                                <div className="pie-img">
                                    <img src={serviceContent && serviceContent.stats_image} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="how-works">
                        <h4>How It Works?</h4>
                        {serviceContent && <React.Fragment>
                        <div dangerouslySetInnerHTML={{
                            __html: serviceContent.how_top_content
                        }}></div>
                        </React.Fragment>}
                        <div className="img-box">
                            <img src={serviceContent && serviceContent.how_image} alt="" className="img-fluid" />
                        </div>
                        <div className="insure">
                        {serviceContent && <React.Fragment>
                        <div dangerouslySetInnerHTML={{
                            __html: serviceContent.how_bottom_content
                        }}></div>
                        </React.Fragment>} 
                        </div>
                    </div>

                    <div className="why-us">
                        <h4>Why Us?</h4>
                        
                        {serviceContent && <React.Fragment>
                        <div dangerouslySetInnerHTML={{
                            __html: serviceContent.whyus_content
                        }}></div>
                        </React.Fragment>}

                        <div className="insure">
                            <div className="insure-block">
                                <div className="icon">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="insure-block-content">
                                    <h5>{serviceContent && <React.Fragment>
                                    <div dangerouslySetInnerHTML={{
                                        __html: serviceContent.pointer_one_heading
                                    }}></div>
                                    </React.Fragment>}</h5>
                                {serviceContent && <React.Fragment>
                                <div dangerouslySetInnerHTML={{
                                    __html: serviceContent.pointer_one_content
                                }}></div>
                                </React.Fragment>}
                                </div>
                            </div>

                            <div className="insure-block">
                                <div className="icon">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="insure-block-content">
                                    <h5>{serviceContent && <React.Fragment>
                                    <div dangerouslySetInnerHTML={{
                                        __html: serviceContent.pointer_two_heading
                                    }}></div>
                                    </React.Fragment>}</h5>
                                {serviceContent && <React.Fragment>
                                <div dangerouslySetInnerHTML={{
                                    __html: serviceContent.pointer_two_content
                                }}></div>
                                </React.Fragment>}
                                </div>
                            </div>
                            <div className="insure-block">
                                <div className="icon">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="insure-block-content">
                                    <h5>{serviceContent && <React.Fragment>
                                    <div dangerouslySetInnerHTML={{
                                        __html: serviceContent.pointer_three_heading
                                    }}></div>
                                    </React.Fragment>}</h5>
                                {serviceContent && <React.Fragment>
                                <div dangerouslySetInnerHTML={{
                                    __html: serviceContent.pointer_three_content
                                }}></div>
                                </React.Fragment>}
                                </div>
                            </div>
                            <div className="insure-block">
                                <div className="icon">
                                    <i className="fas fa-check"></i>
                                </div>
                                <div className="insure-block-content">
                                    <h5>{serviceContent && <React.Fragment>
                                    <div dangerouslySetInnerHTML={{
                                        __html: serviceContent.pointer_four_heading
                                    }}></div>
                                    </React.Fragment>}</h5>
                                {serviceContent && <React.Fragment>
                                <div dangerouslySetInnerHTML={{
                                    __html: serviceContent.pointer_four_content
                                }}></div>
                                </React.Fragment>}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="key-benefits">
                        <h4>Key benefits</h4>
                        <div className="accordions">
                        <Accordion defaultActiveKey="0">
                            <Card>
                                <Card.Header  className="accordion-item">
                                    <Accordion.Toggle  className="accordion-title" as={Button} variant="link" eventKey="0">
                                        <h2>
                                            {serviceContent && <React.Fragment>
                                        <div dangerouslySetInnerHTML={{
                                            __html: serviceContent.keybenifit_one_heading
                                            }}>
                                        </div>
                                        </React.Fragment>}
                                            <i className="fas fa-chevron-down"></i>
                                        </h2>
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="accordion-content" eventKey="0">
                                    <Card.Body>
                                        {serviceContent && <React.Fragment>
                                        <div dangerouslySetInnerHTML={{
                                            __html: serviceContent.keybenifit_one_content
                                        }}></div>
                                        </React.Fragment>}
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header  className="accordion-item">
                                <Accordion.Toggle className="accordion-title" as={Button} variant="link" eventKey="1">
                                    <h2>
                                    {serviceContent && <React.Fragment>
                                <div dangerouslySetInnerHTML={{
                                    __html: serviceContent.keybenifit_two_heading
                                }}></div>
                                </React.Fragment>}
                                        <i className="fas fa-chevron-down"></i>
                                    </h2>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="accordion-content" eventKey="1">
                                <Card.Body>
                                    {serviceContent && <React.Fragment>
                                    <div dangerouslySetInnerHTML={{
                                        __html: serviceContent.keybenifit_two_content
                                    }}></div>
                                    </React.Fragment>}
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>

                            <Card>
                                <Card.Header  className="accordion-item">
                                <Accordion.Toggle className="accordion-title" as={Button} variant="link" eventKey="2">
                                    <h2>
                                    {serviceContent && <React.Fragment>
                                    <div dangerouslySetInnerHTML={{
                                        __html: serviceContent.keybenifit_three_heading
                                    }}></div>
                                    </React.Fragment>}
                                        <i className="fas fa-chevron-down"></i>
                                    </h2>
                                </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse className="accordion-content" eventKey="2">
                                <Card.Body>
                                {serviceContent && <React.Fragment>
                                <div dangerouslySetInnerHTML={{
                                    __html: serviceContent.keybenifit_three_content
                                }}></div>
                                </React.Fragment>}
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>  
                            
    <CallModal />
        
        </React.Fragment >
    )


}

export default PageLayout(OrderProcessing);