const express = require('express');
const Services = require("../Modals/Services");


const deleteService = (req, res, next) => {
    Services.deleteOne({ _id: req.body._id })
    .exec().then(
        response => {
            return res.status(201).json({
                message: "Services, deleted successfully"
              })
      }).catch(err => console.log(err))
}

module.exports = deleteService;