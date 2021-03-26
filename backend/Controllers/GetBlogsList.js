
const Blog = require("../Modals/Blogs")

const GetBlogsList=  (req, res,next)=>{
    const category = parseInt(req.query.category);
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

  

    Blog.find({},{ title: 1, slug: 1,description: 1, created_at: '',category: category,image:'',blog_alt_tag:'' }).exec()
    .then(resp => {
        
    const startIndex = ( page - 1 ) * limit;
    const endIndex = page * limit;
    const results = {}; 
    
    if(startIndex > 0){
        results.prev = {
            page: page - 1 ,
            limit: limit
        }
    }

    if(endIndex < resp.length){

        results.next = {
            page: page +1 ,
            limit: limit
        }
    }

        results.data = resp.slice(startIndex, endIndex);   

        return res.status(200).json(results)
     })
     .catch(err=>{
         return res.status(422).json(err)
     })
}

module.exports = GetBlogsList;