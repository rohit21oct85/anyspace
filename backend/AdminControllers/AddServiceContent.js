const express = require('express');
const ServiceContent = require("../Modals/ServiceContent");
const fs = require('fs');

const AddServiceContent = async (req, res, next) => {
  if(req.body._id != ''){
    ServiceContent.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }, (err, doc) => {
      if (err) {
          return res.status(500).json({ message: "failed to upoad" })
      } else {
          res.status(201).json({
              message: "Service Content susscessfully updated"
          })
      }
    });
  }else{
          if(req.body._id == ''){

          const Content = new ServiceContent({
              url: req.body.url,
              heading: req.body.heading,
              overview: req.body.overview,
              stats: req.body.stats,
              how_top_content: req.body.how_top_content,
              how_bottom_content: req.body.how_bottom_content,
              whyus_content: req.body.whyus_content,
              pointer_one_heading: req.body.pointer_one_heading,
              pointer_one_content: req.body.pointer_one_content,
              pointer_two_heading: req.body.pointer_two_heading,
              pointer_two_content: req.body.pointer_two_content,
              pointer_three_heading: req.body.pointer_three_heading,
              pointer_three_content: req.body.pointer_three_content,
              pointer_four_heading: req.body.pointer_four_heading,
              pointer_four_content: req.body.pointer_four_content,
              keybenifit_one_heading: req.body.keybenifit_one_heading,
              keybenifit_one_content: req.body.keybenifit_one_content,
              keybenifit_two_heading: req.body.keybenifit_two_heading,
              keybenifit_two_content: req.body.keybenifit_two_content,
              keybenifit_three_heading: req.body.keybenifit_three_heading,
              keybenifit_three_content: req.body.keybenifit_three_content,
              stats_image: req.body.stats_image,
              how_image: req.body.how_image,
              headmask_image: req.body.headmask_image,
              created_at: req.body.created_at
          });
          Content.save()
            .then(result => {
                res.status(201).json({
                 message: "Service Content created susscessfully"
                })
            })
            .catch(err => {
                console.error(err)
                res.status(401).json({
                error: err,
                message: "Service Content, Already Added"
                })
            })
        }
  }
  
}

module.exports = AddServiceContent;