
const Category = require("../Modals/Category")

const getBlogCategory=  (req, res,next)=>{


    Category.find({},{ name: 1, slug: 1})
    .then(resp => {
        return res.status(200).json(resp)
     })
     .catch(err=>{
         return res.status(422).json(err)
     })
}

module.exports = getBlogCategory;