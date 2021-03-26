
const State = require("../Modals/States")

const GetStatesList=  (req, res,next)=>{


    State.find({},{ name: 1, slug: 1, cities:1, code:1 })

    .then(resp=>{
        return res.status(200).json(resp)

     })
     .catch(err=>{
         return res.status(422).json(err)
     })




}

module.exports = GetStatesList;