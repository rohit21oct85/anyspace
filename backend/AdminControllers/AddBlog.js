const express = require('express');
const Blog = require("../Modals/Blogs");
const fs = require('fs');

const AddBlog = async (req, res, next) => {
  if(req.body.blogID != undefined){
    Blog.findOneAndUpdate({ _id: req.body.blogID }, { $set: req.body }, (err, doc) => {
      if (err) {
          return res.status(500).json({ message: "failed to upoad" })
      } else {
          res.status(201).json({
              message: "Blog susscessfully updated"
          })
      }
    });
  }else{
    Blog.findOne({ slug: req.body.slug.toLowerCase() })
    .exec().then(
      blog => {
        if (blog) {
          return res.status(422).json({
            message: "blog, already exist"
          })
        }
        else {
          
          const blog = new Blog({
              title: req.body.title.toLowerCase(),
              slug: req.body.slug.toLowerCase(),
              description: req.body.description,
              category: req.body.category,
              image: req.body.images,
              created_at: req.body.created_at
          });
          blog.save()
            .then(result => {
                res.status(201).json({
                 message: "Blog created susscessfully"
                })
            })
            .catch(err => {
                console.error(err)
                res.status(401).json({
                error: err,
                message: "Error in saving blog."
                })
            })
        }
      })
  }
  
}

module.exports = AddBlog;