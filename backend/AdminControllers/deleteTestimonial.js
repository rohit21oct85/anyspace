const express = require('express');
const Testimonial = require("../Modals/Testimonial");

const deleteTestimonial = (req, res, next) => {
    Testimonial.deleteOne({ _id: req.body._id })
    .exec().then(
        response => {
            return res.status(201).json({
                message: "Client, deleted successfully"
              })
      }).catch(err => console.log(err))
}

module.exports = deleteTestimonial;