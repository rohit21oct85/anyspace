import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import AdminLayout from "../HOC/AdminLayout";
import { NavLink } from "react-router-dom";
import ModalBox from "../UI/Modal";
import ToastBox from "../UI/ToastBox"
import CommonService from '../Common';
import { FaInfoCircle } from "react-icons/fa"

const ManageWarehouse = () => {

    const [pageData, setpageData] = useState();
    const [deleteWarehouse, setDeleteWarehouse] = useState(false);
    const [actionFor, setActionFor] = useState(false);
    const [messageCon, setmessageCon] = useState(false);
    let [showToasts, setShowToast] = useState(false);
    useEffect(() => {

        CommonService.getHttp("/warehouses")
            .then(res => {
                setpageData(res.data)
            }).catch((error) => {
                console.log(error)
                if (error.response && error.response.status === 401) {
                    CommonService.invalidSession()
                }
            });


    }, [])

    const deleteWarehouseWarn = (warehouseId, currentStaus) => {
        setActionFor({ warehouseId: warehouseId, currentStaus: currentStaus })
        setDeleteWarehouse(true)
    }
    const handleShowModalFunction = () => {
        setDeleteWarehouse(false)

    }
    const deleteWareHouseFunc = () => {

        CommonService.postHttp("/archived", actionFor
        ).then(res => {
            setShowToast(true)
            setmessageCon({ message: "Warehouse successfully Archived", heading: "success", statusColor: "green" });
            let data = pageData;
            for (var i in data) {


                if (data[i]._id === actionFor.warehouseId) {
                    data[i].status = res.data.updatedStatus;




                }

            }
            setpageData([...data])
            console.log(pageData)
            handleShowModalFunction()

            setTimeout(function () {
                setShowToast(false)
            }, 2000)
        })
            .catch(err => {
                console.log(err)
                setmessageCon({ message: "Some error occured, warehouse cound not be deleted", heading: "Failed", statusColor: "red" });
                handleShowModalFunction();
                setShowToast(true)
                setTimeout(function () {
                    setShowToast(false)
                }, 2000)
            })
    }

    // const showToastFunc = () => {
    //     setShowToast(true)
    // }
    const closeToastFunc = () => {
        setShowToast(false)
    }

    return (
        <React.Fragment>



            <Navbar bg="primary" expand="lg" variant="dark" >
                <Navbar.Brand>Manage Warehouse(s)</Navbar.Brand>

            </Navbar>
            <div className="container-fluid manage-warehouse-page">
                <div className="row justify-content-center">
                    {pageData && pageData.length === 0 &&
                        <div className="col-12">
                            <div className="success-box text-center">

                                <p>You have not added any warehouse yet. Kindly add a warehouse now.</p>
                                <NavLink to="/warehose-setup" className="btn btn-primary btn-lg">Add Now</NavLink>
                            </div>
                        </div>
                    }
                    {pageData && pageData.map((data, key) => {
                        return <div key={key} className="col-12 col-md-4">

                            <div className={`card ${data.status === "2" ? "inactive" : data.status === "1" ? "active" : "archived"}`}>
                                <div className="card-body">
                                    <h5 className="card-title">{data.warehouseName}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{data.state} - {data.pin}</h6>
                                    <p className="card-text">{data.Addressline1}{data.City} <br />
                                    </p>
                                    <NavLink to={`/warehose-setup/${data._id}`} className="btn btn-primary mr-3">Edit</NavLink>

                                    {data.status == 1 &&
                                        <button onClick={() => deleteWarehouseWarn(data._id, data.status)} className="btn btn-danger">
                                            Deactivate
                                    </button>
                                    }
                                    {data.status == 2 &&

                                        <button onClick={() => deleteWarehouseWarn(data._id, data.status)} className="btn btn-success">
                                            Activate
                                    </button>
                                    }

                                    {data.status == 2 && <span className="btn btn-light btn-inactiveinfo">
                                        <FaInfoCircle />
                                        <span className="infotext">
                                            Your warehouse is currently inactive and will not appear in search results. Kindly contact support for further information
                                         </span>
                                    </span>
                                    }

                                </div>
                            </div>
                        </div>
                    }

                    )}

                </div>
            </div>

            <ModalBox
                header={"Are you sure?"}
                showModal={deleteWarehouse}
                showModalFunction={() => handleShowModalFunction()}
                cancelBtnText="Cancel"
                confirmBtnText="yes"
                cancelAction={() => handleShowModalFunction()}
                confirmAction={deleteWareHouseFunc}
            >
                <p style={{ padding: "30px" }}>Are you sure you want to archive this warehouse? This will not be visible in search</p>


            </ModalBox>

            <ToastBox
                showtoast={showToasts}
                closeToast={closeToastFunc}
                message={messageCon.message}
                heading={messageCon.heading}
                statusColor={messageCon.statusColor}
            />

        </React.Fragment >
    )

}

export default AdminLayout(ManageWarehouse)