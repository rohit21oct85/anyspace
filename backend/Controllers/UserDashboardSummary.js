
const Warehouse = require("../Modals/warehouse");

const userDashboardSummary= (req, res, next) => {


    Warehouse.find({ userId: req.body.userId }, (err, data) => {
        let inActiveWarehouse = 0,
        activeWarehouse = 0;
        data.forEach((w, i) => {


            if (w.status == 1) {
                activeWarehouse = activeWarehouse + 1
            } else {
                inActiveWarehouse = inActiveWarehouse + 1
            }

        })
        res.status(200).json({
            activeWareHouses: activeWarehouse,
            inActiveWareHouses: inActiveWarehouse
        })
    })


}


module.exports = userDashboardSummary