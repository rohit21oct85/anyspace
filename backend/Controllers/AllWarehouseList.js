
const WarehouseTable = require("../Modals/warehouse");

const AllWarehouseList=  (req, res,next)=>{
    WarehouseTable.find({},{}).exec()
    .then(resp => {
        return res.status(200).json(resp)
    })
    .catch(err=>{
        return res.status(422).json(err)
    })
}

module.exports = AllWarehouseList;