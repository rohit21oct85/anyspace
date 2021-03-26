
const Services = require("../Modals/Services");

const getServiceList=  (req, res,next)=>{
    Services.find({},{
        name: '',
        slug: '',
        image:'',
        created_at: '',
    })
        .then(resp => {
            return res.status(200).json(resp)
        })
        .catch(err=>{
            return res.status(422).json(err)
        })
}

module.exports = getServiceList;