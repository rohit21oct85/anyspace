const slugify = require('slugify')
const WareHouse = require("../Modals/warehouse");
const User = require("../Modals/user");
const States = require("../Modals/States");

const getWareHouseInfo = async (req, res, next) => {

    if (req.body.email) {

        let user = await User.findOne({ email: req.body.email })
        if (!user) {
            res.status(403).json({
                message: "no user with this email found"
            })
        }
        req.body.userId = user._id;
        req.body.city = req.body.city.toLowerCase(),
            req.body.state = req.body.state.toLowerCase()
        req.body.location = { "type": "Point", "coordinates": [req.body.longitude, req.body.latitude] };


        States.findOneAndUpdate(
            { "slug": req.body.state, 'cities.name': { $ne: req.body.city } },
            {
                $addToSet: {
                    cities: {
                        name: req.body.city,
                        slug: slugify(req.body.city, { replacement: '-', lower: true, })
                    }
                }
            },
            function (err, doc) {
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
    } else {
        WareHouse.findOneAndUpdate({ _id: req.body._id }, { $set: req.body }, (err, doc) => {
            if (err) {
                return res.status(500).json({ message: "failed to upoad" })
            } else {
                res.status(201).json({
                    message: "Warehouse susscessfully updated"
                })
            }
        }

        )
    }
}

module.exports = getWareHouseInfo;