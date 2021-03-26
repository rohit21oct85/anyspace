
const CityState = require("../Modals/City-State")

const leadSave=  (req, res,next)=>{


   CityState.find({

   }, (err, data)=>{
    if(data){
        res.status(200).json(data)
    }
   })


}

module.exports = leadSave;