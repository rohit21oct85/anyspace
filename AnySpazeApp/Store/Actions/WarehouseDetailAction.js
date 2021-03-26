import {
    FETCH_WAREHOUSE_DETAILS_START,
    FETCH_WAREHOUSE_DETAILS_SUCCESS,
    FETCH_WAREHOUSE_DETAILS_FAIL
} from "./ActionTypes";
import { config } from "../../config";
import axios from "axios";


export const detailFetchingStarts = (data) => {

    return {
        type: FETCH_WAREHOUSE_DETAILS_START
    }
}


export const detailFetchingSuccess = (data) => {

    return {
        type: FETCH_WAREHOUSE_DETAILS_SUCCESS,
        payload: data
    }
}
export const detailFetchingFailed = (data) => {
    return {
        type: FETCH_WAREHOUSE_DETAILS_FAIL,
        payload: data
    }
}

export const getWarehouseDetails = (data) => {

    return (dispatch) => {
        dispatch(detailFetchingStarts());
        axios.post(`${config.API_ENDPOINT}/warehouseDetails`, data,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            }


        ).then(
            response => {
                let data = JSON.parse(JSON.stringify(response.data))


                dispatch(detailFetchingSuccess(data));
            }
        )
            .catch(err => {
                dispatch(detailFetchingFailed(err));
            })

    }
}