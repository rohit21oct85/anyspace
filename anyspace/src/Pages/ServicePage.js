import React, { useState, useEffect} from "react";
import PageLayout from "../HOC/NewPageLayout";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SEO from "../Components/Seo"
import { Link, NavLink } from "react-router-dom";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import { elements } from "../cons";


const ServicePage = () => {
   
    const overlay = {
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,.5)'
    }
    const container = {
        maxWidth: '1140px'
    }
    const [services, setServices] = useState();
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getServiceList`, '').then(res => {
                setServices(res.data)
            })
    },[]);
    const {page_slug} = useParams();
    const [serviceContent, setServiceContent] = useState()
    useEffect(() => {
        const slug = page_slug;
        axios.post(`${elements.API_ENDPOINT}/getServiceContent`, {slug: slug},
            ).then(res => {
                setServiceContent(res.data)
            })
    },[]);

    return (

        <React.Fragment>

        <SEO />
        
        <div className="hero-section inventory-hero">
            <div className="overlay">
            <div className="container" style={container}>
            <div className="hero-content">
                <div className="position-div">
                    <h1 className="hero__heading">
                        {page_slug.replace('-',' ')}
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
                    <li>{page_slug}</li>
                </ul>
            </div>
            </div>
            </div>
        </div>
        <div className="warehouse-wrapper">
        <div className="col-md-12">
        <div className="row">
            <div className="col-lg-4 padding-right">
                <div className="transport-services">
                    <h4>Our Services</h4>
                    <ul>
                    {services && services.map((ser, i) => {
                          return (
                            <li key={ser._id}>
                            <a href={`/${ser.slug}`}>
                                {ser.name}
                                <i className="fas fa-arrow-right"></i>
                            </a>
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
                  <NavLink to="/contact-us" target="_blank" className="cta cta__schedule">Schedule An Appointment</NavLink>
                </div>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="warehouse-overview inventory-overview">
                    <h3>{serviceContent && serviceContent.heading}</h3>   
                    <div className="overview">
                    {serviceContent && <React.Fragment>
                        <div dangerouslySetInnerHTML={{
                            __html: serviceContent.top_content
                        }}></div>
                        </React.Fragment>}
                    </div>
                    <div className="how-works">
                        <div className="img-box">
                            <img src={serviceContent && serviceContent.image} alt="" className="img-fluid" />
                        </div>
                        {serviceContent && <React.Fragment>
                        <div dangerouslySetInnerHTML={{
                            __html: serviceContent.bottom_content
                        }}></div>
                        </React.Fragment>}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        
        </React.Fragment >
    )


}

export default PageLayout(ServicePage);