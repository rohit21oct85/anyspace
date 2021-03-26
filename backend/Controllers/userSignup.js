const express = require('express');
const User = require("../Modals/user");
const bcrypt = require("bcrypt");

const userSignup = (req, res, next) => {

  User.findOne({ email: req.body.email.toLowerCase() })
    .exec().then(
      user => {
        if (user) {

          return res.status(422).json({
            message: "User with the email, already exist"
          })
        }
        else {
          bcrypt.hash(req.body.password, 10, (err, hash) => {

            if (err) {
              console.error(err)
              return res.status(401).json({
                error: err
              })
            }

            else {
              const user = new User({
                name: req.body.name,
                email: req.body.email.toLowerCase(),
                password: hash

              })
              user.save()
                .then(result => {
                  res.status(201).json({
                    message: "User registered susscessfully"
                  })
                })
                .catch(err => {
                  console.error(err)
                  res.status(401).json({
                    error: err
                  })
                })
            }
          })
        }
      })
}

module.exports = userSignup;