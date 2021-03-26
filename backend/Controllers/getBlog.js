
const Blog = require("../Modals/Blogs")

const getBlog =  (req, res,next)=>{
    Blog.findOne({_id: req.body.slug}).exec()
    .then(resp => {
        return res.status(200).json(resp)
     })
     .catch(err=>{
         return res.status(422).json(err)
     })
}

module.exports = getBlog;