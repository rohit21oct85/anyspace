const express = require('express');
const SeoTags = require("../Modals/SeoTags");
const fs = require('fs');

const AddSeoTags = async (req, res, next) => {
  
  if(req.body._id != undefined){
      SeoTags.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }, (err, doc) => {
        if (err) {
            return res.status(500).json({ message: "failed to upoad" })
        } else {
            res.status(201).json({
                message: "Keyword susscessfully updated"
            })
        }
    });
  }else{

    SeoTags.findOne({ url: req.body.url.toLowerCase()})
    .exec().then(
        Seo => {
        if(Seo){
          return res.status(422).json({
            message: "Keywords, already exist"
          })
        }
        else {
          
          const Seo = new SeoTags({
              url: req.body.url.toLowerCase(),
              meta_title: req.body.meta_title.toLowerCase(),
              meta_description: req.body.meta_description.toLowerCase(),
              keywords: req.body.keywords.toLowerCase(),
              alt_tag: req.body.alt_tag.toLowerCase(),
              canonical_tag: req.body.canonical_tag.toLowerCase(),
              meta_twitter: req.body.meta_twitter.toLowerCase(),
              meta_twitter_card: req.body.meta_twitter_card.toLowerCase(),
              meta_twitter_site: req.body.meta_twitter_site.toLowerCase(),
              meta_twitter_title: req.body.meta_twitter_title.toLowerCase(),
              meta_twitter_description: req.body.meta_twitter_description.toLowerCase(),
              og_url: req.body.og_url.toLowerCase(),
              og_site_name: req.body.og_site_name.toLowerCase(),
              robots: req.body.robots.toLowerCase(),
          });
          
          Seo.save()
          .then(result => {
            res.status(201).json({
              message: "Keywords created susscessfully"
            })
          })
          .catch(err => {
            res.status(401).json({
              error: err,
              message: "Keywords, Already Added"
            })
          })
        }
      })

  }
  

}

module.exports = AddSeoTags;