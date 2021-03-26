
const Industry = require("../Modals/Industry");

const getIndustryList=  (req, res,next)=>{


    Industry.find({},{
        name: '',
        slug: '',
        created_at: '',
    })
    .then(resp => {
        return res.status(200).json(resp)
    })
    .catch(err=>{
        return res.status(422).json(err)
    })
}

module.exports = getIndustryList;