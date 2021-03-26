import {
    GET_STATES_LIST,
    GET_STATES_LIST_SUCCESS
} from "./ActionTypes";
import axios from "axios";
import { config } from "../../config";

export const fetchStates = (data) => {
    return {
        type: GET_STATES_LIST

    }
}
export const fetchStatesSuccess = (data) => {
    return {
        type: GET_STATES_LIST_SUCCESS,
        payload: data


    }
}


export const getSateData = (data) => {

    return (dispatch) => {


        axios.post(`${config.API_ENDPOINT}/getStateList`)
        .then(res=> {
            dispatch(fetchStatesSuccess(res.data));
        })
        .catch(err=>console.log(err))


    }
}
