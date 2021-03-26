
const Blog = require("../Modals/Blogs")

const getSingleBlog =  (req, res,next)=>{
    Blog.findOne({slug: req.body.slug}).exec()
    .then(resp => {
        return res.status(200).json(resp)
     })
     .catch(err=>{
         return res.status(422).json(err)
     })
}

module.exports = getSingleBlog;