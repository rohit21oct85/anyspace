import { AsyncStorage } from "react-native"
import {
    GET_ACTIVE_WAREHOUSE_START,
    GET_ACTIVE_WAREHOUSE_SUCCESS,
    GET_ACTIVE_WAREHOUSE_FAIL,

} from "./ActionTypes";
import { elements } from "../../cons";
import axios from "axios";


export const fetchingStarts = () => {

    return {
        type: GET_ACTIVE_WAREHOUSE_START
    }
}

export const fetchingSuccess = (data) => {

    return {
        type: GET_ACTIVE_WAREHOUSE_SUCCESS,
        payload: data
    }
}
export const fetchingFailed = (data) => {

    return {
        type: GET_ACTIVE_WAREHOUSE_SUCCESS,
        payload: data
    }
}


export const getActiveWarehouses =  () => {



    return async dispatch => {
        const UserData = await AsyncStorage.getItem("userData");

    const token = JSON.parse(UserData).token

        dispatch(fetchingStarts())



            axios.get(`${elements.API_ENDPOINT}/warehouses`,
                {
                    method: "POST",
                    params: {
                        status: 1
                    },
                    headers: {
                        'Content-Type': 'application/json',
                         'Authorization': "Bearer " + token
                    }
                })
                .then(res=>{

                    dispatch(fetchingSuccess(res.data))
                })
                .catch(err=>{
                    dispatch(fetchingFailed(err))

                })




    }


}