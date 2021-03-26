import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import CommonService from "../Common"



const GlobalSearch = () => {
    const [selectedCity, setSelectedCity] = useState()
    const [searchOption, setsearchOption] = useState([])


    let history = useHistory();

    useEffect(() => {

        CommonService.getHttp("/getcities")
            .then(res => {
                setsearchOption(res.data)

            })
    }, [])

    const searchWarehouse = () => {


        if (selectedCity) {
            history.push(`/warehouse/?city=${selectedCity[0].city}&state=${selectedCity[0].state}`)
        } else {
            history.push(`/warehouse-in-india`)
        }
    }
    return (
        <React.Fragment>
            <div className="type-box">
                <form onSubmit={e => e.preventDefault()}>

                    <Typeahead
                        id="basic-typeahead-example"
                        labelKey={(option) => `${option.city}, ${option.state}`}
                        options={searchOption}
                        placeholder="Choose a state..."
                        onChange={(selected) => setSelectedCity(selected)}
                        className="search-input"
                        minLength={3}

                        />
                    <button className="btn btn-danger srch-btn" onClick={searchWarehouse}>Search</button>
                </form>
            </div>
        </React.Fragment>
    )
}

export default GlobalSearch;