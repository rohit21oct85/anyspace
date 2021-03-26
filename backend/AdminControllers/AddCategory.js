const express = require('express');
const Category = require("../Modals/Category");


const AddCategory = (req, res, next) => {
  if(req.body.catID != undefined){
    Category.findOneAndUpdate({ _id: req.body.catID }, { $set: req.body }, (err, doc) => {
      if (err) {
          return res.status(500).json({ message: "failed to upoad" })
      } else {
          res.status(201).json({
              message: "Category susscessfully updated"
          })
      }
    });
  }else{
    Category.findOne({ slug: req.body.slug.toLowerCase() })
    .exec().then(
      NewCategory => {
        if(NewCategory) {
          return res.status(422).json({
            message: "Category, already exist"
          })
        }
        else {
          
            const myCat = new Category({
                name: req.body.name.toLowerCase(),
                slug: req.body.slug.toLowerCase(),
            });

            myCat.save()
            .then(result => {
                res.status(201).json({
                 message: "Category created susscessfully"
                })
            })
            .catch(err => {
                console.error(err)
                res.status(401).json({
                error: err,
                message: "Category, Already Added"
                })
            })
        }
      })
  }
    
}

module.exports = AddCategory;