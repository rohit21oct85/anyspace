
const Lead =  require("../Modals/leads");
const getLeads = async (req, res, next) => {
    let rlimit = 10,
        rskip = req.body.page <= 1 ? 0 : (req.body.page * 10 - 10);

    resultCount = await Lead.find({}).countDocuments()


    Lead.find({}, {
        name: 1,
        email: 1,
        mobile: 1,
        message: 1,
        warehouseId: 1,
        status:1

    }).sort({ _id: -1 })
        .skip(+rskip)
        .limit(rlimit)
        .exec()
        .then(leads => {

            if (leads) {
                res.status(200).json({resultCount, leads})
            }

        })
        .catch(err => {
            res.status(422).json(err)
        })

}

module.exports = getLeads;