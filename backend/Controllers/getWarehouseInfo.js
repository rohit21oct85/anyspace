const express = require('express');
const Warehouse = require("../Modals/warehouse");

const getWarehouseInfo= (req, res, next) => {

    Warehouse.findOne({ _id: req.query.warehouseId })
      .exec()
      .then(
        warehouse => {

          return res.status(200).json(warehouse)
        }
      )
      .catch(err => {
        res.status(500).json({
          error: err
        })
      })


  }

  module.exports = getWarehouseInfo;