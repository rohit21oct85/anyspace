
const Services = require("../Modals/Services")

const getService =  (req, res,next)=>{
    Services.findOne({_id: req.body.slug}).exec()
    .then(resp => {
        return res.status(200).json(resp)
     })
     .catch(err=>{
         return res.status(422).json(err)
     })
}

module.exports = getService;