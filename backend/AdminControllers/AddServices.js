const express = require('express');
const Services = require("../Modals/Services");
const fs = require('fs');

const AddServices = async (req, res, next) => {
  if(req.body.serID != undefined){
    Services.findOneAndUpdate({ _id: req.body.serID }, { $set: req.body }, (err, doc) => {
      if (err) {
          return res.status(500).json({ message: "failed to upoad" })
      } else {
          res.status(201).json({
              message: "Services susscessfully updated"
          })
      }
    });
  }else{
    Services.findOne({ slug: req.body.slug.toLowerCase() })
    .exec().then(
      service => {
        if (service) {
          return res.status(422).json({
            message: "service, already exist"
          })
        }
        else {
          
          const service = new Services({
              name: req.body.name.toLowerCase(),
              slug: req.body.slug.toLowerCase(),
              image: req.body.images,
              created_at: req.body.created_at
          });
          service.save()
            .then(result => {
                res.status(201).json({
                 message: "service created susscessfully"
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
      })
  }
  
}

module.exports = AddServices;