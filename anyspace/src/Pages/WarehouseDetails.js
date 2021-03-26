
import React, { useEffect, useState } from "react";
import Modal from "../UI/Modal"

import PageLayout from "../HOC/PageLayout";
import CommonService from "../Common";
import { useParams } from "react-router";
import SEO from "../Components/Seo"
import {
    FaBox,
    FaHourglassHalf,
    FaStream,
    FaRupeeSign,
    FaLayerGroup
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import ContactWarehouse from "../Components/ContactWarehouse";
import ListWarehouse from "../Components/ListWarehouse";
import Loader from "../Components/Loader";
import ImageGallery from 'react-image-gallery';
import "../../node_modules/react-image-gallery/styles/scss/image-gallery.scss";
import { elements } from "../cons"



const WarehouseDetails = (props) => {

    let Images = [];

    const { warehouseId } = useParams()
    let [pageData, setPageData] = useState({})
    let [showloader, setshowloader] = useState(false);
    let [showEnquiryModal, setshowEnquiryModal] = useState(false);
    let [enquiryModalTitle, setenquiryModalTitle] = useState(false);

    const sendEnquiry = (warehouseId, wareHoueTitle) => {

        setshowEnquiryModal(true);
        setenquiryModalTitle(wareHoueTitle);
    }
    const showModalFunction = () => {
        setshowEnquiryModal(false);

    }

    useEffect(() => {

        setshowloader(true)

        CommonService.postHttp("/warehouseDetails", { warehouseId: warehouseId })
            .then(res => {

                setPageData(res.data)
                setshowloader(false)

            })
            .catch(err => {
                console.log(err)
                setshowloader(false)
            })
    }, [warehouseId]);

    const seoTags = {
        "pageTitle": `Warehouses in ${pageData.city}, Warehouses in ${pageData.state} | ANYSPAZE`,
        "PageMetaTitle": `Warehouses in ${pageData.city}, Warehouses in ${pageData.state} | ANYSPAZE`,
        "pageMetaDesc": `Search warehouses in ${pageData.city}. ${pageData.state}.. Anyspaze.com is only warehosue logistic portal in ${pageData.city}, provides excelence service`,
        pageType: "page",
        pageUrl: `http://anyspaze.com${props.location.pathname}`,
        pageImage: "http://anyspaze.com/icons/android-icon-512x512.png",
        noindex:pageData.status === "2"?true:false

    }
    const jsonLD =
    {
        "@context": "http://schema.org",
        "@type": "LocalBusiness",
        "name": pageData.warehouseName,
        "image": (pageData.images ? `https://anyspaze.blob.core.windows.net/image/${pageData.images}` : "https://anyspaze.com/icons/android-icon-192x192.png"),
        "address": {
            "@type": "PostalAddress",
            "addressLocality": (pageData.Addressline3, pageData.city),
            "addressRegion": pageData.state,
            "postalCode": pageData.pin
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "opens": pageData.shippingStart,
            "closes": pageData.shippingEnd
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "bestRating": "5",
            "worstRating": "0",
            "ratingCount": "7"
        }
    }

    return (
        <React.Fragment>
            {showloader && <Loader type="large" />}

            {!showloader && <React.Fragment>
                <SEO
                    seoData={seoTags} jsonLD={jsonLD} />
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item d-none d-sm-block"><NavLink to="/">Home</NavLink></li>
                        <li className="breadcrumb-item d-none d-sm-block"><NavLink to="/warehouses-in-india">Warehouse in India</NavLink></li>
                        {(pageData && pageData.state) &&
                            <li className="breadcrumb-item"><NavLink to={`/warehouses-in-${pageData.state.replace(/ /g, '-')}`}>Warehouse in {pageData.state}</NavLink></li>
                        }
                        {(pageData && pageData.city) &&
                            <li className="breadcrumb-item active" aria-current="page">
                                <NavLink to={`/warehouses-in-${pageData.city.replace(/ /g, '-')}`}>Warehouse in {pageData.city}</NavLink></li>
                        }
                    </ol>
                </nav>
                <div className="detail-page">




                    <div className={`container mt-5`}>
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <h1>{pageData.warehouseName}</h1>
                                {pageData.images && pageData.images.length ?
                                    <div className="container-fluid px-0 banner">
                                        <div className="row">
                                            <div className="col-12">
                                                {/* <img src={`https://anyspaze.blob.core.windows.net/image/${pageData.images[0]}`} className="img-fluid"
                                        alt={pageData.warehouseName} /> */}
                                                {pageData.images.forEach((i) => {
                                                    Images.push({
                                                        original: `${elements.imageBase}/${i}`,
                                                        thumbnail: `${elements.imageBase}/${i}`
                                                    })
                                                })
                                                }
                                                <ImageGallery items={Images}
                                                    showThumbnails={false}
                                                    lazyLoad={true}
                                                    showPlayButton={false}
                                                    showBullets={true} />;
                                </div>
                                        </div>
                                    </div> : null

                                }


                                <p className="location">Location: {pageData.Addressline3 && `${pageData.Addressline3}, `}
                                    {pageData.city && `${pageData.city}, `}
                                    {pageData.state && `${pageData.state}, `}
                                    {pageData.pin && `${pageData.pin}`}

                                </p>
                                {pageData.wareHouseDesc && <p>{pageData.wareHouseDesc}</p>}
                                {pageData.warehouseSpace &&
                                    <div className="row sectioninfo">
                                        <div className="col-3 col-sm-1">
                                            <FaBox className=" icon" />
                                        </div>
                                        <div className="col-9 col-sm-9">
                                            <span>Space Avilable</span>
                                            {pageData.warehouseSpace}+ Square Feet
                                    </div>
                                    </div>}
                                {pageData.shippingStart &&
                                    <div className="row sectioninfo">
                                        <div className="col-3 col-sm-1">
                                            <FaHourglassHalf className=" icon" />
                                        </div>
                                        <div className="col-4 col-sm-4">
                                            <span>Shipping start at</span>
                                            {pageData.shippingStart}
                                        </div>
                                        <div className="col-4 col-sm-4">
                                            <span>Shipping Ends at</span>
                                            {pageData.shippingEnd}
                                        </div>
                                    </div>}
                                <div className="row">
                                    <div className="col-12 col-sm-6"></div>
                                </div>
                                {pageData.racking &&
                                    <div className="row sectioninfo">
                                        <div className="col-3 col-sm-1">
                                            <FaStream className=" icon" />
                                        </div>
                                        <div className="col-9 col-sm-11">
                                            <h2>Racked storage</h2>
                                            <div className="row">
                                                <div className="col-12">
                                                    <span>Racking</span>
                                                    {pageData.racking}
                                                </div>
                                                <div className="col-12">
                                                    <span>Racking Position Avilable</span>
                                                    {pageData.rackPosAvilable}
                                                </div>
                                                <div className="col-12">
                                                    <span>Max height per Pallet</span>
                                                    {pageData.maxPalletHeight}
                                                </div>
                                                <div className="col-12">
                                                    <span>Max Weight per Pallet</span>
                                                    {pageData.maxRackWeight}
                                                </div>

                                            </div>

                                        </div>

                                    </div>}


                                {pageData.avilableFLoor &&
                                    <div className="row sectioninfo">
                                        <div className="col-3 col-sm-1">
                                            <FaLayerGroup className=" icon" />
                                        </div>
                                        <div className="col-9 col-sm-11">
                                            <h2>Floor storage</h2>
                                            <div className="row">
                                                <div className="col-12">
                                                    <span>Stackable Pallets</span>
                                                Yes
                                            </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <span>Single Floor Loaded Pallets</span>
                                                Yes
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                                {pageData.warehouseSpace &&
                                    <div className="row sectioninfo">
                                        <div className="col-3 col-sm-1">
                                            <FaRupeeSign className=" icon" />
                                        </div>
                                        <div className="col-9 col-sm-9">
                                            <span>Pricing</span>
                                            <button className="btn btn-link px-0"
                                                onClick={() => sendEnquiry(pageData._id, pageData.warehouseName)}
                                            >Contact us For Storage Pricing</button>
                                        </div>
                                    </div>}

                            </div>
                            <div className="col-12 col-md-4">
                                <div className="warehouse-contact">
                                    <ContactWarehouse warehouseId={pageData._id} title={pageData.warehouseName} />
                                </div>
                                <ListWarehouse location={pageData.city} />

                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>}

            <Modal
                showModal={showEnquiryModal}
                header={`Contact ${enquiryModalTitle}`}
                showModalFunction={showModalFunction}
            >


                <ContactWarehouse />



            </Modal>

            {pageData.status === "2" && <div>
                <div tabIndex="0"></div>
                <div role="dialog" className="inactive" aria-modal="true">
                    <h1>This Warehouse is not active on site. Kindly <NavLink to="/find-warehouse">search another</NavLink> </h1>
                </div>
                <div tabIndex="0"></div>
            </div>}

        </React.Fragment>
    )
}


export default PageLayout(WarehouseDetails)