
const User = require("../Modals/user");
const getClinetInfo = (req, res, next) => {

    User.findOne({ _id: req.body.clientID },
        {name:1,
            email:1,
            mobile:1,
            companyName:1,
            billingAddress:1,
            status:1}, (err, user) => {
        if (err) {

            res.status(422).json(err)
        }
        if (user) {
            res.status(200).json(user)
        }

    })

}

module.exports = getClinetInfo;