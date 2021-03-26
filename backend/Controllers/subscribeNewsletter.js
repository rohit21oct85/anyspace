const express = require('express');
const router = express.Router();
const newsLetter = require("../Modals/Newsletter");
const sendMail = require("../nodeMailerWithTemp")


router.post('/subscribeNewsletter', (req, res, next) => {

    newsLetterSubscribe = new newsLetter(req.body)
    console.log(req.body)
    newsLetterSubscribe.save()
        .then(response => {

            sendMail("AnySpaze Enquiry<no-reply@anyspaze.com>", "support@anyspaze.com",
            "new Subscriber to anyspaze.com",
            ` <table>
                <tr><td>Email</td><td>${req.body.subscriber_email}</td></tr>
            </table>
             `).then(mailstatus => {

                res.status(200).json({ message: "Subscribe Successfully" })
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