import React, { useState, useEffect} from "react";
import PageLayout from "../HOC/NewPageLayout";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import SEO from "../Components/Seo"
import { Link, NavLink } from "react-router-dom";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import { elements } from "../cons";
import './industry.css';
import CallModal from "./CallModal";

const IndustryPage = () => {
    const {slug} = useParams();
    const overlay = {
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,.5)'
    }
    const container = {
        maxWidth: '1140px'
    }
    const [industry, setIndustry] = useState()
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getIndustryList`, '').then(res => {
                setIndustry(res.data)
            })
    }, [slug])
    
    const [industryContent, setindustryContent] = useState("");
    useEffect(() => {
        const url = window.location.pathname;
        const page_slug = slug;
        console.log(url.slice('/'))
        axios.post(`${elements.API_ENDPOINT}/getIndustryContent`, {slug: page_slug})
            .then(res => {
                setindustryContent(res.data)
            }).catch(err => {
                console.log(err)
            })
    },[slug]);
    
    return (
        <React.Fragment>
        <SEO />
<div className="hero-section about-hero" style={{ overflow: 'hidden'  }}>
    <img src={industryContent && industryContent.banner_image} style={{ width: '100%' }}/>
    <div className="container" style={container}>
        <div className="hero-content">
            <div className="position-div">
               
                <h1 className="hero__heading">
                {slug.replace('-',' ')}
                </h1>

                 <div className="dash-icon">
							<div></div>
							<div></div>
						</div> 
            </div>
            <ul className="hero-breadcrumbs">
                <li><a href="#">Home</a></li>
                <li><i className="fas fa-chevron-right"></i></li>
                <li>{slug.replace('-',' ')}</li>
            </ul>
        </div>
    </div>
</div>
<div className="warehouse-wrapper financial-instituion-wrapper">
    <div className="container" style={container}>
        <div className="row">
            <div className="col-lg-8 col-md-12 col-12">
                <div className="warehouse-overview inventory-overview">
                    <div className="overview">
                        <h4>{industryContent && industryContent.heading_top}</h4>
                        {industryContent && <React.Fragment>
                        <div dangerouslySetInnerHTML={{
                            __html: industryContent.top_content
                        }}></div>
                        </React.Fragment>}
                    </div>
                <div className="need-digitization">
                    <h4>{industryContent && industryContent.heading_middle}</h4>
                    {industryContent && <React.Fragment>
                        <div dangerouslySetInnerHTML={{
                            __html: industryContent.middle_content
                        }}></div>
                        </React.Fragment>}
                </div>
                <div className="secure-safe-disposal">
                     <h4>{industryContent && industryContent.heading_bottom}</h4>
                     {industryContent && <React.Fragment>
                        <div dangerouslySetInnerHTML={{
                            __html: industryContent.bottom_content
                        }}></div>
                        </React.Fragment>}
                </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="transport-wrapper">
                
                <h3 className="section-main-title">Other Industries</h3>
                 <div className="right-content">
                    <div className="showcase-records">
                        {industry && industry.map( (ind, index) => {
                            return (
                                <NavLink to={`/industry/${ind.slug}`} key={index} className="records-block">
                                    <div className="records-block-title">
                                        <h4>{ind.name}</h4>
                                    </div>
                                </NavLink>
                            )
                        })}
                        
                    </div>
                      </div>
                <div className="schedule-appointment">
                    <div className="overlay">
                        <h4>Dedicated Customer Teams &amp; Agile Services</h4>
                        <p>
                            Our worldwide presence ensures the timeless, cost
                            efficiency compliance adherence required to
                            ensure your production timelines are met.
                        </p>
                        
                        
                         <a href="#" data-target="#callusNow" data-toggle="modal" className="cta cta__schedule">Schedule An Appointment</a>
                        
                        
                    </div>
                </div>
                <div className="download">
                  <div className="download-block">
                    <a href="#"><h4>Download Brochure</h4> <span><i className="fas fa-file-pdf"></i></span> </a>
                  </div>
                </div>
                  </div>
            </div>
        </div>
    </div>
</div>

        <CallModal/>

        </React.Fragment >
    )


}

export default PageLayout(IndustryPage);