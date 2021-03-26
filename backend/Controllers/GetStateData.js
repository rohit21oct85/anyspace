
const State = require("../Modals/States")

const GetStateData=  (req, res,next)=>{


    State.findOne({slug:req.body.slug})
    .then(resp=>{
        return res.status(200).json(resp)

     })
     .catch(err=>{
         return res.status(422).json(err)
     })




}

module.exports = GetStateData;