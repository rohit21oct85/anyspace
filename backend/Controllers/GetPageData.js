
const State = require("../Modals/States")

const GetPageData=  (req, res,next)=>{


    State.find({
        slug:req.body.state
    },{ pageHtml: 1, pageCSS: 1})

    .then(resp=>{
        return res.status(200).json(resp)

     })
     .catch(err=>{
         return res.status(422).json(err)
     })




}

module.exports = GetPageData;