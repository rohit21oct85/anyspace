
const SeoTags = require("../Modals/SeoTags");

const getSeoKeywordList=  (req, res,next)=>{


    SeoTags.find({},{
        url: "",
        meta_title: "",
        meta_description: "",
        keywords: "",
        alt_tag: "",
        canonical_tag: "",
        meta_twitter: "",
        meta_twitter_card: "",
        meta_twitter_site: "",
        meta_twitter_title: "",
        meta_twitter_description: "",
        og_url: "",
        og_site_name: "",
        robots: "",
    })
        .then(resp => {
            return res.status(200).json(resp)
        })
        .catch(err=>{
            return res.status(422).json(err)
        })
}

module.exports = getSeoKeywordList;