import React, { useState, useEffect }from "react";
import ContactForm from "../Components/ContactForm"
import { FaChartLine, FaMicrochip, FaWarehouse, FaShippingFast, FaClock, FaFighterJet, FaExpand, FaBox, FaUserTie, FaHandshake, FaRegIdBadge } from "react-icons/fa";
import PageLayout from "../HOC/PageLayout";
import SEO from "../Components/Seo"
import { NavLink } from "react-router-dom";
import anyspazePlaystore from "../images/anyspazePlaystore.png";
import QuickSearch from "../Components/QuickSearch"

import axios from "axios";
import { elements } from "../cons";

const Home = () => {
    
    
    return (

        <React.Fragment>

            <SEO />

            <div className="Banner">

                <div className="container">
                    <div className="row align-content-center">
                        <div className="col-12 col-md-6">

                            <div className="Banner-copy">
                                <h1>Smart Logistics Easy, Safe & Instant</h1>
                                <p>Find out how you can use our innovative technology to meet your diverse and complex logistics & supply chain needs.</p>
                                <NavLink to="/register" className="btn btn-success btn-lg mr-3">Get Started</NavLink>
                                <NavLink to="/find-warehouse" className="btn btn-danger btn-lg">Find Warehouses</NavLink>
                                <div className="playstoreBtn">
                                    <a href="https://play.google.com/store/apps/details?id=com.anyspazeapp" target="_blank" rel="noopener noreferrer" >
                                        <img src={anyspazePlaystore} alt="download app at play store" />
                                    </a>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="d-xl-block d-none">
                                <QuickSearch />
                                <NavLink style={{color:"#fff", fontSize:20, background:"rgba(0,0,0,0.7)",borderRadius:"0 0 10px 10px", padding:10, float:"right"}} to="/register">Warehouse owner register here</NavLink>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
            <div className="d-xl-none">
                <QuickSearch />
            </div>



            <div className="diamond"></div>
            <div className="spacer">
                <div className="container">

                    <div className="row justify-content-center">
                        <div className="col-12">

                            <h2 className="text-center mt-5 mb-4">WHAT IT MEANS</h2>
                        </div>
                        <div className="col-12 col-md-6">
                            <FaUserTie className="icon-left" />
                            <strong>For Clients</strong> <br />
                            Logistics on demand helps to expand your network, as needed, without worrying and zero investment for the dynamic growth of business affordably. This enables you to store goods or products closer to consumer for on time delivery and establish a more competitive Omni-channel strategy. </div>
                        <div className="col-12 col-md-6">
                            <FaHandshake className="icon-left" />
                            <strong> For Partners</strong> <br />
                            On Demand Logistics generate more profit from unused resources and build strong relations within market. Enables partners to expand their network, open more sales channels and explore new markets.
                            </div>


                    </div>
                </div>
            </div>

            <div className="diamond"></div>
            <div className="weapon">



                <div className="container">
                    <div className="row">
                        <div className="col-12">

                            <h2 className="heading">Creative and innovative logistics</h2>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="section">
                                <FaMicrochip />
                                <h2>Digital</h2>
                                <p>Powerful, yet simple and smart platform to meet your anytime warehousing and fulfilment needs. Get up and running in no time.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="section">
                                <FaExpand />
                                <h2>Scalable</h2>
                                <p>With option to store with flexibility, you can add space anytime, anyplace. One of the biggest warehouse network is just a click away.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="section">
                                <FaFighterJet />
                                <h2>Quick</h2>
                                <p>Set up your operation with minimum requirements and ready to deploy platform. Get instant access to information and reports from day one.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="diamond"></div>
            <div className="wedo" id="what-we-do">



                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2 className="heading">What We do</h2>
                            <p>
                                Connected Software - Connected Platform - Connected Team.
</p>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="section">
                                <FaWarehouse />
                                <h2>Inventory Management</h2>
                                <p>
                                    With one of India's Largest on-demand warehousing network, we have the space and services you need, when and where you need them. Easy to start, easy to use, transparency on everyday operations.. consider us an extension to your logistics department.
</p>
                            </div>
                        </div>

                        <div className="col-12 col-sm-4">
                            <div className="section">
                                <FaShippingFast />
                                <h2>Distribution Network</h2>
                                <p>
                                    Shorten the last-mile for retail distribution by storing your goods closer to intake centers. A simple yet powerful, technology enabled and comprehensive distribution network enabling you to ship your consignments on-time and without any hassles.
</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="section">
                                <FaBox />
                                <h2>Order Processing & Fulfilment</h2>
                                <p>
                                    Fetch orders from multiple portals, multiple systems on to a single platform to uniformly process & fulfill orders without any delay. Get stock confirmations and real-time data for fast execution of orders exceeding expectation of your customers.
</p>
                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <NavLink className="btn btn-primary btn-lg" to="/services">Know more</NavLink>
                        </div>


                    </div>
                </div>
            </div>

            <div className="diamond"></div>
            <div className="you-get" id="what-you-get">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="heading">What Clients Get</h2>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="section">
                                <FaWarehouse />
                                <h2 className="sub-heading">Instant Access</h2>
                                <p>Single platform for all your logistics requirements, anywhere in India. No Minimum Guarantee, No Lock-In. Start your operations right from the word GO. Improve your response times and get ahead of competition.</p>
                            </div>

                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="section">
                                <FaClock />
                                <h2 className="sub-heading">Save Time & Cost</h2>
                                <p> One Contract. No Committments. No Deposits. No Capital Investments. Get the capacity and services you need, anywhere and anytime.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="section">
                                <FaChartLine />
                                <h2 className="sub-heading">Control at scale</h2>
                                <p> On-Demand Logistics is all about Scaling. Whether you have a short-term requirement, or a need for long-term solution to drive innovation, use ANYSPAZE to bridge the gaps and meet your strategic goals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="diamond"></div>
            <div className="about-us" id="about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6">
                            <h2 className="heading">About Us</h2>
                            <p>
                                DIsrupting a $250 Billion logistics industry by introducing and building smarter supply chain models for retailers and brands to move their inventory faster and efficiently, ANYSPAZE is a technology enabled logistics service provider entity.
</p>

                            <h2 className="heading">Vision</h2>
                            <p>
                                We aspire to be one of India’s Leading Supply Chain Management Company. We are committed to re-shape the current landscape of several Supply Chain Activities in India through our dedication and hard work, backed by technology enabled solutions and aggressive leadership.
</p>
                            <NavLink className="btn btn-primary btn-lg" to="/p/about-us">Read more</NavLink>

                        </div>


                        <div className="col-12 col-sm-6">
                            <img src="/images/about-anyspaze.jpg" alt="know more about anyspaze" className="img-fluid" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="contactus" id="contact-us">
                <ContactForm />
            </div>
        </React.Fragment >
    )


}

export default PageLayout(Home);