import { AsyncStorage } from "react-native"
import {
    GET_ARCHIVED_WAREHOUSE_FAIL,
    GET_ARCHIVED_WAREHOUSE_START,
    GET_ARCHIVED_WAREHOUSE_SUCCESS,

} from "./ActionTypes";
import { elements } from "../../cons";
import axios from "axios";


export const fetchingStarts = () => {

    return {
        type: GET_ARCHIVED_WAREHOUSE_START
    }
}

export const fetchingSuccess = (data) => {

    return {
        type: GET_ARCHIVED_WAREHOUSE_SUCCESS,
        payload: data
    }
}
export const fetchingFailed = (data) => {

    return {
        type: GET_ARCHIVED_WAREHOUSE_FAIL,
        payload: data
    }
}


export const getArchiveWarehouses =  () => {



    return async dispatch => {
        const UserData = await AsyncStorage.getItem("userData");

    const token = JSON.parse(UserData).token

        dispatch(fetchingStarts())



            axios.get(`${elements.API_ENDPOINT}/warehouses`,
                {
                    method: "POST",
                    params: {
                        status: 3
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