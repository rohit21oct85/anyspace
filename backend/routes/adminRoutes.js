const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken")
const User = require('../Modals/user');
const Warehouses = require('../Modals/warehouse');

router.post("/login", (req, res, next) => {
    if (req.body.email === "admin@anyspaze.com" && req.body.password === "P@ss@word11") {


        const token = jwt.sign({
            email: "admin@anyspaze.com",

        },
            process.env.JWT_KEY,
            {
                expiresIn: "24h"
            }
        )

        return res.status(200).json({
            message: "logged in",
            userName: "Admin",
            token: token
        })
    } else {
        res.status(500).json({
            message: "failed"
        })
    }


})

router.post("/clients", async (req, res, next) => {

    let rlimit = 10,
        rskip = req.body.page <= 1 ? 0 : (req.body.page * 10 - 10);

    let resultCount = await User.estimatedDocumentCount();
    User.find({})
        .sort({ _id: -1 })
        .skip(+rskip)
        .limit(rlimit)
        .exec()

        .then(users => {

            res.status(200).json({
                users: users,
                resultCount: resultCount
            })
        })

})
router.post("/findClient",  (req, res, next) => {

    User.findOne({email:req.body.email})
        .exec()

        .then(user => {

            res.status(200).json({users:[user]})
        })

})
router.post("/warehouses", async (req, res, next) => {
    console.log(req.body)

    let rlimit = 10,
        rskip = req.body.pagenum <= 1 ? 0 : (req.body.pagenum * 10 - 10);

    let queryObj = req.body.clientID ? { userId: req.body.clientID } : {}
    let resultCount = await Warehouses.count();

    Warehouses.aggregate([
        { $match: queryObj },
    ])
        .sort({ _id: -1 })
        .skip(+rskip)
        .limit(rlimit)
        .exec()
        .then(warehouses => {

            res.status(200).json({
                warehouses: warehouses,
                resultCount: resultCount
            })
        })

})
router.post("/changewarehousestatus", (req, res, next) => {
    let updatedStatus = req.body.currentStatus === "2" ? "1" : "2"


    Warehouses.updateOne({ _id: req.body.warehouseId },
        { $set: { status: updatedStatus } }
    )

        .exec()
        .then(warehouses => {
            res.status(200).json(
                {
                    message: "updated", updatedStatus: updatedStatus,
                    id: req.body.warehouseId,
                    status: updatedStatus

                })
        })

})

module.exports = router