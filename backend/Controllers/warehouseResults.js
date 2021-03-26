
const Warehouse = require("../Modals/warehouse");
const { collection } = require("../Modals/warehouse");


const warehouseResults = async (req, res, next) => {


        let queryObj = { status: "1" }

        if (req.body.location && req.body.location !== "india") {

                queryObj = {
                        state: req.body.location,
                        status: "1"
                }

        } else if (req.body.city && req.body.state) {
                queryObj = {
                        city: req.body.city.toLowerCase(),
                        state: req.body.state,
                        status: "1"
                }
        }
        if (req.body.minSpace >= 0 && req.body.maxSpace === null) {


                queryObj = { ...queryObj, ...{ warehouseSpace: { $gt: req.body.minSpace } } }
        } else if (req.body.minSpace >= 0 && req.body.maxSpace !== null) {

                let spaceQuery = { $and: [{ warehouseSpace: { $gt: req.body.minSpace } }, { warehouseSpace: { $lte: req.body.maxSpace } }] }


                queryObj = { ...queryObj, ...spaceQuery }

        }
        if (req.body.FSSAIApproved) {

                queryObj = { ...queryObj, ... { FSSAIApproved: true } }
        }
        if (req.body.drugLicensed) {

                queryObj = { ...queryObj, ... { drugLicensed: true } }
        }
        if (req.body.exciseApproved) {


                queryObj = { ...queryObj, ... { exciseApproved: true } }
        }

        let shortBy = {}
        if (req.body.sort === 1) {
                shortBy = {
                        _id: 1
                }

        }
        else if (req.body.sort === "popularity") {
                shortBy = {
                        views: -1
                }

        }
        else if (req.body.sort === "ascending" || req.body.sort === 1) {
                shortBy = {
                        _id: 1
                }

        }
        else if (req.body.sort === "descending") {
                shortBy = {
                        _id: -1
                }

        }



        let limit = 10;
        let skip = req.body.pageNumber * limit - limit;


        let total = await Warehouse.find(queryObj).countDocuments();


        Warehouse.aggregate([
                {
                        "$match": queryObj
                },
                {
                        $project: {
                                warehouseName: "$warehouseName",
                                Addressline3: "$Addressline3",
                                city: "$city",
                                state: "$state",
                                warehouseSpace: "$warehouseSpace",
                                wareHouseDesc: "$wareHouseDesc",
                                avilableFLoor: "$avilableFLoor",
                                racking: "$racking",
                                slug: "$slug",
                                images: "$images",
                                views:"$views"


                        }

                },

                { "$sort": shortBy }
        ]).skip(skip).limit(limit)
                .exec()
                .then(warehouse => {
                        return res.status(200).json({
                                warehouse: warehouse,
                                total: total
                        })
                })
                .catch(err => {
                        console.log(err)
                        return res.status(422).json(err)
                })

}
module.exports = warehouseResults;