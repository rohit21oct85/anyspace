
const WareHouse = require("../Modals/warehouse");
const getWareHouseInfo = (req, res, next) => {


    WareHouse.findOne({ _id: req.body.wareHouseID },
        {}
       , (err, user) => {
        if (err) {

            res.status(422).json(err)
        }
        if (user) {
            res.status(200).json(user)
        }

    })

}

module.exports = getWareHouseInfo;