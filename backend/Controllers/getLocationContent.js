
const LocationContent = require("../Modals/LocationContent")

const getLocationContent = (req, res,next)=>{
    
    LocationContent.findOne({location: req.body.location}).exec()
    .then(resp => {
        return res.status(200).json(resp)
     })
     .catch(err=>{
         return res.status(422).json(err)
     })
}

module.exports = getLocationContent;