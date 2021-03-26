var slugify = require('slugify')
const Warehouse = require("../Modals/warehouse");
const CityState = require("../Modals/City-State");
const States = require("../Modals/States");
const addWarehouse = (req, res, next) => {

  req.body.city = req.body.city.toLowerCase(),
  req.body.state = req.body.state.toLowerCase()
  req.body.location = { "type": "Point", "coordinates": [req.body.longitude, req.body.latitude] };
  if (req.body._id) {
    Warehouse.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }, (err, doc) => {
      if (err) {
        return res.status(500).json({ message: "failed to upoad" })
      } else {
        res.status(201).json({
          message: "Warehouse susscessfully updated"
        })
      }
    }

    )
  } else {
    States.findOneAndUpdate(
      { "slug": req.body.state,'cities.name':{ $ne:req.body.city }},
      {
        $addToSet: {
          cities: {
            name: req.body.city,
            slug: slugify(req.body.city, { replacement: '-', lower: true, })
          }
        }
      },
      function(err, doc) {
       console.log(err)
    }
    )

     req.body.slug = slugify((req.body.warehouseName + "-in-" + req.body.Addressline3 + "-" + req.body.city), {
      replacement: '-',
      remove: undefined,
      lower: true,
      strict: true
    })

    const warehouse = new Warehouse(req.body)

    warehouse.save().then(result => {
      res.status(201).json({
        message: "Warehouse added susscessfully"
      })
    }).catch(err => {
      res.status(500).json({
        error: err
      })
    })
  }
}

module.exports = addWarehouse;