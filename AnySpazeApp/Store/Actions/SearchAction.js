import {
    FETCH_RESULT_START,
    FETCH_RESULT_SUCCESS,
    FETCH_RESULT_FAIL,
    FETCH_MORE_WAREHOUSE_DETAILS_SUCCESS,
    FETCH_MORE_WAREHOUSE_DETAILS_FAIL,
    FETCH_MORE_WAREHOUSE_DETAILS_START

} from "./ActionTypes";
import { config } from "../../config";
import axios from "axios";


export const StartFetchingResults = (data) => {

    return {
        type: FETCH_RESULT_START
    }
}


export const FetchResultsSuccess = (data) => {

    return {
        type: FETCH_RESULT_SUCCESS,
        payload: data
    }
}
export const FetchResultsFailed = (data) => {
    return {
        type: FETCH_RESULT_FAIL,
        payload: data
    }
}

export const searchResults = (searchParams) => {

    return (dispatch) => {
        dispatch(StartFetchingResults());

        axios.post(`${config.API_ENDPOINT}/warehousesResults`, searchParams,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            }


        ).then(
            response => {
                let data = JSON.parse(JSON.stringify(response.data))

                 dispatch(FetchResultsSuccess(data));
            }
        )
            .catch(err => {
                dispatch(FetchResultsFailed(err));
            })

    }

}

export const FetachMoreStart = (data) => {

    return {
        type: FETCH_MORE_WAREHOUSE_DETAILS_START
    }
}


export const FetachMoreSuccess = (data) => {

    return {
        type: FETCH_MORE_WAREHOUSE_DETAILS_SUCCESS,
        payload: data
    }
}
export const FetachMoreFailed = (data) => {
    return {
        type: FETCH_MORE_WAREHOUSE_DETAILS_FAIL,
        payload: data
    }
}
export const LoadMoreResults =(searchParams)=>{
    return (dispatch) => {
        dispatch(FetachMoreStart());

        axios.post(`${config.API_ENDPOINT}/warehousesResults`, searchParams,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            }


        ).then(
            response => {
                let data = JSON.parse(JSON.stringify(response.data))

                 dispatch(FetachMoreSuccess(data));
            }
        )
            .catch(err => {
                dispatch(FetachMoreFailed(err));
            })

    }
}