
const LocationContent = require("../Modals/LocationContent");

const getAllLocation=  (req, res,next)=>{
    LocationContent.find({},{
        location: ''
    })
        .then(resp => {
            return res.status(200).json(resp)
        })
        .catch(err=>{
            return res.status(422).json(err)
        })
}

module.exports = getAllLocation;