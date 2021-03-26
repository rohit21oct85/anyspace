
const ServiceContent = require("../Modals/ServiceContent")

const getServiceContent = (req, res,next)=>{
    ServiceContent.findOne({url: req.body.slug}).exec()
    .then(resp => {
        return res.status(200).json(resp)
     })
     .catch(err=>{
         return res.status(422).json(err)
     })
}

module.exports = getServiceContent;