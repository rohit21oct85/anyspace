const express = require('express');
const Category = require("../Modals/Category");


const deleteCategory = (req, res, next) => {
    Category.deleteOne({ _id: req.body._id })
    .exec().then(
        response => {
            return res.status(201).json({
                message: "Category, deleted successfully"
              })
      }).catch(err => console.log(err))
}

module.exports = deleteCategory;