const Warehouse = require("../Modals/warehouse");

const getWarehouseList= (req, res, next) => {

  const query = { userId: req.body.userId }

  if(req.query.status){
    query["status"]= req.query.status
  }
  console.log(query)

    Warehouse.find(
      query,
      { warehouseName: 1, Addressline1: 1, city: 1, state: 1, pin: 1, status:1,internalName:1 }
    )
      .exec()
      .then(
        warehouses => {
          return res.status(200).json(warehouses)
        }
      )
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })


  }

  module.exports = getWarehouseList;