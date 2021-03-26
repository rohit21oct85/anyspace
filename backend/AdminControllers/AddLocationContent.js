const express = require('express');
const LocationContent = require("../Modals/LocationContent");
const fs = require('fs');

const AddLocationContent = async (req, res, next) => {
  if(req.body.locationID != undefined){
    LocationContent.findOneAndUpdate({ _id: req.body.locationID }, { $set: req.body }, (err, doc) => {
      if (err) {
          return res.status(500).json({ message: "failed to upoad" })
      } else {
          res.status(201).json({
              message: "Industry content susscessfully updated"
          })
      }
    });
  }else{
    
          const newLocationContent = new LocationContent({
              location: req.body.location,
              slider_image_1: req.body.slider_image_1,
              slider_image_2: req.body.slider_image_2,
              slider_image_3: req.body.slider_image_3,
              slider_image_4: req.body.slider_image_4,
              bottom_content: req.body.bottom_content,
              top_content: req.body.top_content,
          });
          newLocationContent.save()
            .then(result => {
                res.status(201).json({
                 message: "Industry content created susscessfully"
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

module.exports = AddLocationContent;