const express = require('express');
const User = require("../Modals/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userLogin = (req, res, next) => {

    User.findOne({ email: req.body.email.toLowerCase() })
        .exec()
        .then(
            user => {
                if (user) {
                    bcrypt.compare(req.body.password, user.password, (error, result) => {

                        if (error) {
                            res.status(422).json({
                                message: "invalid credential"
                            })
                        }
                        if (result) {

                            const token = jwt.sign({
                                email: user.email,
                                userId: user._id
                            },
                                process.env.JWT_KEY,
                                {
                                    expiresIn: 5 * 24 * 60 * 60
                                }
                            )
                            if (user.status !== "disabled") {
                                return res.status(200).json({
                                    message: "logged in",
                                    userName: user.name,
                                    token: token,
                                    expiresIn: 5 * 24 * 60 * 60
                                })
                            }else{
                                return res.status(403).json({
                                    message: "Account has been disabled, Kindly contact administrator"
                                })
                            }
                        }
                        res.status(400).json({
                            message: "auth failed"
                        })


                    })

                } else {
                    res.status(401).json({
                        message: "auth failed "
                    })
                }

            }

        )
        .catch(
            err => {
                console.log(err)

                res.status(500).json({
                    message: err
                })
            }
        )
}


module.exports = userLogin;