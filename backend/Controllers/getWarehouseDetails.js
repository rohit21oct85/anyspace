
const Warehouse = require("../Modals/warehouse");

const getWarehouseDetails= (req, res, next) => {
  Warehouse.updateOne({_id:req.body.warehouseId}, {
     $inc: { views: 1}
  })


    Warehouse.findOne({_id:req.body.warehouseId}).exec()
    .then(resp=>{
       return res.status(200).json(resp)

    })
    .catch(err=>{
        return res.status(422).json(err)
    })




  }


module.exports = getWarehouseDetails