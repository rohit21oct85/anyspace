import {
    GET_USERWAREHOUSES_FAIL,
    GET_USERWAREHOUSES_START,
    GET_USERWAREHOUSES_SUCCESS,
    CHANGE_WAREHOUSE_STATUS_FAIL,
    CHANGE_WAREHOUSE_STATUS_SUCCESS,
    CHANGE_WAREHOUSE_STATUS_START
} from "./ActionTypes";
import { config } from "../../config";
import axios from "axios";
const fectingStarts = () => {
    return {
        type: GET_USERWAREHOUSES_START
    }
}

export const fetctingSuccess = (data) => {
    return {
        type: GET_USERWAREHOUSES_SUCCESS,
        payload: data
    }
}
export const fetctingFailed = (data) => {
    return {
        type: GET_USERWAREHOUSES_FAIL,
        payload: data
    }
}
export const getListedWarehouse = (data) => {

    return (dispatch, getState) => {
        dispatch(fectingStarts());
        const token = getState().Auth.authToken;


        axios.get(`${config.API_ENDPOINT}/warehouses`,
            {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token
                }
            }


        ).then(
            res => {
                let data = JSON.parse(JSON.stringify(res.data));

                dispatch(fetctingSuccess(data));

            }
        )
            .catch(fetctingFailed => {

                dispatch(SignUpFail(err));
            })

    }

}
export const changingStarts = () => {
    return {
        type: CHANGE_WAREHOUSE_STATUS_START
    }
}
export const changingSuccess= (data) => {
    return {
        type: CHANGE_WAREHOUSE_STATUS_SUCCESS,
        payload: data
    }
}
export const changingFail = (data) => {
    return {
        type: CHANGE_WAREHOUSE_STATUS_FAIL,
        payload: data
    }
}

export const toggleWarehouseStatus = (data) => {

    let actionData= data;
    return (dispatch, getState) => {
        dispatch(changingStarts());
        const token = getState().Auth.authToken;


        axios.post(`${config.API_ENDPOINT}/archived`,data,

                {headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + token
                }}



        ).then(
            res => {
                let data = JSON.parse(JSON.stringify(res.data));
                data.warehouseId= actionData.warehouseId
                dispatch(changingSuccess(data));

            }
        )
            .catch(err => {
                console.log(err)

                dispatch(changingFail(err));
            })

    }

}
