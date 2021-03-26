const express = require('express');
const Client = require("../Modals/Client");


const deleteClient = (req, res, next) => {
    Client.deleteOne({ _id: req.body._id })
    .exec().then(
        response => {
            return res.status(201).json({
                message: "Client, deleted successfully"
              })
      }).catch(err => console.log(err))
}

module.exports = deleteClient;