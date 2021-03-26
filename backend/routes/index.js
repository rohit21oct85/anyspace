const express = require('express');
const router = express.Router();

const ForgetPassword =  require("../Controllers/forgetPw");
const ResetPassword =  require("../Controllers/ResetPW");
const UserSummary =  require("../Controllers/userDashboardSummary");
const AddWarehouse =  require("../Controllers/addWarehouse");
const GetWarehouseList =  require("../Controllers/getWarehouseList");
const GetWarehouseInfo =  require("../Controllers/getWarehouseInfo");
const UpdateBillingInfo =  require("../Controllers/updateBillingInfo");
const GetBillingInfo =  require("../Controllers/getBillingInfo");
const GetWarehouseResults =  require("../Controllers/getWarehouseResults");
const ArchivedWarehouse =  require("../Controllers/archivedWarehouse");
const UserSignup =  require("../Controllers/userSignup");
const UserLogin =  require("../Controllers/userLogin");
const ChangePassword =  require("../Controllers/changePassword");
const FileUpload =  require("../Controllers/fileUpload");
const DeleteFile=  require("../Controllers/deleteFile");
const checkAuth = require("../Middleware/check-auth");
const LeadSave = require("../Controllers/leadSave");
const Getcities = require("../Controllers/letcities");
const GetWarehouseDetails = require("../Controllers/getWarehouseDetails");
const ContactForm = require("../Controllers/ContactForm");
const callUsForm = require("../Controllers/callUsForm");
const subscribeNewsLetter = require("../Controllers/subscribeNewsletter");
const WarehouseResults = require("../Controllers/warehouseResults");
const Addtoshortlist = require("../Controllers/addToShortlist");
const GetCitiesByState = require("../Controllers/GetCitiesByState");
const GetStatesList = require('../Controllers/GetStatesList');
const GetStateData = require('../Controllers/GetStateData');
const GetPageData = require('../Controllers/GetPageData');

const GetBlogsList = require('../Controllers/GetBlogsList');
const getSingleBlog = require('../Controllers/getSingleBlog');
const getBlog = require('../Controllers/getBlog');
const getCategory = require('../Controllers/getCategory');

const getSeoKeywordList = require('../Controllers/getSeoKeywordList');
const getSingleKeywords = require('../Controllers/getSingleKeywords');
const getKeywords = require('../Controllers/getKeywords');
const getBlogCategory = require('../Controllers/getBlogCategory');
const getService = require('../Controllers/getService');
const getServiceList = require('../Controllers/getServiceList');
const getServiceContent = require('../Controllers/getServiceContent');
const getIndustryList = require('../Controllers/getIndustryList');
const getIndustry = require('../Controllers/getIndustry');
const getIndustryContent = require('../Controllers/getIndustryContent');
const getClientList = require('../Controllers/getClientList');
const getClient = require('../Controllers/getClient');
const getTestimonial = require('../Controllers/getTestimonial');
const getTestimonialList = require('../Controllers/getTestimonialList');
const getLocationContent = require('../Controllers/getLocationContent');
const getAllLocation = require('../Controllers/getAllLocation');
const AllWarehouseList = require('../Controllers/AllWarehouseList');
const WarehouseListByState = require('../Controllers/WarehouseListByState');

router.post("/warehouse",checkAuth,  AddWarehouse);
router.get("/warehouse", checkAuth, GetWarehouseInfo);
router.post("/archived",checkAuth,ArchivedWarehouse);
router.get("/warehouses",checkAuth, GetWarehouseList);
router.post("/addtoshortlist",checkAuth, Addtoshortlist);
router.get("/warehousesResults",GetWarehouseResults);
router.post("/warehousesResults", WarehouseResults);

router.post("/usersummary",checkAuth, UserSummary)
router.post("/forgetPw", ForgetPassword)
router.post("/resetPw", ResetPassword)
router.post("/billinginfo",checkAuth, UpdateBillingInfo)
router.get("/billinginfo", checkAuth,GetBillingInfo)
router.post('/signup', UserSignup);
router.post('/login', UserLogin );
router.post("/changePassword",checkAuth, ChangePassword )
router.post("/fileupload", checkAuth, FileUpload );
router.post("/deleteFiles", checkAuth, DeleteFile )
router.post("/lead", LeadSave )
router.get("/getcities", Getcities )
router.post("/getcitiesbystate", GetCitiesByState )
router.post("/warehouseDetails", GetWarehouseDetails )
router.post("/contactForm", ContactForm )
router.post("/callUsForm", callUsForm )
router.post("/subscribeNewsLetter", subscribeNewsLetter )
router.post('/getStateList', GetStatesList);
router.post('/getStateData', GetStateData);
router.post('/getPageData', GetPageData);

router.get('/GetBlogsList', GetBlogsList);
router.post('/getSingleBlog', getSingleBlog);
router.post('/getBlog', getBlog);
router.post('/getCategory', getCategory);
router.post('/getBlogCategory', getBlogCategory);
router.post('/getSeoKeywordList', getSeoKeywordList);
router.post('/getSingleKeywords', getSingleKeywords);
router.post('/getKeywords', getKeywords);
router.post('/getService', getService);
router.post('/getServiceList', getServiceList);
router.post('/getServiceContent', getServiceContent);
router.post('/getIndustryList', getIndustryList);
router.post('/getIndustry', getIndustry);
router.post('/getIndustryContent', getIndustryContent);
router.post('/getClientList', getClientList);
router.post('/getClient', getClient);
router.post('/getTestimonial', getTestimonial);
router.post('/getTestimonialList', getTestimonialList);
router.post('/getLocationContent', getLocationContent);
router.post('/getAllLocation', getAllLocation);
router.get('/AllWarehouseList', AllWarehouseList);
router.post('/WarehouseListByState', WarehouseListByState);






module.exports = router
