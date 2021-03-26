const express = require('express');
const Industry = require("../Modals/Industry");
const fs = require('fs');

const AddIndustry = async (req, res, next) => {
  if(req.body.indID != undefined){
    Industry.findOneAndUpdate({ _id: req.body.indID }, { $set: req.body }, (err, doc) => {
      if (err) {
          return res.status(500).json({ message: "failed to upoad" })
      } else {
          res.status(201).json({
              message: "Industry susscessfully updated"
          })
      }
    });
  }else{
    Industry.findOne({ slug: req.body.slug.toLowerCase() })
    .exec().then(
      ind => {
        if (ind) {
          return res.status(422).json({
            message: "Industry, already exist"
          })
        }
        else {
          const newIndustryData = new Industry({
              name: req.body.name.toLowerCase(),
              slug: req.body.slug.toLowerCase(),
              image: req.body.images,
              created_at: req.body.created_at
          });
          newIndustryData.save()
            .then(result => {
                res.status(201).json({
                 message: "Industry created susscessfully"
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

module.exports = AddIndustry;