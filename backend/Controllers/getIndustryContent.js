
const IndustryContent = require("../Modals/IndustryContent")

const getIndustryContent = (req, res,next)=>{
    console.log(req.body.slug)
    IndustryContent.findOne({slug: req.body.slug}).exec()
    .then(resp => {
         return res.status(200).json(resp)
     })
     .catch(err=>{
         console.log(err);
         return res.status(422).json(err)
     })
}

module.exports = getIndustryContent;