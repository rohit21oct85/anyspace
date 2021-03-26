const express = require('express');
const User = require("../Modals/user");
const bcrypt = require("bcrypt");

const changePassword = (req, res, next) => {

    User.findOne({ _id: req.body.userId })
        .exec()
        .then(
            user => {
                if (user) {



                    bcrypt.compare(req.body.currentPassword, user.password, (error, result) => {


                        if (error || !result) {
                            res.status(422).json({
                                message: "Please enter correct current password"
                            })
                        }

                        if (result) {
                            bcrypt.hash(req.body.newPassword, 10, (err, hash) => {
                                if (err) {
                                    res.status(500).json({
                                        message: "Some error occured, failed to update password"
                                    })
                                } else {
                                    User.updateOne({ _id: req.body.userId }, {
                                        $set: {
                                            password: hash
                                        }
                                    }, (er, rs) => {
                                        if (er) {
                                            res.status(500).json({
                                                message: "Some error occured, failed to update password"
                                            })
                                        } else {
                                            res.status(200).json({
                                                message: "Password changed successfully"
                                            })
                                        }
                                    })
                                }

                            })
                        }

                    })
                } else {
                    res.status(422).json({
                        message: "Please enter correct current password"
                    })
                }
            }
        )
}

module.exports = changePassword;