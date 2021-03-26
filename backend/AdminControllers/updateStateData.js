const StateData = require("../Modals/States");
const updateStateData = async (req, res, next) => {
    
    StateData.findOneAndUpdate(
        {slug:req.body.slug},
        {pageHtml:req.body.pageHtml , pageCSS:req.body.pageCSS},
        {new:true},
        (err, doc)=>{
            if(!err){
                res.status(200).json({messgae:"updated"})
            }else{
                res.status(400).json({messgae:"error"})
            }

        }
    )


}

module.exports = updateStateData;
