import React, { useState, useEffect } from "react";
import PageLayout from "../HOC/PageLayout";
import { useParams } from "react-router";
import axios from "axios";
import SEO from "../Components/Seo"
import Carousel from 'react-bootstrap/Carousel';
import { NavLink } from "react-router-dom";


const Page = () => {
    let [pageData, setPageData] = useState({})
    let { pagetitle } = useParams();

    useEffect(() => {

        let dataUrl = `/${pagetitle}.json`;
        axios.get(dataUrl)
            .then(res => {
                let updatedData = res.data.results;
                setPageData(updatedData)
        })

    }, [pagetitle])

    const seoTags = {
        "pageTitle": pageData.PageMetaTitle,
        "PageMetaTitle": pageData.PageMetaTitle,
        "pageMetaDesc": pageData.pageMetaDesc,
        pageType: "page",
        pageUrl: "http://anyspaze.com/" + pagetitle,
        pageImage: "http://anyspaze.com/icons/logo512.png"

    }
    return (
        <React.Fragment>
            <SEO seoData={seoTags} />
            <div className="page">
                <section className="mini-header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1>{pageData.pageTitle}</h1>
                                {pageData.pageSubtitle && <p>{pageData.pageSubtitle}</p>}
                            </div>
                        </div>
                    </div>
                </section>
                <div className="mb-5">

                    {pageData && <React.Fragment>

                        <div dangerouslySetInnerHTML={{
                            __html: pageData.pageDesc
                        }}></div>
                    </React.Fragment>}


                </div>
            </div>



        </React.Fragment>
    )
}

export default PageLayout(Page);