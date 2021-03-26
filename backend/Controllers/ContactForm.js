const express = require('express');
const router = express.Router();
const contactEnq = require("../Modals/contact");
const sendMail = require("../nodeMailerWithTemp")


router.post('/contactForm', (req, res, next) => {

    contact = new contactEnq(req.body)

    contact.save()
        .then(response => {

            sendMail("AnySpaze Enquiry<no-reply@anyspaze.com>", "support@anyspaze.com",
            "Enquiry from anyspaze.com",
            ` <table>
                <tr><td>Name</td><td>${req.body.fullname}</td></tr>
                <tr><td>Email</td><td>${req.body.email}</td></tr>
                <tr><td>Mobile</td><td>${req.body.mobile}</td></tr>
                <tr><td>Company</td><td>${req.body.company}</td></tr>
                <tr><td>Message</td><td>${req.body.message}</td></tr>
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