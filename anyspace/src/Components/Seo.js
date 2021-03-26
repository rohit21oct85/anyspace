import React, { useState, useEffect} from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { elements } from "../cons";

const SEO = (props) => {
    const pageType = 'Page';
    const pageUrl = window.location.href;
    const pageImage = "http://anyspaze.com/icons/logo512.png";
    const web_url = window.location.pathname;
    const [tags, setTags] = useState();
    useEffect(() => {
        if(web_url){
            const url = web_url;
            
            axios.post(`${elements.API_ENDPOINT}/getKeywords`, {url: url},
            ).then(res => {                
                setTags(res.data)
            })
        }
    },[web_url]);

    return (
        <React.Fragment>
            <Helmet>
                <title>{tags && tags.meta_title}</title>
                <meta property="fb:app_id" content={process.env.REACT_APP_FB_APP_ID} />
                <meta property="og:type" content={pageType} />
                <meta property="og:url" content={pageUrl} />
                <link rel="canonical" href={pageUrl} />
                <meta property="og:title" content={tags && tags.meta_title} />
                <meta property="og:image" content={pageImage} />
                <meta property="og:description" content={tags && tags.meta_description} />
                <meta name="twitter:card" content={tags && tags.meta_twitter_card} />
                <meta name="twitter:site" content={(tags && tags.meta_twitter_site)?tags && tags.meta_twitter_site:'@anyspaze'} />
                <meta name="description" content={tags && tags.meta_description} />
                {tags && tags.robots && <meta name="robots" content="noindex"></meta>}
                <script type="application/ld+json">
                    {JSON.stringify(props.jsonLD)}
                </script>
            </Helmet>

        </React.Fragment>
    )
}
export default SEO