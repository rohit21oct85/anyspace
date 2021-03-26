
const CityState = require("../Modals/City-State")

const GetCitiesByState=  (req, res,next)=>{


    CityState.find({state:req.body.state})
    .then(resp=>{
        return res.status(200).json(resp)

     })
     .catch(err=>{
         return res.status(422).json(err)
     })




}

module.exports = GetCitiesByState;