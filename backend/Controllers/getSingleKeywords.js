
const SeoTags = require("../Modals/SeoTags")

const getSingleKeywords =  (req, res,next)=>{
    // console.log("ID " + req.body.id)
    SeoTags.findOne({_id: req.body.id}).exec()
    .then(resp => {
        return res.status(200).json(resp)
     })
     .catch(err=>{
         return res.status(422).json(err)
     })
}

module.exports = getSingleKeywords;