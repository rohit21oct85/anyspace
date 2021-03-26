
const User = require("../Modals/user");
const updateBillingInfo = (req, res, next) => {


    User.findOne({ _id: req.body.userId }, (err, user) => {
        if (err) {
            res.status(500).json(err)
        }
        if (user) {

            User.updateOne({ _id: req.body.userId },
                {
                    $set: {
                        name: req.body.name || user.name,
                        email: req.body.email.toLowerCase() || user.email,
                        companyName: req.body.companyName || user.companyName,
                        mobile: req.body.mobile || user.mobile,
                        billingAddress: {
                            addressline1: req.body.addressline1 || user.billingAddress.addressline1,
                            addressline2: req.body.addressline2 || user.billingAddress.addressline2,
                            addressline3: req.body.addressline3 || user.billingAddress.addressline3,
                            city: req.body.city || user.billingAddress.city,
                            state: req.body.state || user.billingAddress.state
                        }

                    }
                },
                (err, resp) => {
                    if (err) {
                        res.status(422).json(err)
                    }
                    if (resp) {
                        res.status(200).json({ messgae: "info updated" })
                    }
                })
        }
    })
}

module.exports = updateBillingInfo;
