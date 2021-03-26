
const SeoTags = require("../Modals/SeoTags")

const getKeywords =  (req, res,next)=>{
    // console.log("ID " + req.body.id)
    SeoTags.findOne({url: req.body.url}).exec()
    .then(resp => {
        return res.status(200).json(resp)
     })
     .catch(err=>{
         return res.status(422).json(err)
     })
}

module.exports = getKeywords;