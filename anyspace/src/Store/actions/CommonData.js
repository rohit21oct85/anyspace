import {
    GET_STATES_LIST,
    GET_STATES_LIST_SUCCESS
} from "./actionstypes";
import axios from "axios";
import {elements} from "../../cons"


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


        axios.post(`${elements.API_ENDPOINT}/getStateList`)
        .then(res=> {
            dispatch(fetchStatesSuccess(res.data));
        })
        .catch(err=>console.log(err))


    }
}
