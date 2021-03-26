import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//import logger from "redux-logger";
import axios from 'axios';
//Reducer
import dashboardReducer from './Store/reducers/dashboard';
import loginReducer from "./Store/reducers/login";
import passwordChangeStart from './Store/reducers/password';
import SearchReducer from './Store/reducers/SearchReducer';

// import components
import Home from './Pages/Home';
import blogListing from './Pages/blogListing';
import blogDetails from './Pages/blogDetails';
import termsService from './Pages/termsService';
import privacyPolicy from './Pages/privacyPolicy';
import Location from './Pages/Location';
import Locationinner from './Pages/Locationinner';

import overviewServices from "./Pages/overviewServices";

import Warehouse from "./Pages/Warehouse";
import InventoryManagement from "./Pages/InventoryManagement";
import distributionNetwork from "./Pages/distributionNetwork";
import orderProcessing from "./Pages/orderProcessing";
import roadTransport from "./Pages/roadTransport";
import packageStorage from "./Pages/packageStorage";
import IndustryPage from "./Pages/IndustryPage";

import AboutUs from "./Pages/AboutUs";
import SearchWarehouses from "./Pages/SearchWarehouses"
import Login from './Components/Login';
import Register from './Components/Register';
import Contact from './Pages/Contact';
import ForgetPassword from './Components/ForgetPassword';
import PrivateRoute from "./HOC/PrivateRoute";
import SearchResults from './Pages/SearchResults';
import Page from './Pages/Page';
import WarehouseDetails from './Pages/WarehouseDetails';
import Loader from "./Components/Loader";
import withTracker from "./HOC/Tracker"
import CommonData from './Store/reducers/CommonData';
const Billing = React.lazy(()=> import('./Components/Billing'))
const ChangePassword = React.lazy(()=> import("./Components/ChangePassword"))
const ManageWarehouse = React.lazy(()=> import("./Components/ManageWarehouse"))
const AddWarehouse = React.lazy(()=> import("./Components/AddWarehouse"))
const Dashboard = React.lazy(()=> import("./Components/Dashboard"))

function createAxiosAuthMiddleware() {
    return ({ getState }) => next => (action) => {

        let token = getState().login.userData ? getState().login.userData.token : localStorage.getItem('token');

        axios.defaults.headers.common = {
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
        };
        return next(action);
    };
}
const axiosAuth = createAxiosAuthMiddleware();


const rootReducer = combineReducers({

    login: loginReducer,
    dashboard: dashboardReducer,
    password: passwordChangeStart,
    search:SearchReducer,
    commonData:CommonData

});
var store = createStore(rootReducer, applyMiddleware(thunk, axiosAuth));


ReactDOM.render(
    <Provider store={store}>
        <Router basename={'/'}>
            <Switch>
            <App>

                <Route exact path="/login" component={withTracker(Login)} />
                <Route exact path="/register" component={withTracker(Register)} />
                <Route exact path="/about-us" component={withTracker(AboutUs)} />
                <Route exact path="/services" component={withTracker( overviewServices)} />
                <Route exact path="/warehousing" component={withTracker(Warehouse)} />
                <Route exact path="/inventory-management" component={withTracker(InventoryManagement)} />
                <Route exact path="/distribution-network" component={withTracker(distributionNetwork)} />
                <Route exact path="/order-processing" component={withTracker( orderProcessing)} />
                <Route exact path="/road-transport" component={withTracker( roadTransport)} />
                <Route exact path="/packaging-storage" component={withTracker( packageStorage)} />
                <Route exact path="/industry/:slug" component={withTracker( IndustryPage)} />
                <Route exact path="/contact-us" component={withTracker(Contact)} />
                <Route exact path="/forget-password" component={withTracker(ForgetPassword)} />
                <Route exact path="/forget-password/:userId/:resetPWToken" component={withTracker(ForgetPassword)} />

                <Route exact path="/" component={withTracker(Home)} />

                <Route exact path="/blog-listing" component={withTracker(blogListing)} />
                <Route exact path="/blog-listing/category/:slug" component={withTracker(blogListing)} />
                <Route exact path="/blog-details/:slug" component={withTracker(blogDetails)} />
                <Route exact path="/terms-of-service" component={withTracker(termsService)} />
                <Route exact path="/privacy-policy" component={withTracker(privacyPolicy)} />
                <Route exact path="/warehouse-list-in-:location-:city" component={withTracker(Locationinner)} />
                <Route exact path="/location/:location" component={withTracker(Location)} />

                <Route exact path="/find-warehouse" component={withTracker(SearchWarehouses)} />
                <Route exact path="/warehouse" component={withTracker(SearchResults)} />
                <Route exact path="/warehouse/:slug/:warehouseId" component={withTracker(WarehouseDetails)} />
                {/* <Route exact path="/p/:pagetitle" component={withTracker(Page)} /> */}

                <Route exact path="/warehouse-in-:location" component={withTracker(SearchResults)} />
                <Route exact path="/warehouses-in-:location" component={withTracker(SearchResults)} />
                <Suspense fallback={<Loader type="large"/>}>
                <PrivateRoute exact path="/dashboard" component={withTracker(Dashboard)} />
                <PrivateRoute exact path="/billing" component={withTracker(Billing)} />
                <PrivateRoute exact path="/change-password" component={withTracker(ChangePassword)} />
                <PrivateRoute exact path="/warehose-setup" component={withTracker(AddWarehouse)} />
                <PrivateRoute exact path="/warehose-setup/:warehouseId" component={withTracker(AddWarehouse)} />

                {/* <PrivateRoute exact path="/reporting" component={Reporting} /> */}
                {/* <PrivateRoute exact path="/inventory" component={Inventory} />
                <PrivateRoute exact path="/shipments" component={Shipments} />
                <PrivateRoute exact path="/fulfilment" component={Fulfilments} /> */}
                <PrivateRoute exact path="/manage-warehouse" component={withTracker(ManageWarehouse)} />
                </Suspense>

            </App>
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));
    
serviceWorker.unregister();
