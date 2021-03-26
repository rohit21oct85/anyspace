import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom"
import { elements } from "../cons";
import {useSelector} from "react-redux"

import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa"
import anyspazePlaystore from "../images/anyspazePlaystore.png"
import axios from "axios";



const Footer = () => {
    
    const stateList = useSelector(state=>state.commonData.stateData)
    
    return (
        <React.Fragment>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mt-5 mb-4">
                            <h3>Warehouses by states</h3>
                        </div>

                    </div>

                    <ul className="row warehhouse-by-state">
                        {stateList && stateList.map((state, i) => {
                            return <li key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <NavLink to={`/warehouses-in-${state.slug}`}>{state.name}</NavLink>
                            </li>
                        })}

                    </ul>

                </div>
                <div className="secondary-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                            <div className="playstoreBtn-footer">
                        <a href="https://play.google.com/store/apps/details?id=com.anyspazeapp" target="_blank" rel="noopener noreferrer">
                            <img src={anyspazePlaystore} alt="download app at play store"/>
                        </a>
                        </div>
                            </div>

                            <div className="col-12">
                                <p className="mb-0">* By using this site your are agree to terms & conditions and policies of ANYSPAZE.com</p>
                                <p className="mb-5">** Images, trademarks, logos and other assets are related to their respectiv owners, who disclaim proprietary interest for such assets.</p></div></div>
                        <div className="row align-items-center">

                            <div className="col-12 col-lg-9">

                                <ul className="footer-links">
                                    <li>
                                        <NavLink to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/services" className="nav-link" >Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/warehouses-in-india">Warehouses in India</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/find-warehouse">Find Warehouse</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/terms-of-service">Terms of Service</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/contact-us">Contact Us</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-lg-3 footer-social">
                                We are social
                            <a href="https://www.facebook.com/Anyspaze-106842394308758" rel="noopener noreferrer" target="_blank"><FaFacebook />
                            <span className="sr-only">Facebook</span>
                            </a>
                                <a href="https://twitter.com/anyspaze" rel="noopener noreferrer" target="_blank"> <FaTwitter />
                                <span className="sr-only">Twitter</span>
                                </a>
                                <a href="https://www.instagram.com/anyspaze/" rel="noopener noreferrer" target="_blank"> <FaInstagram />
                                <span className="sr-only">Instagram</span></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 copyright">

                                &copy; 2020 ANYSPAZE.COM
                        </div>
                            <div className="col-12 col-sm-6 developedby">

                                <a href="http://brillinfotech.com/" rel="noopener noreferrer" target="_blank"
                                    title="developed by Brill Infotech, web development company in India">
                                    Developed By: Brill Infotech
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </React.Fragment>
    )
}
export default Footer