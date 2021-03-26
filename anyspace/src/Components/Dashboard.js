import React, { useEffect } from "react";
import AdminLayout from "../HOC/AdminLayout";
import { Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import * as actionCreators from "../Store/actions/index";
import Loader from "../Components/Loader"

const Dashboard = () => {
    const dispatch = useDispatch();

    //let [pageData, setPageData] = useState();
    const pageData = useSelector(state => state.dashboard);


    useEffect(() => {
         dispatch(actionCreators.getDashBoardData())

    }, [dispatch]);

    return (

        <React.Fragment>

            <Navbar bg="primary" expand="lg" variant="dark" >
                <Navbar.Brand>Dashboard</Navbar.Brand>

            </Navbar>
             {pageData.loading && <Loader type="large"/>}
             {!pageData.loading &&
            <div className="container-fluid mt-5">
                <div className="row justify-content-center">

                    <div className="col-12 col-sm-3">
                        <div className="card active">

                            <div className="card-body">
                                <h5 className="card-title">Active Warehouses</h5>
                                <p className="card-text"> {pageData.dashboardData ? pageData.dashboardData.activeWareHouses : 0}</p>

                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-sm-3 ">
                        <div className="card inactive">

                            <div className="card-body">
                                <h5 className="card-title">Inactive Warehouses</h5>
                                <p className="card-text"> {pageData.dashboardData ? pageData.dashboardData.inActiveWareHouses : 0}</p>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6">

                        <div className="helpbox mt-5">
                            <p>
                                support: support@anyspaze.com
                            </p>

                        </div>
                    </div>
                </div>
            </div>}


        </React.Fragment>
    )
}
export default AdminLayout(Dashboard)