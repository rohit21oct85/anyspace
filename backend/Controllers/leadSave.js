
const express = require('express');
const Lead =  require("../Modals/leads");
const sendMail = require("../nodeMailerWithTemp")
const leadSave=  (req, res,next)=>{
    const lead = new Lead(req.body)
    lead.save()
    .then(response=>{
      sendMail("AnySpaze Enquiry<no-reply@anyspaze.com>", "support@anyspaze.com",
            "New warehouse lead recived| anyspaze",
            ` New warehouse lead recived from anyspaze, kindly check in admin
             `).then(mailstatus => {

                res.status(200).json({ message: "request sent" })
            })
                .catch(error => {
                    res.status(500).json({ message: "error occured in sending mail", error: error })
            })


    })
    .catch(err => {
        console.error(err)
        res.status(400).json({
          error: err,
          messgae:"Failed to submit lead"
        })
      })
}

module.exports = leadSave;