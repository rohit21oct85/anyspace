const express = require('express');
const Warehouse = require("../Modals/warehouse");

const deleteWarehouse = (req, res, next) => {
  let updatedstatus = req.body.currentStaus == 1 ? 2 : 1;

  Warehouse.updateOne({ _id: req.body.warehouseId },
    { $set: { status: updatedstatus } })
    .exec()
    .then(result => {

      res.status(200).json({
        message: "warehouse archived status updated",
        updatedStatus: updatedstatus
      })
    })
    .catch(err => {
      res.status(500).json({
        message: "Error occured",
        error: err
      })
    })

}

module.exports = deleteWarehouse;