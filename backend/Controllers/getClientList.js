
const Client = require("../Modals/Client");

const getClientList=  (req, res,next)=>{
    Client.find({},{
        client_image: ''
    })
    .then(resp => {
        return res.status(200).json(resp)
    })
    .catch(err=>{
        return res.status(422).json(err)
    })
}

module.exports = getClientList;