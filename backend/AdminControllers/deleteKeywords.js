const express = require('express');
const SeoTags = require("../Modals/SeoTags");


const deleteKeywords = (req, res, next) => {
    SeoTags.deleteOne({ _id: req.body._id })
    .exec().then(
        response => {
            return res.status(201).json({
                message: "keywords, deleted successfully"
              })
      }).catch(err => console.log(err))
}

module.exports = deleteKeywords;