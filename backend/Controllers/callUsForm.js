const express = require('express');
const router = express.Router();
const CallEnq = require("../Modals/Call");
const sendMail = require("../nodeMailerWithTemp")


router.post('/callUsForm', (req, res, next) => {

    contact = new CallEnq(req.body)

    contact.save()
        .then(response => {

            sendMail("AnySpaze Call Enquiry<no-reply@anyspaze.com>", "support@anyspaze.com",
            "Enquiry from anyspaze.com",
            ` <table>
                <tr><td>Name</td><td>${req.body.fullname}</td></tr>
                <tr><td>Email</td><td>${req.body.email}</td></tr>
                <tr><td>Mobile</td><td>${req.body.mobile}</td></tr>
                <tr><td>Requirement</td><td>${req.body.requirement}</td></tr>
            </table>
             `).then(mailstatus => {

                res.status(200).json({ message: "Mail sent" })
            })
                .catch(error => {
                    res.status(500).json({ message: "error occured in sending mail", error: error })
            })
        })
        .catch(err => {
            console.error(err)
            res.status(400).json({
                error: err,
                messgae: "Failed to submit lead"
            })
        })


});

module.exports = router;