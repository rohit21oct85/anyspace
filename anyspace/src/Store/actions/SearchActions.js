import {
    FETCH_RESULTS_STARTS,
    FETCH_RESULTS_SUCCESS,
    FETCH_RESULTS_FAILS
} from "./actionstypes";
import axios from "axios";
import { elements } from "../../cons"



export const fetchResultsStarts = (data) => {
    return {
        type: FETCH_RESULTS_STARTS,



    }
}
export const fetchResultsSuccess = (data) => {
    return {
        type: FETCH_RESULTS_SUCCESS,
        payload: data


    }
}
export const fetchResultsfailed = (data) => {

    return {
        type: FETCH_RESULTS_FAILS,
        payload: data

    }
}

export const fetchResults = (data) => {

    return (dispatch) => {
        dispatch(fetchResultsStarts());

        axios.post(`${elements.API_ENDPOINT}/warehousesResults`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res=>{

                let data = JSON.parse(JSON.stringify(res.data))
                dispatch(fetchResultsSuccess(data));
            })

            .catch(err => {
                dispatch(fetchResultsfailed(err));
            })





    }
}