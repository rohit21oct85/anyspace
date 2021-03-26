const express = require('express');
const Industry = require("../Modals/Industry");


const deleteIndustry = (req, res, next) => {
    Industry.deleteOne({ _id: req.body._id })
    .exec().then(
        response => {
            return res.status(201).json({
                message: "Industry, deleted successfully"
              })
      }).catch(err => console.log(err))
}

module.exports = deleteIndustry;