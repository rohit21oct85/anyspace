import React, { useState, useEffect } from "react";
import AdminLayout from "../HOC/AdminLayout"
import { Navbar, Form } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { NavLink } from "react-router-dom";
import { FaBolt, FaSpinner, FaCheckCircle, FaCrosshairs, FaTimesCircle } from "react-icons/fa";
import CommonService from '../Common';
import { useParams } from "react-router-dom";
import { elements } from "../cons";
import FileUpload from "../UI/FileUpload";
import axios from "axios";
import { useSelector } from "react-redux";

const AddWarehouse = () => {
    const stateList = useSelector(state=>state.commonData.stateData)
    const { register, handleSubmit, errors, setValue } = useForm();
    let [imageToUpload, setImageToUpload] = useState();
    let [imageUploadData, setImageUploadData] = useState();
    let [imageToRemove, setImageToRemove] = useState([]);
    const token = useSelector(state => state.login.token);
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        }
    }


    const [formData, setFormData] = useState({});
    const [showRackedStage, setshowRackedStage] = useState(false)
    const [showFloorStage, setshowFloorStage] = useState(false)
    const [wareHouseAdded, setWareHouseAdded] = useState(false)
    const [wareHouseAddingFailed, setwareHouseAddingFailed] = useState(false)
    const [isLoading, setisLoading] = useState(false);
    let { warehouseId } = useParams()


    const deleteImageFromServer = (e, image) => {
        e.preventDefault();
        console.log(image)
        const newArr = [...imageToRemove, image]
        setImageToRemove(newArr)
        let Images = formData.images.filter(n => !newArr.includes(n))

          let newformdata=   {...formData,images:Images}
        setFormData(newformdata)
    }

    useEffect(() => {

        if (warehouseId) {
            CommonService.getHttp('/warehouse', { warehouseId: warehouseId })
                .then(
                    res => {
                        if (res.data.racking) { setshowRackedStage(true) }
                        if (res.data.avilableFLoor) { setshowFloorStage(true) }
                        setFormData(res.data)
                        setValue("state", res.data.state)
                        setValue("shippingStart", res.data.shippingStart)
                        setValue("shippingEnd", res.data.shippingEnd)
                        setValue("racking", res.data.racking)
                        setValue("maxPalletHeight", res.data.maxPalletHeight)
                        setValue("maxRackWeight", res.data.maxRackWeight)
                        setValue("warehouseType", res.data.warehouseType)
                        setValue("electricityLoad", res.data.electricityLoad)
                        setValue("Skylight", res.data.Skylight)
                        setValue("turbovents", res.data.turbovents)

                        setValue("parkingArea", res.data.parkingArea)
                        setValue("FSSAIApproved", res.data.FSSAIApproved)
                        setValue("drugLicensed", res.data.drugLicensed)
                        setValue("exciseApproved", res.data.exciseApproved)
                        setValue("security", res.data.security)
                        setValue("CCTVSurveillance", res.data.CCTVSurveillance)
                        setValue("fireExtinguishers", res.data.fireExtinguishers)
                        setValue("PowerBackupGenerator", res.data.PowerBackupGenerator)
                        setValue("handPalletTrolley", res.data.handPalletTrolley)
                        setValue("forkLift", res.data.forkLift)
                        setValue("woodenPallet", res.data.woodenPallet)
                        setValue("shrinkWrap", res.data.shrinkWrap)
                        setValue("internetleasedline", res.data.internetleasedline)
                        setValue("wmsSoftware", res.data.wmsSoftware)
                        setValue("manualMIS", res.data.manualMIS)
                        setValue("barcoding", res.data.barcoding)
                    }
                ).catch(err => {
                    console.log(err)
                    if (err.response && err.response.status === 401) {
                        CommonService.invalidSession()
                    }
                })
        }
    }, [warehouseId])

    const getLatLong = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {


                formData["location"] = [position.coords.longitude, position.coords.latitude];

                setFormData({ ...formData })

            });

        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    const showFloorStorage = () => {

        setshowFloorStage(!showFloorStage)

    }
    const showRackedStorage = () => {
        setshowRackedStage(!showRackedStage)
    }
    const addWarehouseData = (data) => {


        data.FSSAIApproved = document.getElementById("FSSAIApprovedyes").checked || false
        data.Skylight = document.getElementById("Skylight-yes").checked || false
        data.turbovents = document.getElementById("turbovents-yes").checked || false
        data.parkingArea = document.getElementById("parkingArea-yes").checked || false
        data.drugLicensed = document.getElementById("drugLicensedyes").checked || false
        data.exciseApproved = document.getElementById("exciseApprovedyes").checked || false
        data.security = document.getElementById("securityyes").checked || false
        data.CCTVSurveillance = document.getElementById("CCTVSurveillanceyes").checked || false
        data.fireExtinguishers = document.getElementById("fireExtinguishersyes").checked || false
        data.PowerBackupGenerator = document.getElementById("PowerBackupGeneratoryes").checked || false
        data.handPalletTrolley = document.getElementById("handPalletTrolleyyes").checked || false
        data.forkLift = document.getElementById("forkLiftyes").checked || false
        data.woodenPallet = document.getElementById("woodenPalletyes").checked || false
        data.shrinkWrap = document.getElementById("shrinkWrapyes").checked || false
        data.internetleasedline = document.getElementById("internetleasedlineyes").checked || false
        data.wmsSoftware = document.getElementById("wmsSoftwareyes").checked || false
        data.manualMIS = document.getElementById("manualMISyes").checked || false
        data.barcoding = document.getElementById("barcodingyes").checked || false


        if (warehouseId) {
            data._id = warehouseId;
        }
        data.images = formData.images;
        setisLoading(true)
        if (imageToUpload > 0) {
            const formData = new FormData();
            for (const key of Object.keys(imageUploadData)) {

                formData.append("files", imageUploadData[key]);
            }


            axios.post(`${elements.API_ENDPOINT}/fileupload`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': "Bearer " + token
                    }
                }
            )
                .then(res => {
                    let ldata = { ...data }
                    let updatedImages = ldata.images
                    data.images = data.images.concat(res.data)
                    addData(data)

                })
                .catch(err => { // then print response status
                    console.log(err)
                })
        } else {
            addData(data)
        }

        //addData(data)

    }
    const addData = (data) => {

        // formData.images = formData.images.filter(n => ! imageToRemove.includes(n));
        if(data.images){
        data.images = data.images.filter(n => !imageToRemove.includes(n))
        }

        axios.post(`${elements.API_ENDPOINT}/deleteFiles`, {imageToRemove}, headers)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

        CommonService.postHttp("/warehouse", Object.assign(formData, data))
            .then((response) => {
                setWareHouseAdded(true)
                setisLoading(false)
            })
            .catch((error) => {
                setwareHouseAddingFailed(true)
                setisLoading(false)
                if (error.response && error.response.status === 401) {
                    CommonService.invalidSession()
                }
            })
    }

    function fileUpload(el) {


        setImageUploadData(el)
        setImageToUpload(el.length);

    }

    return (

        <React.Fragment>

            <Navbar bg="primary" expand="lg" variant="dark" >
                <Navbar.Brand>Setup Warehosue</Navbar.Brand>

            </Navbar>
            <div className="container-fluid add-warehouse-page">

                <div className="row justify-content-center">
                    <div className="col-12">


                        {!wareHouseAdded &&
                            <form className="addwarhouse-form" onSubmit={handleSubmit(addWarehouseData)} >
                                <div className="step">
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <h2>Location</h2>
                                        </div>
                                        <label htmlFor="warehouseName" className="col-12 col-md-3 col-form-label">Warehouse Name</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                className={`form-control ${errors.warehouseName ? "is-invalid " : " "}`}
                                                id="staticuser"
                                                name="warehouseName"
                                                aria-describedby="warehusehelp"
                                                defaultValue={formData.warehouseName}

                                                ref={register({
                                                    required: "This field is required"

                                                })} />
                                            <small id="warehusehelp" className="form-text text-muted">This will be visible on site, please enter an user friendly name. i.e. "iLog Solution warehouse at sec-52 Gurugram"</small>
                                            {errors.warehouseName && errors.warehouseName.message}
                                        </div>
                                    </div>
                                    <div className="form-group row">

                                        <label htmlFor="wareHouseDesc" className="col-12 col-md-3 col-form-label">Warehouse Info</label>
                                        <div className="col-12 col-md-6">
                                            <textarea type="text"
                                                className={`form-control ${errors.wareHouseDesc ? "is-invalid " : " "}`}
                                                id="wareHouseDesc"
                                                name="wareHouseDesc"
                                                aria-describedby="wareHouseDesc3"
                                                defaultValue={formData.wareHouseDesc}

                                                ref={register({
                                                    required: "This field is required"

                                                })}>
                                            </textarea>
                                            <small id="warehusehelp3" className="form-text text-muted">We recomond to provide genuine, unique information about your warehouse. Do not copy and paste </small>
                                            {errors.wareHouseDesc && errors.wareHouseDesc.message}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="Addressline1" className="col-12 col-md-3 col-form-label">Address Line 1</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                className={`form-control ${errors.Addressline1 ? "is-invalid " : " "}`}
                                                id="staticuser"
                                                name="Addressline1"
                                                defaultValue={formData.Addressline1}

                                                ref={register({
                                                    required: "This field is required"

                                                })} />
                                            {errors.warehouseName && errors.warehouseName.message}

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="Addressline2" className="col-12 col-md-3 col-form-label">Address Line 2</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                className={`form-control`}
                                                id="Addressline2"
                                                name="Addressline2"
                                                ref={register}
                                                defaultValue={formData.Addressline2}

                                            />

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="Addressline3" className="col-12  col-md-3 col-form-label">Locality</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                className={`form-control`}
                                                id="Addressline3"
                                                name="Addressline3"
                                                ref={register({
                                                    required: "Please enter locality"

                                                })}
                                                defaultValue={formData.Addressline3}

                                            />
                                            {errors.Addressline3 && errors.Addressline3.message}
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="city" className="col-12 col-md-3 col-form-label">city</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                className={`form-control ${errors.city ? "is-invalid " : " "}`}
                                                id="city"
                                                name="city"
                                                defaultValue={formData.city}

                                                ref={register({
                                                    required: "This field is required"

                                                })} />
                                            {errors.city && errors.city.message}

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="state" className="col-12 col-md-3 col-form-label">State</label>
                                        <div className="col-12 col-md-6">

                                            <select
                                                className={`form-control ${errors.state ? "is-invalid " : " "}`}
                                                id="state"
                                                name="state"
                                                defaultValue={formData.state}

                                                ref={register({
                                                    required: "This field is required"

                                                })}>
                                                <option value="">Select</option>
                                                {stateList &&
                                                    stateList.map((state, k) => {
                                                        return <option
                                                            key={k}
                                                            value={state.slug}

                                                        >
                                                            {state.name}

                                                        </option>
                                                    })
                                                }
                                            </select>



                                            {errors.state && errors.state.message}

                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="pin" className="col-12 col-md-3 col-form-label">PIN</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                className={`form-control ${errors.pin ? "is-invalid " : " "}`}
                                                id="pin"
                                                name="pin"
                                                defaultValue={formData.pin}

                                                maxLength="6"
                                                ref={register({
                                                    required: "This field is required",
                                                    minLength: {
                                                        value: 6,
                                                        message: "Please enter a valid 6 digit PIN code"
                                                    },
                                                    maxLength: {
                                                        value: 6,
                                                        message: "Please enter a valid 6 digit PIN code"
                                                    }

                                                })} />
                                            {errors.pin && errors.pin.message}


                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="warehouseSpace" className="col-12 col-md-3 col-form-label">Warehouse space</label>

                                        <div className="col-12 col-md-6">
                                            <div className="input-group mb-2">

                                                <input type="number"
                                                    className={`form-control ${errors.warehouseSpace ? "is-invalid " : " "}`}
                                                    id="warehouseSpace"
                                                    name="warehouseSpace"
                                                    defaultValue={formData.warehouseSpace}

                                                    ref={register({
                                                        required: "This field is required"

                                                    })} />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">sq.ft.</div>
                                                </div>
                                            </div>
                                            {errors.warehouseSpace && errors.warehouseSpace.message}

                                        </div>
                                    </div>


                                </div>


                                <div className="step">
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <h2>Daily Operation Timings</h2>
                                        </div>
                                    </div>

                                    <div className="form-group row">

                                        <label htmlFor="shippingStart" className="col-12 col-md-3  col-form-label">Start at</label>
                                        <div className="col-12 col-md-4">
                                            <select
                                                className={`form-control ${errors.shippingStart ? "is-invalid " : " "}`}
                                                name="shippingStart"
                                                ref={register({
                                                    required: true

                                                })}

                                                defaultValue={formData.shippingStart}>
                                                <option value="">Select</option>
                                                {
                                                    elements.shippingSlots.map((v, k) => {
                                                        return <option value={v} key={k}>{v}</option>
                                                    })
                                                }

                                            </select>

                                            {errors.shippingStart &&
                                                errors.shippingStart.type === "required" && <span>This field is required</span>}

                                        </div>
                                    </div>
                                    <div className="form-group row">

                                        <label htmlFor="shippingEnd" className="col-12 col-md-3 col-form-label">End at</label>
                                        <div className="col-12 col-md-4">
                                            <select
                                                className={`form-control ${errors.shippingEnd ? "is-invalid " : " "}`}
                                                name="shippingEnd"

                                                ref={register({
                                                    required: "This field is required"

                                                })}
                                                defaultValue={formData.shippingEnd} >
                                                <option value="">Select</option>
                                                {
                                                    elements.shippingSlots.map((v, k) => {
                                                        return <option value={v} key={k}>{v}</option>
                                                    })
                                                }

                                            </select>

                                            {errors.shippingEnd && errors.shippingEnd.message}
                                        </div>

                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="shippingNotes" className="col-12 col-md-3  col-form-label">Additional notes</label>
                                        <div className="col-12 col-md-6">
                                            <textarea type="text"
                                                className={`form-control`}
                                                id="shippingNotes"
                                                name="shippingNotes"
                                                ref={register}
                                                defaultValue={formData.shippingNotes}

                                            ></textarea>

                                        </div>
                                    </div>
                                </div>
                                <div className="step">

                                    <div className="form-group row">
                                        <div className="col-12">
                                            <h3>Per Square Ft. Rate</h3>
                                        </div>

                                        <label htmlFor="PerSquareFtRate" className="col-12 col-md-3 col-form-label">Price Per Square Ft.</label>
                                        <div className="col-12 col-md-6">
                                            <div className="input-group mb-2">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"> &#8377;</div>
                                                </div>
                                                <input type="number"
                                                    className={`form-control ${errors.PerSquareFtRate ? "is-invalid " : " "}`}
                                                    id="PerSquareFtRate"
                                                    name="PerSquareFtRate"
                                                    defaultValue={formData.PerSquareFtRate}

                                                    ref={register()} />
                                                <div className="input-group-append">
                                                    <div className="input-group-text">Per Month</div>
                                                </div>
                                            </div>
                                            {errors.PerSquareFtRate &&
                                                errors.PerSquareFtRate.message}

                                        </div>
                                    </div>
                                </div>
                                <div className="step">
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <h2>Racked storage

</h2>

                                        </div>
                                        <div className="col-10 col-sm-8">
                                            <p>Do you have racked storage space available?</p>
                                        </div>
                                        <div className="col-2 col-sm-4">
                                            <Form.Check
                                                type="switch"
                                                className="switch"
                                                id="rackedStorage"
                                                label="Check this switch"
                                                onChange={showRackedStorage}
                                                checked={showRackedStage}
                                            />
                                        </div>
                                    </div>
                                    {showRackedStage && <React.Fragment>
                                        <div className="form-group row">

                                            <label htmlFor="racking" className="col-12 col-md-3  col-form-label">Racking</label>
                                            <div className="col-12 col-md-6">
                                                <select
                                                    className={`form-control ${errors.racking ? "is-invalid " : " "}`}
                                                    name="racking"
                                                    id="racking"

                                                    ref={register({
                                                        required: "This field is required"

                                                    })}
                                                    defaultValue={formData.racking}>
                                                    <option value="">Select</option>
                                                    <option value="G + 1 High">G + 1 High</option>
                                                    <option value="G + 2 High">G + 2 High</option>
                                                    <option value="G + 3 High">G + 3 High</option>
                                                    <option value="G + 4 High">G + 4 High</option>
                                                    <option value="4 + High">4 + High</option>

                                                </select>
                                                {errors.racking && errors.racking.message}
                                            </div>

                                        </div>
                                        <div className="form-group row">
                                            <label htmlFor="rackPosAvilable" className="col-12 col-md-3   col-form-label">Pallet Positions Available</label>

                                            <div className="col-12 col-md-6">
                                                <div className="input-group mb-2">

                                                    <input type="number"
                                                        className={`form-control ${errors.rackPosAvilable ? "is-invalid " : " "}`}
                                                        id="rackPosAvilable"
                                                        name="rackPosAvilable"
                                                        defaultValue={formData.rackPosAvilable}

                                                        ref={register({
                                                            required: "This field is required"

                                                        })} />
                                                    <div className="input-group-append">
                                                        <div className="input-group-text">Pallets</div>
                                                    </div>
                                                </div>
                                                {errors.rackPosAvilable && errors.rackPosAvilable.message}

                                            </div>
                                        </div>
                                        <div className="form-group row">

                                            <label htmlFor="maxPalletHeight" className="col-12 col-md-3  col-form-label">Max height per Pallet</label>
                                            <div className="col-12 col-md-6">
                                                <select
                                                    className={`form-control ${errors.maxPalletHeight ? "is-invalid " : " "}`}
                                                    name="maxPalletHeight"
                                                    id="maxPalletHeight"

                                                    ref={register({
                                                        required: "This field is required"

                                                    })}
                                                    defaultValue={formData.maxPalletHeight}>
                                                    <option value="">Select</option>
                                                    <option value="Don't Know">Don't Know</option>
                                                    <option value="4 ft or less">4 ft or less</option>
                                                    <option value="5 ft">5 ft</option>
                                                    <option value="6 ft">6 ft</option>
                                                    <option value="7 ft">7 ft</option>
                                                    <option value="8 ft">8 ft</option>

                                                </select>
                                                {errors.maxPalletHeight && errors.maxPalletHeight.message}

                                            </div>

                                        </div>
                                        <div className="form-group row">

                                            <label htmlFor="maxRackWeight" className="col-12 col-md-3  col-form-label">Max rack weight</label>
                                            <div className="col-12 col-md-6">
                                                <select
                                                    className={`form-control ${errors.maxRackWeight ? "is-invalid " : " "}`}
                                                    name="maxRackWeight"
                                                    id="maxRackWeight"
                                                    ref={register({
                                                        required: "This field is required"

                                                    })}
                                                    defaultValue={formData.maxRackWeight}>
                                                    <option value="">Select</option>
                                                    <option value="Don't Know">Don't Know</option>
                                                    <option value="100 KGs or less per pallet">100 KGs or less per pallet</option>
                                                    <option value="300 KGs per pallet">300 KGs per pallet</option>
                                                    <option value="500 KGs per pallet">500 KGs per pallet</option>
                                                    <option value="1000 KGs per pallet">1000 KGs per pallet</option>
                                                    <option value="1000 KGs or above per pallet">1000 KGs or above per pallet</option>

                                                </select>
                                                {errors.maxRackWeight && errors.maxRackWeight.message}
                                            </div>

                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <p><strong><FaBolt /> Setting a price</strong> <br />For new warehouse listings, its important to set a competitive price. Once you get your service rating established, you can raise your price depending on market demands.</p>
                                            </div>
                                            <label htmlFor="rackCostPerPallet" className="col-12 col-md-3 col-form-label">Cost Per Pallet</label>

                                            <div className="col-12 col-md-6">
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"> &#8377;</div>
                                                    </div>
                                                    <input type="number"
                                                        className={`form-control ${errors.rackCostPerPallet ? "is-invalid " : " "}`}
                                                        id="rackCostPerPallet"
                                                        name="rackCostPerPallet"
                                                        defaultValue={formData.rackCostPerPallet}

                                                        ref={register({
                                                            required: "This field is required"

                                                        })} />
                                                    <div className="input-group-append">
                                                        <div className="input-group-text">Per Month</div>
                                                    </div>
                                                </div>
                                                {errors.costPerPallet && errors.costPerPallet.message}

                                            </div>
                                        </div>
                                    </React.Fragment>}

                                </div>
                                <div className="step">
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <h2>Floor storage </h2>
                                        </div>
                                        <div className="col-10 col-sm-8">
                                            <p>Do you have floor storage space available?</p>
                                        </div>
                                        <div className="col-2 col-sm-4">
                                            <Form.Check
                                                type="switch"
                                                className="switch"
                                                id="floarStorage"
                                                label="Check this switch"
                                                onChange={showFloorStorage}
                                                checked={showFloorStage}
                                            />
                                        </div>
                                    </div>
                                    {showFloorStage && <React.Fragment>
                                        <div className="form-group row">
                                            <label htmlFor="avilableFLoor" className="col-12 col-md-3 col-form-label">Pallet Positions Available</label>

                                            <div className="col-12 col-md-6">
                                                <div className="input-group mb-2">

                                                    <input type="number"
                                                        className={`form-control ${errors.avilableFLoor ? "is-invalid " : " "}`}
                                                        id="avilableFLoor"
                                                        name="avilableFLoor"
                                                        defaultValue={formData.avilableFLoor}

                                                        ref={register({
                                                            required: "This field is required"

                                                        })} />
                                                    <div className="input-group-append">
                                                        <div className="input-group-text">Pallets</div>
                                                    </div>
                                                </div>
                                                <p>Number of single stack pallet positions available for storage.</p>
                                                {errors.avilableFLoor && errors.avilableFLoor.message}

                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <h3>Stackable Pallets</h3>
                                            </div>
                                            <div className="col-12">
                                                <p><strong><FaBolt /> Setting a price</strong> <br />For new warehouse listings, its important to set a competitive price. Once you get your service rating established, you can raise your price depending on market demands.</p>
                                            </div>
                                            <label htmlFor="floorPricePerPallet" className="col-12 col-md-3 col-form-label">Price Per Pallet (based on stacking)</label>
                                            <div className="col-12 col-md-6">
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"> &#8377;</div>
                                                    </div>
                                                    <input type="number"
                                                        className={`form-control ${errors.floorPricePerPallet ? "is-invalid " : " "}`}
                                                        id="floorPricePerPallet"
                                                        name="floorPricePerPallet"
                                                        defaultValue={formData.floorPricePerPallet}

                                                        ref={register({
                                                            required: "This field is required"

                                                        })} />
                                                    <div className="input-group-append">
                                                        <div className="input-group-text">Per Month</div>
                                                    </div>
                                                </div>
                                                {errors.floorPricePerPallet && errors.floorPricePerPallet.message}

                                            </div>
                                        </div>
                                        <hr />
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <h3>Single Floor Loaded Pallets</h3>
                                            </div>
                                            <div className="col-12">
                                                <p><strong><FaBolt /> Setting a price</strong> <br />For new warehouse listings, its important to set a competitive price. Once you get your service rating established, you can raise your price depending on market demands.</p>
                                            </div>
                                            <label htmlFor="sfPricePerPallet" className="col-12 col-md-3 col-form-label">Price Per Pallet (based on no stacking)</label>
                                            <div className="col-12 col-md-6">
                                                <div className="input-group mb-2">
                                                    <div className="input-group-prepend">
                                                        <div className="input-group-text"> &#8377;</div>
                                                    </div>
                                                    <input type="number"
                                                        className={`form-control ${errors.sfPricePerPallet ? "is-invalid " : " "}`}
                                                        id="sfPricePerPallet"
                                                        name="sfPricePerPallet"
                                                        defaultValue={formData.sfPricePerPallet}

                                                        ref={register({
                                                            required: "This field is required"

                                                        })} />
                                                    <div className="input-group-append">
                                                        <div className="input-group-text">Per Month</div>
                                                    </div>
                                                </div>
                                                {errors.sfPricePerPallet &&
                                                    errors.sfPricePerPallet.message}

                                            </div>
                                        </div>



                                    </React.Fragment>}
                                </div>


                                <div className="step">
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <h2>Distance Matrix</h2>
                                        </div>

                                    </div>
                                    <div className="form-group row">



                                        <div className="col-12 col-md-4 col-lg-3">
                                            <label htmlFor="airportDistance" className="col-form-label">Distance from Airport (in Kms)</label>
                                            <input
                                                type="number"
                                                placeholder="Distance from Airport (in Kms)"
                                                className={`form-control ${errors.airportDistance ? "is-invalid " : " "}`}
                                                name="airportDistance"
                                                id="airportDistance"
                                                defaultValue={formData.airportDistance}
                                                ref={register({
                                                    required: "This field is required",
                                                    pattern: { value: /^[0-9]*$/, message: "Please enter distace in K.M." }

                                                })}
                                            />
                                            {errors.airportDistance &&
                                                <span className="text-danger d-block">{errors.airportDistance.message}</span>}
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <label htmlFor="seaportDistance" className="col-form-label">Distance from Sea Port (in Kms)</label>
                                            <input
                                                type="number"
                                                placeholder="Distance from Airport (in Kms)"
                                                className={`form-control ${errors.seaportDistance ? "is-invalid " : " "}`}
                                                name="seaportDistance"
                                                id="seaportDistance"
                                                defaultValue={formData.seaportDistance}

                                                ref={register({
                                                    pattern: { value: /^[0-9]*$/, message: "Please enter distace in K.M." }
                                                })}

                                            />
                                            {errors.seaportDistance &&
                                                <span className="text-danger d-block">{errors.seaportDistance.message}</span>}
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <label htmlFor="dryportDistance" className="col-form-label">Distance from Dry Port (in Kms)</label>
                                            <input
                                                type="number"
                                                placeholder="Distance from Dry Port (in Kms)"
                                                className={`form-control ${errors.dryportDistance ? "is-invalid " : " "}`}
                                                name="dryportDistance"
                                                id="dryportDistance"
                                                defaultValue={formData.dryportDistance}
                                                ref={register({
                                                    pattern: { value: /^[0-9]*$/, message: "Please enter distace in K.M." }
                                                })} />

                                            {errors.dryportDistance &&
                                                <span className="text-danger d-block">{errors.dryportDistance.message}</span>}
                                        </div>

                                    </div>

                                </div>
                                <div className="step">
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <h2>INFORMATION &nbsp; SPECS</h2>
                                        </div>

                                    </div>
                                    <div className="form-group row">



                                        <div className="col-12 col-md-4 col-lg-3">
                                            <label htmlFor="warehouseType" className="col-form-label"> Warehouse Type</label>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <select name="warehouseType" id="warehouseType" className="form-control"
                                                ref={register({
                                                    required: "This field is required"

                                                })}
                                            >
                                                <option value="">Select</option>
                                                <option value="bonded">Bonded</option>
                                                <option value="nonBonded">Non Bonded</option>
                                            </select>

                                            {errors.warehouseType &&
                                                <span className="text-danger d-block">{errors.warehouseType.message}</span>}
                                        </div>
                                    </div>

                                    <div className="form-group row">



                                        <div className="col-12 col-md-4 col-lg-3">
                                            <label htmlFor="electricityLoad" className="col-form-label">Electricity Load</label>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">
                                            <select name="electricityLoad" id="electricityLoad" className="form-control"
                                                ref={register({
                                                    required: "This field is required"

                                                })}
                                            >
                                                <option value="">Select</option>
                                                <option value="comm-standard">Commercial Standard</option>
                                                <option value="comm-heavy">Commercial Heavy Duty</option>
                                            </select>

                                            {errors.electricityLoad &&
                                                <span className="text-danger d-block">{errors.electricityLoad.message}</span>}
                                        </div>
                                    </div>



                                    <div className="form-group row">



                                        <div className="col-12 col-md-4 col-lg-3">
                                            <label htmlFor="numberOfDocs" className="col-form-label">Total Number of Docks</label>
                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">

                                            <input
                                                type="number"
                                                placeholder="Total Number of Docks"
                                                className={`form-control ${errors.numberOfDocs ? "is-invalid " : " "}`}
                                                name="numberOfDocs"
                                                id="numberOfDocs"
                                                defaultValue={formData.numberOfDocs}
                                                ref={register()} />
                                            {errors.numberOfDocs &&
                                                <span className="text-danger d-block">{errors.numberOfDocs.message}</span>}
                                        </div>
                                    </div>

                                    <div className="form-group row">



                                        <div className="col-12 col-md-4 col-lg-3">
                                            <label htmlFor="Skylight" className="col-form-label">Skylight</label>


                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">


                                            <input
                                                type="radio"
                                                value={true}
                                                name="Skylight"
                                                id="Skylight-yes"
                                                ref={register()}

                                            />
                                            <label
                                                htmlFor="Skylight-yes"
                                                className="radio-label"
                                            >
                                                Yes
</label>
                                            <input
                                                type="radio"
                                                value={false}
                                                name="Skylight"
                                                id="Skylight-no"

                                                ref={register()} />

                                            <label
                                                htmlFor="Skylight-no"
                                                className="radio-label"
                                            >

                                                No
                                            </label>



                                        </div>
                                    </div>
                                    <div className="form-group row">



                                        <div className="col-12 col-md-4 col-lg-3">
                                            <label htmlFor="turbovents" className="col-form-label">Turbo Vents</label>


                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">


                                            <input
                                                type="radio"
                                                value={true}
                                                name="turbovents"
                                                id="turbovents-yes"
                                                ref={register()}

                                            />
                                            <label
                                                htmlFor="turbovents-yes"
                                                className="radio-label"
                                            >
                                                Yes
</label>
                                            <input
                                                type="radio"
                                                value={false}
                                                name="turbovents"
                                                id="turbovents-no"

                                                ref={register()} />

                                            <label
                                                htmlFor="turbovents-no"
                                                className="radio-label"
                                            >

                                                No
                                            </label>



                                        </div>
                                    </div>
                                    <div className="form-group row">



                                        <div className="col-12 col-md-4 col-lg-3">
                                            <label htmlFor="parkingArea" className="col-form-label">Parking Area</label>


                                        </div>
                                        <div className="col-12 col-md-4 col-lg-3">


                                            <input
                                                type="radio"
                                                value={true}
                                                name="parkingArea"
                                                id="parkingArea-yes"
                                                ref={register()}

                                            />
                                            <label
                                                htmlFor="parkingArea-yes"
                                                className="radio-label"
                                            >
                                                Yes
</label>
                                            <input
                                                type="radio"
                                                value={false}
                                                name="parkingArea"
                                                id="parkingArea-no"

                                                ref={register()} />

                                            <label
                                                htmlFor="parkingArea-no"
                                                className="radio-label"
                                            >

                                                No
                                            </label>



                                        </div>
                                    </div>




                                </div>

                                {elements.addWarehouseForm.map((section, i) => {

                                    return <div className="step" key={i}>
                                        <div className="form-group row">
                                            <div className="col-12">
                                                <h2>{section.title}</h2>
                                            </div>

                                        </div>

                                        <div className="row">
                                            {section.fileds.map((tech, key) => {
                                                return <div className="col-12" key={key}>
                                                    <div className="form-group row" >



                                                        <label htmlFor={tech.fieldName} className="col-12 col-sm-6 col-lg-4 col-form-label">{tech.name}
                                                        </label>


                                                        <div className="col- 12 col-sm-6">


                                                            <input
                                                                type="radio"
                                                                value={true}
                                                                name={tech.fieldName}
                                                                id={tech.fieldName + "yes"}
                                                                ref={register({
                                                                    required: "This field is required"

                                                                })}

                                                            />
                                                            <label
                                                                htmlFor={tech.fieldName + "yes"}
                                                                className="radio-label"
                                                            >
                                                                Yes
                                                            </label>
                                                            <input
                                                                type="radio"
                                                                value={false}
                                                                name={tech.fieldName}
                                                                id={tech.fieldName + "no"}

                                                                ref={register({
                                                                    required: "This field is required"

                                                                })} />

                                                            <label
                                                                htmlFor={tech.fieldName + "no"}
                                                                className="radio-label"
                                                            >

                                                                No
                                                            </label>


                                                        </div>



                                                    </div>
                                                </div>
                                            })}

                                        </div>

                                    </div>

                                })}


                                <div className="step">
                                    <div className="form-group row">
                                        <div className="col-12">
                                            <h2>Additonal Information</h2>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor="internalName" className="col-12 col-md-3 col-form-label">Internal Referance Name</label>
                                        <div className="col-12 col-md-6">
                                            <input type="text"
                                                className={`form-control ${errors.internalName ? "is-invalid " : " "}`}
                                                id="internalName"
                                                name="internalName"
                                                aria-describedby="warehusehelp1"
                                                defaultValue={formData.internalName}
                                                ref={register}
                                            />
                                            <small id="warehusehelp1" className="form-text text-muted">Enter the warehouse name, which you use for internal purpose, this will not be visible to customers</small>

                                        </div>
                                    </div>
                                    <div className="form-group row">

                                        <label htmlFor="latitude" className="col-12 col-md-3 col-form-label">Location</label>
                                        <div className="col-12 col-md-3">
                                            <input type="text"
                                                className={`form-control ${errors.longitude ? "is-invalid " : " "}`}
                                                id="longitude"
                                                name="longitude"
                                                placeholder="Longitude"
                                                defaultValue={(formData.location && formData.location.coordinates) ? formData.location.coordinates[0] : formData.location ? formData.location[0] : ""}
                                                ref={register}
                                            />


                                        </div>
                                        <div className="col-12 col-md-3">
                                            <input type="text"
                                                className={`form-control ${errors.latitude ? "is-invalid " : " "}`}
                                                id="latitude"
                                                name="latitude"
                                                placeholder="Latitude"
                                                defaultValue={(formData.location && formData.location.coordinates) ? formData.location.coordinates[1] : formData.location ? formData.location[1] : ""}
                                                ref={register}
                                            />


                                        </div>

                                        {typeof navigator.geolocation.getCurrentPosition === "function" &&
                                            <div className="col-12 col-md-2">
                                                <button type="button" className="btn  btn-light"
                                                    onClick={getLatLong}><FaCrosshairs /></button>

                                            </div>
                                        }
                                    </div>

                                </div>
                                <div className="row">

                                    {formData.images &&
                                        formData.images.map((image, key) => {

                                            return <div className="col-6 col-md-3" key={key}>

                                                <div className="card img-upload" style={{ padding: "10px" }}>
                                                    <button className="btn close" onClick={(e) => deleteImageFromServer(e, image)}><FaTimesCircle /></button>
                                                    <img src={`${elements.imageBase}/${image}`} alt="..." className="img-fluid" />
                                                </div>
                                            </div>
                                        }
                                        )}
                                    <FileUpload
                                        triggerUpload={fileUpload} />
                                </div>





                                <div className="form-group row">
                                    <div className="col-12">
                                        {wareHouseAddingFailed && <p className="alert alert-danger">Some error occured, please try again or contact adminstratior</p>}
                                        {isLoading && <FaSpinner className="spinner" />}
                                        {!isLoading &&
                                            <button className="btn btn-primary btn-lg" type="submit">
                                                {warehouseId ? "Update Warehouse" : "Add Warehouse"}</button>
                                        }
                                    </div>
                                </div>
                            </form>
                        }

                    </div>
                    {wareHouseAdded &&

                        <div className="col-12">
                            <div className="success-box text-center">
                                <FaCheckCircle className="icon" />
                                {warehouseId ? <p>Warehouse updated successfully.</p> : <p>Warehouse added successfully.</p>}

                                <NavLink to="/warehose-setup" className="btn btn-primary btn-lg">Add Another</NavLink>
                            </div>
                        </div>
                    }
                </div>
            </div>

        </React.Fragment>

    )
}
export default AdminLayout(AddWarehouse)