
const Warehouse = require("../Modals/warehouse");


const getWarehouseResults = (req, res, next) => {


    let resultLimit = 10;

    let pagenum = parseInt(req.query.pageNum || req.body.pageNum);
    let toSkip = parseInt(pagenum <= 1 ? 0 : pagenum * resultLimit - resultLimit);

    let qstring = req.query.location !== "india" ? (req.query.location || req.query.city).replace(/-/g, " ").toLowerCase() : null;


    let reqstate = req.query.location ? req.query.location : req.query.state;
    let reqcity = req.query.location ? req.query.location : req.query.city;


    let queryString = qstring ? {
        status: 1,

        $or: [
            {
                city: { $regex: `${reqcity.replace(/-/g, " ").toLowerCase()}` }
            },
            {
                state: { $regex: `${reqstate.replace(/-/g, " ").toLowerCase()}` }

            }
        ]

    }
        : { status: 1 }



    Warehouse.aggregate([
        { $match: queryString },
        { $skip: toSkip },
        { $limit: resultLimit },
        { $sort: { _id: -1 } },
        {
            $project: {

                priceStarts: 1,
                warehouseName: 1,
                Addressline3: 1,
                racking: 1,
                avilableFLoor: 1,
                wareHouseDesc: 1,
                warehouseSpace: 1,
                city: 1,
                state: 1,
                userId: 1,
                slug: 1,
                metadata: 1,
                sfPricePerPallet: 1,
                floorPricePerPallet: 1

            }
        }
    ])
        .exec()
        .then(
            warehouse => {
                return res.status(200).json(warehouse)
            }
        )
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })


}
module.exports = getWarehouseResults;