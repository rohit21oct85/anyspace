const express = require('express');
const Blog = require("../Modals/Blogs");


const AddBlog = (req, res, next) => {
  Blog.deleteOne({ _id: req.body._id })
    .exec().then(
        response => {
            return res.status(201).json({
                message: "blog, deleted successfully"
              })
      }).catch(err => console.log(err))
}

module.exports = AddBlog;