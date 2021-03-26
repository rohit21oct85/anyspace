import React, { useEffect, useState } from "react";
import PageLayout from "../HOC/PageLayout";
import CommonService from '../Common';
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import * as actionCreator from "../Store/actions/index";
import ListItem from "../Components/ListItem";
import Loader from "../Components/Loader";
import { NavLink, useHistory } from "react-router-dom";
import ListWarehouse from "../Components/ListWarehouse";
import SEO from "../Components/Seo";
import Filters from "../Components/Filters";
import axios from "axios";
import { elements } from "../cons"

const SearchResults = (props) => {
    let [pageData, setPageData] = useState();
    let pageNumber = parseInt(CommonService.getQueryParamFromUrl("page")) || 1;
    let city = CommonService.getQueryParamFromUrl("city");
    let state = (CommonService.getQueryParamFromUrl("state"));
    let { location } = useParams();
    const { loading, data } = useSelector(state => state.search)
    // const stateH = useSelector(state => state.search)
    const dispatch = useDispatch();
    let history = useHistory();
    let resultFrom = 1
    let resltsTo = 0;

    const [queryObj, setQueryObj] = useState(
        {
            "city": city,
            "state": state,
            "pageNumber": pageNumber,
            "sort": 1,
            "location": location,
            "minSpace": 0,
            "maxSpace": null
        }
    )
    if (queryObj.pageNumber > 1) {
        resultFrom = queryObj.pageNumber * 10 - 9
    }
    if (data && data.warehouse) {
        if (data.total < queryObj.pageNumber * 10) {
            resltsTo = data.total
        }
        else {
            resltsTo = queryObj.pageNumber * 10
        }
    }
    useEffect(() => {

        axios.post(`${elements.API_ENDPOINT}/getPageData`, {
            state: location
        })
            .then((res) => {
                setPageData(res.data)
            })

    }, [location])
    useEffect(() => {
        queryObj["location"] = location

        dispatch(actionCreator.fetchResults(queryObj))

    }, [location, city, state, dispatch, queryObj])

    const updateQueryObj = (field, value) => {

        let obj = {}
        obj[field] = value

        //  let updateObj = { ...queryObj, ...obj };

        setQueryObj(Object.assign(queryObj, obj))
        GetResults()

    }
    const updateFilter = (obj) => {
        setQueryObj(Object.assign(queryObj, { ...obj, ...{ pageNumber: 1 } }))
        GetResults();
    }
    const GetResults = () => {
        window.scrollTo({ top: 0 })
        console.log(queryObj)

        dispatch(actionCreator.fetchResults(queryObj));

    }

    const seoTags = {
        "pageTitle": `Warehouse in ${(location || city).replace(/-/g, " ")} | ANYSPAZE`,
        "PageMetaTitle": `Warehouse in ${(location || city).replace(/-/g, " ")} | ANYSPAZE`,
        "pageMetaDesc": `Search warehouse in ${(location || city).replace(/-/g, " ")}. Anyspaze.com is only warehosue logistic portal in ${(location || city).replace(/-/g, " ")}, provides excelence service`,
        pageType: "page",
        pageUrl: `https://anyspaze.com${history.location.pathname}${history.location.search}`,
        pageImage: "https://anyspaze.com/icons/android-icon-512x512.png",


    }
    return (
        <React.Fragment>
          {  pageData && pageData[0] && pageData[0].pageCSS? <style>{pageData[0].pageCSS}</style>:null}
            <SEO />
            <div className={`container px-0 search-results`}>
                <div className="row mx-0">
                    <div className="col-12 col-md-3 col-lg-2 col-xl-2">
                        <Filters updateQueryObj={updateQueryObj} updateFilter={updateFilter} />
                    </div>
                    <div className="col-12 col-md-9 col-lg-10 col-xl-7">

                        {loading && <Loader type="large" />}
                        {!loading && data && <React.Fragment>

                            <div className="clearfix">
                                <select className="form-control sorting clearfix"
                                    onChange={(e) => updateQueryObj("sort", e.target.value)}
                                    defaultValue={queryObj.sort}>
                                    <option value="1">Sort By</option>
                                    <option value="popularity">Popularity</option>
                                    <option value="ascending">Oldest First</option>
                                    <option value="descending">Newest First</option>
                                </select>
                            </div>

                            <h1>Warehouses in {city && `${city.replace(/-/g, " ")}, ${state.replace(/-/g, " ")}`}{location && location.replace(/-/g, " ")}</h1>



                            <p className="mb-4">Showing  {resultFrom} to {resltsTo}  from {data.total} results

                       </p>



                            {data && <ListItem warehouseList={data.warehouse} />}
                            {data.error && <p>Some thing went wrong</p>}

                            {resltsTo !== data.total &&

                                <button className="btn btn-danger btn-lg mt-5" onClick={() => updateQueryObj("pageNumber", queryObj.pageNumber + 1)}>Next Results</button>
                            }
                        </React.Fragment>
                        }
                        {data &&
                            <React.Fragment>
                                {!loading &&


                                    <React.Fragment>

                                        {!data &&
                                            <div className="no-results">
                                                <h3 className="mb-4">Sorry, we did not found any warehouse listed for {(location || city).replace(/-/g, " ")}.</h3>
                                                <h4 className="mb-4"> <NavLink to="/find-warehouse">Try searching</NavLink> again with different City/State </h4>
                                                <h4 className="mb-4">Or relax your filters</h4>
                                                <NavLink className="btn btn-danger btn-lg" to="/find-warehouse">Search Again</NavLink>

                                            </div>
                                        }
                                        {!data &&

                                            <ListWarehouse location={(location || city).replace(/-/g, " ")} />
                                        }

                                    </React.Fragment>
                                }
                            </React.Fragment>
                        }

                    </div>
                    <div className="col-12 col-lg-3 d-none d-xl-block">
                        <ListWarehouse location={location || city} />

                    </div>
                </div>

            </div>

            {pageData && pageData[0] && pageData[0].pageHtml && <React.Fragment>
                <div className="container">
                    <div className="row">

                        <div className="col-12" dangerouslySetInnerHTML={{
                            __html: pageData[0].pageHtml
                        }}></div>
                    </div>
                </div>
            </React.Fragment>}

        </React.Fragment>
    )

}


export default PageLayout(SearchResults);