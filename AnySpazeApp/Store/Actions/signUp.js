import {
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL
} from "./ActionTypes";
import { config } from "../../config";
import axios from "axios";

export const signUpSTart = () => {

    return {
        type: SIGNUP_START
    }
}
export const signUpSuccess = (data) => {


    return {
        type: SIGNUP_SUCCESS,
        payload: data
    }
}
export const SignUpFail = (data) => {


    return {
        type: SIGNUP_FAIL,
        payload: data
    }
}



export const signUpUser = (userData) => {

    return (dispatch) => {
        dispatch(signUpSTart());


        axios.post(`${config.API_ENDPOINT}/signup`, userData,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            }


        ).then(
            res => {
                let data = JSON.parse(JSON.stringify(res.data));
                dispatch(signUpSuccess({signupData:data}));

            }
        )
        .catch(err => {

            dispatch(SignUpFail(err));
        })

    }

}
