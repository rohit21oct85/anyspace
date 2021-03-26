
const Client = require("../Modals/Client")

const getClient = (req, res,next)=>{
    Client.findOne({_id: req.body.clientID}).exec()
    .then(resp => {
         return res.status(200).json(resp)
     })
     .catch(err=>{
         console.log(err);
         return res.status(422).json(err)
     })
}

module.exports = getClient;