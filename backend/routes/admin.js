//admin routes
const express = require('express');
const router = express.Router();
const checkAuth = require("../Middleware/check-auth");
const adminRoutes= require("./adminRoutes")

const getleads = require("../AdminControllers/getleads")
const getContact = require("../AdminControllers/getContact");
const updateStateData = require('../AdminControllers/updateStateData');
const getClientInfo = require("../AdminControllers/getClientInfo")
const updateClientInfo = require("../AdminControllers/updateClientInfo")
const getWarehouseInfo  = require("../AdminControllers/getWarehouseInfo")
const addWarehouse = require("../AdminControllers/addWarehouse")
const dashboard = require("../AdminControllers/dashboard")
const changeEnquiryStatus =  require("../AdminControllers/changeEnquiryStatus")
const changeLeadStatus =  require("../AdminControllers/changeLeadStatus")
const AddBlog = require('../AdminControllers/AddBlog');
const AddSeoTags = require('../AdminControllers/AddSeoTags');
const AddCategory = require('../AdminControllers/AddCategory');
const deleteBlog = require('../AdminControllers/deleteBlog');
const deleteCategory = require('../AdminControllers/deleteCategory');
const deleteService = require('../AdminControllers/deleteService');
const deleteKeywords = require('../AdminControllers/deleteKeywords');
const AddServices = require('../AdminControllers/AddServices');
const AddServiceContent = require('../AdminControllers/AddServiceContent');
const AddIndustry = require('../AdminControllers/AddIndustry');
const deleteIndustry = require('../AdminControllers/deleteIndustry');
const AddIndustryContent = require('../AdminControllers/AddIndustryContent');
const deleteIndustryContent = require('../AdminControllers/deleteIndustryContent');
const AddClient = require('../AdminControllers/AddClient');
const deleteClient = require('../AdminControllers/deleteClient');
const AddTestimonial = require('../AdminControllers/AddTestimonial');
const deleteTestimonial = require('../AdminControllers/deleteTestimonial');
const AddLocationContent = require('../AdminControllers/AddLocationContent');

router.post('/login', adminRoutes);
router.post('/clients', checkAuth, adminRoutes);
router.post('/warehouses', checkAuth, adminRoutes);
router.post('/changewarehousestatus', checkAuth, adminRoutes);
router.post('/leads', checkAuth, getleads);
router.post('/contact', checkAuth, getContact);
router.post('/updateStateData', checkAuth, updateStateData);
router.post('/getClientInfo', checkAuth, getClientInfo);
router.post('/updateClientInfo', checkAuth, updateClientInfo);
router.post('/getWarehouseInfo', checkAuth, getWarehouseInfo );
router.post('/addWarehouse', checkAuth, addWarehouse)
router.post("/dashboard", checkAuth, dashboard)
router.post("/changeEnquiryStatus", checkAuth,changeEnquiryStatus)
router.post("/changeLeadStatus", checkAuth,changeLeadStatus)
router.post("/findClient", checkAuth, adminRoutes)

router.post('/AddBlog', checkAuth ,AddBlog);
router.post('/AddSeoTags', checkAuth ,AddSeoTags);
router.post('/AddCategory', checkAuth ,AddCategory);
router.post('/deleteBlog', checkAuth ,deleteBlog);
router.post('/deleteCategory', checkAuth ,deleteCategory);
router.post('/deleteService', checkAuth ,deleteService);
router.post('/deleteKeywords', checkAuth ,deleteKeywords);
router.post('/AddServices', checkAuth ,AddServices);
router.post('/AddServiceContent', checkAuth ,AddServiceContent);
router.post('/AddIndustry', checkAuth ,AddIndustry);
router.post('/deleteIndustry', checkAuth ,deleteIndustry);
router.post('/AddIndustryContent', checkAuth ,AddIndustryContent);
router.post('/deleteIndustryContent', checkAuth ,deleteIndustryContent);
router.post('/AddClient', checkAuth ,AddClient);
router.post('/deleteClient', checkAuth ,deleteClient);
router.post('/AddTestimonial', checkAuth ,AddTestimonial);
router.post('/deleteTestimonial', checkAuth ,deleteTestimonial);
router.post('/AddLocationContent', checkAuth ,AddLocationContent);








module.exports = router;