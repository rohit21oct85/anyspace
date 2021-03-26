
const WarehouseTable = require("../Modals/warehouse");

const WarehouseListByState=  (req, res,next)=>{
    WarehouseTable.find({state: req.body.state},{}).exec()
    .then(resp => {
        return res.status(200).json(resp)
    })
    .catch(err=>{
        return res.status(422).json(err)
    })
}

module.exports = WarehouseListByState;