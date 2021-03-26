const express = require('express');
const IndustryContent = require("../Modals/IndustryContent");


const deleteIndustryContent = (req, res, next) => {
    IndustryContent.deleteOne({ _id: req.body._id })
    .exec().then(
        response => {
            return res.status(201).json({
                message: "Industry Content, deleted successfully"
              })
      }).catch(err => console.log(err))
}

module.exports = deleteIndustryContent;