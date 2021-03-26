const User = require('../Modals/user');
const crypto = require("crypto")
const resetPassword = require("./ResetPW");
const sendMail = require("../nodeMailerWithTemp");

const ForgetPassword = (req, res, next) => {


    if (req.body.resetPWToken) {
        resetPassword()

    } else {



        User.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
            if (err) {
                res.status(400).json({
                    message: "Some error occured"
                })
            }
            if (!user) {
                res.status(400).json({
                    message: "No such user"
                })
            }
            if (user) {
                let hash;
                crypto.randomBytes(32, (err, buffer) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        })
                    }
                    hash = buffer.toString('hex');
                    User.updateOne(
                        { email: user.email },
                        { $set: { resetPWToken: hash, resetPWTokenExpiry:Date.now()+ 36000 } }, (er, usr) => {

                        if (er) {
                            res.status(400).json({
                                message: "Some error occured"
                            })
                        }
                        if (usr) {

                            User.updateOne({ email: user.email },
                                { $set: { resetPWToken: hash ,  resetPWTokenExpiry:Date.now()+ 3600000} },
                                (err2, res2) => {
                                    if (err2) {
                                        res.status(500).json({
                                            error: err
                                        })
                                    }
                                    if (res2) {
                                        sendMail(
                                            "AnySpaze.com <no-reply@anyspaze.com>",
                                            user.email,
                                            "Recover your password",

                                            `Hello ${user.name},<br/>
                                        Click below link to recover your password.
                                        <br/>
                                        <a href="https://www.anyspaze.com/forget-password/${user._id}/${hash}">Click Here</a><br/>

                                        This link is valid only for 10 mins
                                        `)
                                        .then(mailstatus => {

                                                res.status(200).json({ message: "reset pw mail sent" })
                                            })
                                        .catch(error => {
                                                res.status(500).json({ message: "error occured in sending mail", error: error })
                                            })

                                    } else {
                                        res.status(500).json({
                                            error: err
                                        })
                                    }

                                })
                        }
                        else {
                            res.status(400).json({
                                message: "Some error occured"
                            })
                        }

                    })

                })
            }

        })
    }
}

module.exports = ForgetPassword;