const express = require('express');
const IndustryContent = require("../Modals/IndustryContent");
const fs = require('fs');

const AddIndustryContent = async (req, res, next) => {
  if(req.body.indID != undefined){
    IndustryContent.findOneAndUpdate({ _id: req.body.indID }, { $set: req.body }, (err, doc) => {
      if (err) {
          return res.status(500).json({ message: "failed to upoad" })
      } else {
          res.status(201).json({
              message: "Industry content susscessfully updated"
          })
      }
    });
  }else{
    
          const newIndustryContent = new IndustryContent({
              slug: req.body.slug,
              banner_image: req.body.banner_image,
              bottom_content: req.body.bottom_content,
              heading_bottom: req.body.heading_bottom,
              heading_middle: req.body.heading_middle,
              heading_top: req.body.heading_top,
              middle_content: req.body.middle_content,
              top_content: req.body.top_content,
          });
          newIndustryContent.save()
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

module.exports = AddIndustryContent;