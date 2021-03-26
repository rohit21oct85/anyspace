import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import AutoSuggest from "../UI/AutoSuggest"

const GlobalSearch = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    let history = useHistory();
    const stateList = useSelector(state => state.commonData.stateData)
    const [haveCities, setHaveCities] = useState([])
    const [inputCities, setInputCities] = useState([])
    const [cityValue, setCityValue] = useState()

    const onSubmit = data =>{
        history.push(`/warehouse/?city=${data.city}&state=${data.state}`)
    };
    useEffect(() => {
        let stateData = []
        stateList && stateList.map(state => {
            if (state.cities.length) {
                stateData.push(state)
                setHaveCities(stateData)
            }
        })

    }, [stateList])
    const setCities = (e) => {
        console.log(e.target.value)
        haveCities.forEach((item) => {
            if (item.slug === e.target.value) {
                setInputCities(item.cities)
            }
        })

    }

    return (
        <React.Fragment>
            <div className="quickfrom-container">
            <div className="quick-form">
                <div className="container">
                    <form className="row justify-content-center" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-12 text-center mb-4">
                            <h2 className="heading">FIND WAREHOUSE</h2>
                        </div>
                        <div className="col-12 col-md-4 col-lg-4 col-xl-12">
                            <div className="form-group">
                                <select className={errors.state ? 'form-control is-invalid' : "form-control"} name="state" ref={register({
                                    required: "Please select a state"
                                })}
                                    onChange={e => setCities(e)}>
                                    <option value="">Select State</option>
                                    {haveCities && haveCities.map(s => {
                                        return <option key={s.slug} value={s.slug}>{s.name}</option>
                                    })}

                                </select>
                                {errors.state && <small className="text-danger">{errors.state.message}</small>}
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-4 col-xl-12">
                            <div className="form-group">
                                <AutoSuggest
                                    suggestions={inputCities}
                                    chosenValue={(v)=>setCityValue(v)}
                                    hasError={errors.city}
                                    placeHolder="City"
                                />
                                <input type="hidden" name="city" value={cityValue}
                                 ref={register({
                                    required: "This type a city name"
                                })}

                                />

                                {errors.city && <small className="text-danger">{errors.city.message}</small>}
                            </div>
                        </div>

                        <div className="col-12 col-md-4 col-lg-4 col-xl-12">
                            <button className="btn btn-danger btn-block srch-btn" type="submit" >FIND WAREHOUSE</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>

        </React.Fragment>
    )
}

export default GlobalSearch;