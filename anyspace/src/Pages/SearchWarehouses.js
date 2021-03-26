import React, { useEffect, useState} from "react";

import PageLayout from "../HOC/NewPageLayout";

import GlobalSearch from "../Components/GlobalSearch";
import SEO from "../Components/Seo"
import axios from "axios";
import { elements } from "../cons";


const SearchWarehouses = () => {

    return (
        <React.Fragment>
		<SEO />
            <div className="searchbox">
                <div className="container">
                    <div className="row justify-content-center align-items-center search-row">

                        <div className="col-12 col-sm-9 col-md-7">
                            <h1>India's only on-demand logistics platform</h1>
                            <h2>100+ highly rated logsitics service providers</h2>
                           <GlobalSearch/>
                        </div>



                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default PageLayout(SearchWarehouses);