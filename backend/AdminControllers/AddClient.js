const express = require('express');
const Client = require("../Modals/Client");
const fs = require('fs');

const AddClient = async (req, res, next) => {
  if(req.body.clientID != undefined){
    Client.findOneAndUpdate({ _id: req.body.indID }, { $set: req.body }, (err, doc) => {
      if (err) {
          return res.status(500).json({ message: "failed to upoad" })
      } else {
          res.status(201).json({
              message: "Client susscessfully updated"
          })
      }
    });
  }else{
    
          const newClientData = new Client({
              client_image: req.body.client_image,
          });
            newClientData.save()
            .then(result => {
                res.status(201).json({
                 message: "Client created susscessfully"
                })
            })
            .catch(err => {
                console.error(err)
                res.status(401).json({
                error: err,
                message: "service, Already Added"
                })
            })
  }
  
}

module.exports = AddClient;