
const User = require("../Modals/user");
const getBillingInfo = (req, res, next) => {

    User.findOne({ _id: req.body.userId }, (err, user) => {
        if (err) {
            res.status(422).json(err)
        }
        if (user) {
            res.status(200).json(user)
        }

    })

}

module.exports = getBillingInfo;