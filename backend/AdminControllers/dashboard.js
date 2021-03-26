const WareHouse = require("../Modals/warehouse");
const User = require("../Modals/user");
const States = require("../Modals/States");
const Lead = require("../Modals/leads");
const Contact = require("../Modals/contact");


const dashboard = async (req, res, next) => {



    const users = await User.find({}).countDocuments();
    const warehouses = await WareHouse.find({}).countDocuments();
    const inActiveWarehouses = await WareHouse.find({ status: 2 }).countDocuments();
    const enquiry = await Contact.find({}).countDocuments();
    const openEnquiry = await Contact.find({status:"Open"}).countDocuments();
    const closedEnquiry = await Contact.find({status:"Closed"}).countDocuments();
    const leads = await Lead.find({}).countDocuments();
    const openLeads = await Lead.find({status:"Open"}).countDocuments();
    const closedLeads = await Lead.find({status:"Closed"}).countDocuments();

    res.status(200).json({
        users,
        warehouses,
        inActiveWarehouses,
        enquiry,
        openEnquiry,
        closedEnquiry,
        leads,
        openLeads,
        closedLeads
    })

}

module.exports = dashboard;
