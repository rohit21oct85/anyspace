
const Contact = require("../Modals/contact");

const changeEnquiryStatus =  (req, res, next) => {

    Contact.findOneAndUpdate({ _id: req.body._id },
        {
            status: req.body.status
        })

        .then(enq => {

            if (enq) {
                res.status(200).json({ message: "Updated" , enq})
            }

        })
        .catch(err => {
            res.status(422).json(err)
        })

}

module.exports = changeEnquiryStatus;