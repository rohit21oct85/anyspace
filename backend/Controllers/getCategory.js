
const Category = require("../Modals/Category")

const getCategory =  (req, res,next)=>{
    Category.findOne({_id: req.body.slug}).exec()
    .then(resp => {
        return res.status(200).json(resp)
     })
     .catch(err=>{
         return res.status(422).json(err)
     })
}

module.exports = getCategory;