import React, { useState, useEffect } from "react";
import PageLayout from "../HOC/NewPageLayout";
import SEO from "../Components/Seo"
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import { elements } from "../cons";
import './blog.css';
import Moment from 'react-moment';


const BlogListings = () => {
    const {slug} = useParams()
    const [blog, setblog] = useState()
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getSingleBlog`, {slug: slug},
            ).then(res => {
                setblog(res.data)
            })
    }, [slug]);

    const [previousBlog, setPreviousBlog] = useState();
    const [nextBlog, setNextBlog] = useState();
    const [blogs, setblogs] = useState();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(600000);
    const [nextPage, setNextPage] = useState();
    const [prevPage, setPrevPage] = useState();
    useEffect(() => {
        axios.get(`${elements.API_ENDPOINT}/getBlogsList/?page=${page}&limit=${limit}`).then(res => {
                const blogData = res.data.data; 
                const index = blogData.findIndex(function(blog, index){
                    return blog.slug === slug;
                });
                setPreviousBlog(blogData[index-1]);
                setNextBlog(blogData[index+1]);
                setblogs(blogData)
            })
    },[slug]);
    const [category, setCategory] = useState()
    useEffect(() => {
        axios.post(`${elements.API_ENDPOINT}/getBlogCategory`, '',
            ).then(res => {
                setCategory(res.data)
            })
    }, [slug]);

    
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
            
            <div className="hero-section blog-details">
                <div className="overlay" style={overlay}>
                <div className="container" style={container}>
                    <div className="hero-content">
                        <div className="position-div">
                            <h1 className="hero__heading"> {slug}</h1>
                            <div class="dash-icon"><div></div><div></div></div>
                        </div>

                        <ul className="hero-breadcrumbs">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><i className="fas fa-chevron-right"></i></li>
                            <li><Link to='/blog-listing'>Blog</Link></li>
                            <li><i className="fas fa-chevron-right"></i></li>
                            <li>{slug}</li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <div className="construction">
                <div className="container" style={container}>
                    <div className="blog-block">
                        <div className="row">
                        <div className="col-lg-9 padding-right">
                                <div className="inner-content">
                                    <p className="small-title">
                                    {blog && blog.category}
                                    </p>
                                    
                                    <h1 className="inner-title">
                                        {blog && blog.title}
                                    </h1>
                                    <p class="blog-detail-date"> Published On: 
                                        <Moment className="date pl-3" format="D MMM YYYY">
                                            {blog && blog.created_at}
                                        </Moment>
                                    </p>
                                    <div className="inner-image">
                                        <img src={blog && blog.image} alt={blog && blog.slug} className="img-fluid" />
                                    </div>
                                    <div dangerouslySetInnerHTML={{ __html: blog && blog.description  }} />
                                    
                                    </div>

                        
                        <div className="inner-pagination">
                        {previousBlog &&
                        <a href={`/blog-details/${previousBlog && previousBlog.slug}`} className="blog-post-link">
                            <div className="previous-next-post-inner previous">
                                <div className="left">
                                   <img src={previousBlog && previousBlog.image} alt="warehouse" className="img-fluid" />
                                </div>
                                <div className="right">
                                    <h4 className="blog-title">{previousBlog && previousBlog.title}</h4>
                                    <p>Published On 
                                    <Moment className="date pl-3" format="D MMM YYYY">
                                        {previousBlog && previousBlog.created_at}
                                    </Moment>
                                    </p>
                                    <div className="arrow">
                                        <p className="arrow-text">Previous</p>
                                      <div className="arrow-icon">
                                        <img src="/dist/img/blog-icons/left-arrow.png" />
                                      </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </a>}
                        {nextBlog &&
                        <a href={`/blog-details/${nextBlog && nextBlog.slug}`} className="blog-post-link">
                            <div className="previous-next-post-inner previous">
                                <div className="left">
                                   <img src={nextBlog && nextBlog.image} alt="warehouse" class="img-fluid"/>
                                </div>
                                <div className="right">
                                    <h4 className="blog-title">{nextBlog && nextBlog.title}</h4>
                                    <p>Published On 
                                    <Moment className="date pl-3" format="D MMM YYYY">
                                        {nextBlog && nextBlog.created_at}
                                    </Moment>
                                    </p>
                                    <div className="arrow">
                                        <p className="arrow-text">Next</p>
                                      <div className="arrow-icon">
                                        <img src="/dist/img/blog-icons/right-arrow.png" className="img-fluid"/>
                                      </div>
                                       
                                    </div>
                                </div>
                            </div>
                        </a>
                    }
                        
                       
                    </div>
                            
                        

                        </div>    
                        <div className="col-lg-3">
                <div className="right-sidebar">
                    <div className="search-box">
                        <form action="#">
                            <div className="form-group">
                                <input type="text" name="search" id="search-box" placeholder="Search..." className="form-control" />
                            </div>
                        </form>
                    </div>
                    <div className="recent-post">
                        <h1>Recent Posts</h1>
                        <ul>
                            {blogs && blogs.map( (value, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={`/blog-details/${value.slug}`}>
                                            {value.title}
                                        </NavLink>
                                    </li>    
                                )
                            })}
                            
                        </ul>
                    </div>
                    <div className="categories">
                        <h1>Categories</h1>
                        <ul>
                            {category && category.map( (value,index) => {
                                return (
                                <li key={index}><NavLink to={`/blog-listing/category/${value.slug}`} >{value.name}</NavLink></li>
                                )
                            })}
                            
                        </ul>
                    </div>
                    
                </div>
                </div>
                    </div>
                </div>
            </div>
            </div>
        </React.Fragment>
    )


}

export default PageLayout(BlogListings);