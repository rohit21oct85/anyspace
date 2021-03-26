const bcrypt = require("bcrypt");
const User = require('../Modals/user');

const resetPassword = (req, res, next) => {

    User.findOne(
        {
            resetPWToken: req.body.resetPWToken,
            resetPWTokenExpiry: { $gt: Date.now() },
            _id: req.body.userId
        },
        (err, user) => {
            if (err) {
                res.status(400).json({
                    message: "The link is expired"
                })
            }
            if (user) {
                bcrypt.hash(req.body.newPassword, 10, (err, hash) => {

                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    }
                    if (hash) {
                        User.updateOne({ _id: user._id },
                            {
                                $set: {
                                    password: hash,
                                    resetPWToken: undefined,
                                    resetPWTokenExpiry: undefined

                                }
                            }, (fail, succ) => {
                                if (fail) {
                                    return res.status(500).json({
                                        error: err,
                                        messgae: "unable to update password"
                                    })
                                }
                                if (succ) {
                                    return res.status(200).json({

                                        messgae: "password upadated"
                                    })
                                } else {
                                    return res.status(500).json({
                                        error: err,
                                        messgae: "unable to update password"
                                    })
                                }
                            })
                    }
                })



            } else {
                res.status(400).json({
                    message: "Some error occured2"
                })
            }


        })

}

module.exports = resetPassword;