import React, { useState, useEffect } from "react";
import PageLayout from "../HOC/NewPageLayout";
import SEO from "../Components/Seo"
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import { elements } from "../cons";
import './blog.css';
import Moment from 'react-moment';


const BlogListings = () => {
    const params = useParams();
    const slug = params.slug;
    if(slug != undefined){
        const limit = 6;
    }
    const [blogs, setblogs] = useState();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(6);
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();

    useEffect(() => {
        axios.get(`${elements.API_ENDPOINT}/getBlogsList/?category=${slug}&page=${page}&limit=${limit}`).then(res => {
                if(slug != undefined){
                    console.log("blog Data " + res.data.data)
                    const nextData = res.data.next;
                    const prevData = res.data.prev;
                    setNextPage(nextData);
                    setPrevPage(prevData);
                    const blogData = res.data.data; 
                    console.log(blogData);
                    const filteredBlog = blogData.filter( blog => blog.category === slug);
                    console.log(filteredBlog);
                    setblogs(filteredBlog)
                }else{
                    console.log("blog Data " + res.data)
                    const nextData = res.data.next;
                    const prevData = res.data.prev;
                    setNextPage(nextData);
                    setPrevPage(prevData);
                    const blogData = res.data.data; 
                    setblogs(blogData)
                }
            })
    },[page,limit,slug]);
    
    const handleNextBlog = (e) => {
        setPage(nextPage.page);
        setLimit(nextPage.limit);
    }
    
    const handlePrevBlog = (e) => {
        setPage(prevPage.page);
        setLimit(prevPage.limit);
    }


    const overlay = {
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,.5)'
    }
    const container = {
        maxWidth: '1140px'
    }

    return (

        <React.Fragment>

            <SEO />

    <div className="hero-section blog-listing">
    <div className="overlay" style={overlay}>
    <div className="container" style={container}>
        <div className="hero-content">
            <div className="position-div">
                <h1 className="hero__heading">BLOG LISTING</h1>
                <div class="dash-icon"><div></div><div></div></div>
            </div>
           
            <ul className="hero-breadcrumbs">
                <li><NavLink to="/">Home</NavLink></li>
                <li><i className="fas fa-chevron-right"></i></li>
                <li>Blog</li>
            </ul>
        </div>
    </div>
    </div>
</div>

    <div className="blog-wrapper container">
            <div className="section-heading">
                <h2 className="section__title">
                    Check our latest news and more.  Warehouse, freight forwarding, technology — all your logistic needs!
                </h2>
            </div>
            <div className="blog-block">
                <div className="row">
                    {blogs && blogs.map( (blog, index) => {
                    let styles = "col-lg-4 col-md-4 ";
                    if(index  == 1 || index == 4){
                        styles += 'mt-5';    
                    }else{
                        styles += '';    
                    }
                        
                    return (
                        <div className={styles} key={index}>
                        <div className="block-content">
                        <NavLink to={`/blog-details/${blog.slug}`}>   <img src={blog.image} alt={blog.slug} className="img-fluid" /></NavLink>
                            <div className="blog-block-content">
                                <p className="block-para">
                                    {blog.category}
                                </p>
                                
                                <h4 className="blog-title" style={{ textTransform: 'Capitalize' }}>
                                <NavLink to={`/blog-details/${blog.slug}`}> {blog.title}  </NavLink>
                                </h4>
                                <p class="blog-date"> Published On: 
                                    <Moment className="date pl-3" format="D MMM YYYY">
                                        {blog && blog.created_at}
                                    </Moment>
                                </p>
                            </div>
                        </div>
                    </div>
                    )
                    })}
                    
                    

                </div>
                <div className="row">
                <div className="pagination" style={{ textAlign: 'center', margin: '0 auto'}}>
                <ul>
                {prevPage && 
                <li>
                    <a href="javascript:void(0)" onClick={handlePrevBlog} className="prev-page arrows">
                        <img src="/dist/img/blog-icons/left-arrow.png" />
                    </a>
                </li>
                }
                {nextPage && 
                <li>
                    <a href="javascript:void(0)"  onClick={handleNextBlog}  className="next-page arrows">
                        <img src="/dist/img/blog-icons/right-arrow.png" />
                    </a>
                </li>
                }
                </ul>
        </div>
              </div>
            
            </div>
    </div>


        </React.Fragment >
    )


}

export default PageLayout(BlogListings);