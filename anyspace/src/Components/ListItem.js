import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaLayerGroup, FaStream, FaSpaceShuttle } from "react-icons/fa";
import Modal from "../UI/Modal";
import ContactWarehouse from "../Components/ContactWarehouse";
import { elements } from "../cons"

const ListItem = (props) => {
    let [showEnquiryModal, setshowEnquiryModal] = useState(false);
    let [enquiryModalTitle, setenquiryModalTitle] = useState(false);

    const sendEnquiry = (warehouseId, wareHoueTitle) => {
        setshowEnquiryModal(true);
        setenquiryModalTitle(wareHoueTitle);
    }
    const showModalFunction = () => {
        setshowEnquiryModal(false);

    }

    return (
        <React.Fragment>
            <div className="result-list ">

                {props.warehouseList && props.warehouseList.map((warehouse) => {

                    return <div
                        key={warehouse._id}
                        id={`storelist-${warehouse._id}`}
                        className="result-items"
                    >
                        <div className="row">
                            <div className="col-4 col-md-4">




                                {warehouse.images.length ? <div className="result-items-image">
                                    <NavLink to={`/warehouse/${warehouse.slug}/${warehouse._id}`}>
                                        <img src={`${elements.imageBase}/${warehouse.images[0]}`}
                                            alt={warehouse.warehouseName} className="img-fluid"
                                            onError={e => { e.target.src = "/images/image-placeholder.png" }} />
                                            {warehouse.images.length > 1 ?<small>{`+${warehouse.images.length -1} more image`}</small>:""}
                                    </NavLink>
                                </div> : <div className="result-items-image no-image">
                                        <NavLink to={`/warehouse/${warehouse.slug}/${warehouse._id}`}> <img src="/images/image-placeholder.png" alt="no image uploaded" className="img-fluid" />
                                        </NavLink></div>
                                }


                            </div>
                            <div className="col-12 col-md-8">
                                <h2>
                                    <NavLink to={`/warehouse/${warehouse.slug}/${warehouse._id}`}>
                                        {warehouse.warehouseName}
                                    </NavLink>
                                </h2>

                                <div className="location">
                                    {warehouse.Addressline3 && `${warehouse.Addressline3}, `}
                                    {warehouse.city && `${warehouse.city}, `}
                                    {warehouse.state && `${warehouse.state}`}</div>


                                <div className="row">
                                    <div className="col-12 col-sm-4 waretype">
                                        <FaSpaceShuttle />{warehouse.warehouseSpace} sq.ft. space

                                    </div>
                                    {warehouse.racking ? <div className="col-12 col-sm-4 waretype"><FaStream /> Racking Storage</div> : null}
                                    {warehouse.avilableFLoor ? <div className="col-12 col-sm-4 waretype"><FaLayerGroup /> Floor Storage</div> : null}

                                </div>
                                <div className="waredesc">
                                    {warehouse.wareHouseDesc}
                                </div>

                                <div className="actions">
                                    <NavLink className="btn btn-success" to={`/warehouse/${warehouse.slug}/${warehouse._id}`}>
                                        View Details
                                        </NavLink>
                                    <button title={`contact ${warehouse.warehouseName}`} onClick={() => sendEnquiry(warehouse._id, warehouse.warehouseName)} className="btn btn-danger">Contact </button>  </div>
                            </div>
                        </div>
                    </div>

                })}
            </div>

            <Modal
                showModal={showEnquiryModal}
                header={`Contact ${enquiryModalTitle}`}
                showModalFunction={showModalFunction}
            >


                <ContactWarehouse />



            </Modal>


        </React.Fragment>
    )

}


export default ListItem;