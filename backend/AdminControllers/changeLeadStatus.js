
const Lead = require("../Modals/leads");

const changeEnquiryStatus =  (req, res, next) => {



    Lead.findOneAndUpdate({ _id: req.body._id },
        {
            status: req.body.status
        })

        .then(lead => {
                res.status(200).json({ message: "Updated",lead })


        })
        .catch(err => {
            res.status(422).json(err)
        })

}

module.exports = changeEnquiryStatus;