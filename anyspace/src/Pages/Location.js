import React, { useState, useEffect } from "react";
import PageLayout from "../HOC/NewPageLayout";
import SEO from "../Components/Seo"
import { Link, NavLink, useParams,useHistory } from "react-router-dom";
import axios from "axios";
import { elements } from "../cons";
import './warehouseRent.css';
import CallModal from "./CallModal";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Location = () => {
    const history = useHistory();
    const { location } = useParams();
    const [stateList, setstateList] = useState();
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getStateList`, '',
            ).then(res => {
                setstateList(res.data);
            })
    }, []);

    const [client, setClient] = useState()
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getClientList`, '')
        .then(res => setClient(res.data)).catch(err => console.log(err))
    }, []);

    const [testimonial, setTestimonial] = useState()
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getTestimonialList`, '')
        .then(res => setTestimonial(res.data)).catch(err => console.log(err))
    }, []);

    const [locationContent, setLocationContent] = useState()
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getLocationContent`, {location: location}).then(res => {
            if(res.data){
                setLocationContent(res.data)
            }
        })
    },[location]);
    const responsive_slider_option = {
        0:{
            dots:true,
            items:2,
        },
        600:{
            dots:true,
            items:3,
        },
        1000:{
            dots:true,
            items:4,
            
        }
    };
    
    const responsive_slider_option_single = {
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            dots:true,
            items:1,
            
        }
    };

    const [SubWarehouse, setSubWarehouse] = useState();
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/WarehouseListByState`, {state: location}).then(res => {
            setSubWarehouse(res.data);
        })
    },[location]);



   

    return (
        <React.Fragment>
        <SEO />

<div className="hero-section about-hero">
    <div className="container">
        <div className="hero-content">
            <div className="position-div">
                <h1 className="hero__heading">
                   <span className="hero__heading_bold">WAREHOUSE FOR RENT</span> <br /> IN {location.toUpperCase()}
                </h1>
                    <div className="dash-icon">
							<div></div>
							<div></div>
					</div> 
					<button  type="button" data-toggle="modal" data-target="#callusNow" className="btn cta cta__subscribe btn-default were_head_btn">
                            <div className="inner">
                                    <div className="left">CONNECT WITH OUR SOLUTIONS EXPERT</div>
                                    <div className="right"><span></span></div>
                                </div>
                </button>
                 <button className="btn cta cta__subscribe btn-default were_head_btn">
                            <div className="inner">
                                    <div className="left">REGISTERED PROPERTIES</div>
                                    <div className="right"><span></span></div>
                                </div>
                </button>
            </div>
             
            <ul className="hero-breadcrumbs">
                <li><a href="#">Home</a></li>
                <li><i className="fas fa-chevron-right"></i></li>
                <li>Warehouse For Rent In {location.toUpperCase()}</li>
            </ul>
        </div>
    </div>
</div>
<div className="section warehouse-space-rent">
    <div className="container warehouse-wrapper">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-12">
                <h2 className="warehouse_title">
                    <span className="warehouse_title_bold">WAREHOUSE & GODOWN IN {location.toUpperCase()}:</span> FAST-TRACK YOUR BUSINESS</h2>
                    <div className="dash-icon"><div></div><div></div></div>
                    {locationContent && <React.Fragment>
                        <div dangerouslySetInnerHTML={{
                            __html: locationContent.top_content
                        }}></div>
                        </React.Fragment>}
            </div>
        </div>
    </div>
            <div className="container warehouse_feature">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 order-md-1 order-2">
                        <div className="main_feature_area">
                            <div className="feature_icon">
                                <i className="fas fa-home"></i>
                            </div>
                            <div className="feature_text_area">
                                <h2>SPACIOUS</h2>
                                <p>To cater to varying business needs, we ensure to provide you spacious warehouses so as to make your business process smooth.</p>
                            </div>
                        </div>

                        <div className="main_feature_area">
                            <div className="feature_icon">
                            <i className="fas fa-shopping-cart"></i>
                            </div>
                            <div className="feature_text_area">
                                <h2>PROXIMITY TO MARKET</h2>
                                <p>To cater to varying business needs, we ensure to provide you spacious warehouses so as to make your business process smooth.</p>
                            </div>
                        </div>

                        <div className="main_feature_area">
                            <div className="feature_icon">
                            <i className="fas fa-arrows-alt"></i>
                            </div>
                            <div className="feature_text_area">
                                <h2>VARIABLE SIZES</h2>
                                <p>To cater to varying business needs, we ensure to provide you spacious warehouses so as to make your business process smooth.</p>
                            </div>
                        </div>

                        <div className="main_feature_area">
                            <div className="feature_icon">
                            <i className="fas fa-lock"></i>
                            </div>
                            <div className="feature_text_area">
                                <h2>A PROFESSIONAL TOUCH</h2>
                                <p>To cater to varying business needs, we ensure to provide you spacious warehouses so as to make your business process smooth.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 order-md-2 order-1">
                    {locationContent && (
                        <OwlCarousel className="owl-theme owl-carousel feature_image"
                        id="feature_image_single"
                        loop
                        margin={5}
                        items={1}
                        dots={true}
                        responsive={true}
                        responsive={responsive_slider_option_single}
                        autoplay={true}>
                            <div className="item">
                            <img src={locationContent && locationContent.slider_image_1} alt="" className="img-fluid"/>
                            </div>
                            
                            <div className="item">
                            <img src={locationContent && locationContent.slider_image_2} alt="" className="img-fluid"/>
                            </div>
                            
                            
                            <div className="item">
                            <img src={locationContent && locationContent.slider_image_3} alt="" className="img-fluid"/>
                            </div>
                            
                            <div className="item">
                            <img src={locationContent && locationContent.slider_image_4} alt="" className="img-fluid"/>
                            </div>
                                
                            
                        </OwlCarousel>
                        )}
                    </div>
                </div>
                
                <div className="col-lg-12 col-md-12 col-12 btn_whole">
                <button type="button" data-toggle="modal" data-target="#callusNow" className="btn cta cta__subscribe btn-default">
                                    <div className="inner">
                                            <div className="left">Call  Now</div>
                                            <div className="right"><span></span></div>
                                        </div>
                                    
                                </button>
                                
                </div>
            </div>
        </div>

<div className="seaction warehouse-available">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 col-md-12 col-12 warehouse-available-heading">
                <h2> Available Commercial and Industrial Warehouse on Rent </h2>
                <h3>Looking For Other Locations</h3>
            </div>
        </div>
    </div>
    <div className="container">
        <div className="row">
            
        {SubWarehouse && SubWarehouse.map((warehouse, index) => {
            return (
                <div className="col-md-3 location_nm_details">
                    <NavLink to={`/warehouse-list-in-${location}-${warehouse.city}`}>
                    <i className="fas fa-map-marker-alt mr-2"></i>
                        Warehouse in {warehouse.city.toUpperCase()}
                    </NavLink>
                </div>

            );
        })}        
            
            

        </div>
        <div className="dash-icon">
			<div></div>
			<div></div>
		</div>
    </div>
    <div className="container">
        <div className="row">   
            <div className="col-lg-12 col-md-12 col-12 warehouse-available">
                <h2><span className="warehouse_title_bold">BEST WAREHOUSE IN {location.toUpperCase()}</span></h2>
                <h2>FOR ALL YOUR BUSINESS REQUIREMENTS</h2>
                <div className="row">
                {locationContent && <React.Fragment>
                        <div className="col-md-12" dangerouslySetInnerHTML={{
                            __html: locationContent.bottom_content
                        }}></div>
                        </React.Fragment>}
                </div>        
            </div>
        </div>
    </div>
    <div className="container">
        <div className=" how-to-get-wr">
            <h3>HOW TO GET A WAREHOUSE IN {location.toUpperCase()}?</h3>
            <div className="row">
                <div className="col-lg-4 col-md-12 col-12">
                    <div className="how-to-gt-part how-to-gt-part1">
                        <div className="how-wr-step">
                            <h6>EXPLORE WAREHOUSE</h6>
                            <p>Our solutions managers will help you find the best warehouse for your business needs.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                <div className="how-to-gt-part how-to-gt-part2">
                        <div className="how-wr-step">
                            <h6>Fix a Meetup</h6>
                            <p>Fix a meetup for further discussions with one of our solutions managers.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12 col-12">
                    <div className="how-to-gt-part how-to-gt-part3">
                        <i className="far fa-check-circle over_circle"></i>
                        <div className="how-wr-step how-wr-step_red">
                            <h6>The Property Is Yours!</h6>
                            <span className="red-text-data">After finalizing the deal, the property is yours!</span>
                        </div>
                    </div>
                </div>
        </div>
      </div>
</div>
</div>    

<div className="section showcase_area">
    <div className="container">
        <h2>Members Showcase = warehouse space  ✓ Sorted</h2>
        <p className="showcase_area_sub">Discover how we enable and empower large multinationals and growing enterprises to succeed.</p>
        <div className="row">
            <div className="col-lg-6 col-mg-12 col-12">
                <div className="show_case_part">
                    <div className="showcase_text">
                    "{testimonial &&  testimonial[0].client_message}"
                    </div>
                    <div className="show_case_user">
                        <div className="showcase_user_img">
                           <img  src={testimonial &&  testimonial[0].client_image} width="351" height="351" alt="ofcspc_clients" title="ofcspc_clients"/>
                        </div>
                        <div className="showcase_user_about">
                            <span className="user_name"> &nbsp; {testimonial &&  testimonial[0].client_name}</span>
                            <p> {testimonial &&  testimonial[0].client_company}</p>
                            <div className="rating_showcae_user">
                                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="show_case_part">
                    <div className="showcase_text showcase_text_bottom">
                    "{testimonial &&  testimonial[1].client_message}"
                    </div>
                    <div className="show_case_user">
                        <div className="showcase_user_miner">
                           <img  src={testimonial &&  testimonial[1].client_image} width="58" height="58" alt="ofcspc_clients" title="ofcspc_clients"/>
                        </div>
                        <div className="showcase_user_about">
                            <span className="user_name"> &nbsp; "{testimonial &&  testimonial[1].client_name}"</span>
                            <p> {testimonial &&  testimonial[1].client_company}</p>
                            <div className="rating_showcae_user">
                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
                <div className="show_case_part">
                    
                    <div className="show_case_user order-md-2 order-1">
                        <div className="showcase_user_miner">
                           <img  src={testimonial &&  testimonial[2].client_image} width="58" height="58" alt="ofcspc_clients" title="ofcspc_clients"/>
                        </div>
                        <div className="showcase_user_about order-md-1 order-2">
                            <span className="user_name"> &nbsp; {testimonial &&  testimonial[2].client_name}</span>
                            <p>{testimonial &&  testimonial[2].client_company}</p>
                            <div className="rating_showcae_user" >
                            <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                    <div className="showcase_text showcase_text_top">
                        "{testimonial &&  testimonial[2].client_message}"
                    </div>
                </div>
            </div>
        </div>
        <hr />
        <div className="client_side">
            <span className="client_head">CLIENTS STREAM
                <div className="dash-icon">
        			<div></div>
        			<div></div>
        		</div>
            </span>
            
            {client && (
            <OwlCarousel 
                id="feature_image"
                loop
                margin={5}
                items={5}
                dots={true}
                autoplay={true}
                responsive={true}
                responsive = {responsive_slider_option}
            >
                {client.map((client_image, index) => {
               
                return (
                    <>
                    <div className="item">
                       <img src={client_image.client_image}/>
                    </div>
                    </>
                );
                })}
            </OwlCarousel>
            )}
            
        
        </div>
        



</div>
</div>
<div className="section">
    <div className="container have-qustion">
        <div className="have_qustion_main">
            <h2>HAVE QUESTIONS TO ASK?</h2>
            <p>Let our experts handle your queries. We have satisfied 18,72,000+ minutes over call :)</p>
        </div>
        <div className="have_qustion_btn">
                <div className="col-lg-12 col-md-12 col-12 btn_whole">
        <button type="button" data-toggle="modal" data-target="#callusNow"  className="btn cta cta__subscribe btn-default">
                            <div className="inner">
                                    <div className="left">Call Us Now</div>
                                    <div className="right"><span></span></div>
                                </div>
                        </button>
        </div>
           </div>     
    </div>
</div>



<CallModal />

</React.Fragment>)



}

export default PageLayout(Location);