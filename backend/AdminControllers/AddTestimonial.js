const express = require('express');
const Testimonial = require("../Modals/Testimonial");
const fs = require('fs');

const AddTestimonial = async (req, res, next) => {
  if(req.body.testimonialID != undefined){
    Testimonial.findOneAndUpdate({ _id: req.body.testimonialID }, { $set: req.body }, (err, doc) => {
      if (err) {
          return res.status(500).json({ message: "failed to upoad" })
      } else {
          res.status(201).json({
              message: "Testimonial susscessfully updated"
          })
      }
    });
  }else{
    
            const newTestimonialData = new Testimonial({
              client_image: req.body.client_image,
              client_name: req.body.client_name,
              client_company: req.body.client_company,
              client_message: req.body.client_message,
              client_rating: req.body.client_rating,
            });
            newTestimonialData.save()
            .then(result => {
                res.status(201).json({
                 message: "Client created susscessfully"
                })
            })
            .catch(err => {
                console.error(err)
                res.status(401).json({
                error: err,
                message: "service, Already Added"
                })
            })
  }
  
}

module.exports = AddTestimonial;