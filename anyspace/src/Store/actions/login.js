import {
    LOGIN_REQUEST_SENT,
    LOGIN_REQUEST_SUCCESS,
    LOGIN_REQUEST_FAIL,
    LOGOUT_REQUEST_SENT,
    LOGOUT_REQUEST_SUCCESS,
    LOGOUT_REQUEST_FAIL
} from "./actionstypes";
import CommonService from "../../Common";

export const loginStart = (data) => {

    return {
        type: LOGIN_REQUEST_SENT
    }
}
export const loginSuccess = (data) => {
    return {
        type: LOGIN_REQUEST_SUCCESS,
        payload: data

    }
}
export const loginFailed = (data) => {

    return {
        type: LOGIN_REQUEST_FAIL,
        payload: data
    }
}
export const logoutStart = (data) => {

    return {
        type: LOGOUT_REQUEST_SENT,

    }
}
export const logoutSuccess = (data) => {
    return {
        type: LOGOUT_REQUEST_SUCCESS

    }
}
export const logoutFailed = (data) => {
    return {
        type: LOGOUT_REQUEST_FAIL
    }
}




export const login = (formdata) => {


    return (dispatch) => {
        dispatch(loginStart());

        CommonService.postHttp(`/login`, formdata)
            .then(
                res => {
                    let data = JSON.parse(JSON.stringify(res.data));

                    if (data.token) {
                        localStorage.setItem("token", data.token)
                        localStorage.setItem("userName", data.userName)
                    }
                    localStorage.setItem("setupTime", new Date().getTime());
                    dispatch(loginSuccess(data));
                }
            )
            .catch(err => {
                dispatch(loginFailed(err));
            })

    }
}

export const logout = (data) => {

    return (dispatch) => {
        dispatch(logoutStart());
        localStorage.removeItem("token");
        localStorage.removeItem("userName")
        localStorage.removeItem("setupTime")
        dispatch(logoutSuccess());

    }
}