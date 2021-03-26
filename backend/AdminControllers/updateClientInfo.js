
const User = require("../Modals/user");
const Warehouse = require("../Modals/warehouse")
const updateClientInfo = (req, res, next) => {


    User.findOneAndUpdate({
        _id: req.body.clientID
    }, {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        companyName: req.body.companyName,
        billingAddress: {
            addressline1: req.body.billingAddress.addressline1,
            addressline2: req.body.billingAddress.addressline2,
            addressline3: req.body.billingAddress.addressline3,
            city: req.body.billingAddress.city,
            state: req.body.billingAddress.state
        },
        status: req.body.status,
    })
        .exec()
        .then(async data => {
            if (req.body.status === "disabled") {
                const res = await Warehouse.updateMany(
                    { userId: req.body.clientID },
                    { status: 2 });
                    console.log(res)
            }
            res.status(200).json({ message: "updated", data })
        })
        .catch(err => {
            res.status(400).json({ message: "failed to update", err })
        })

}

module.exports = updateClientInfo;