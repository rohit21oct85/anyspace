import {
    PASSWORD_CHANGE_FAIL,
    PASSWORD_CHANGE_SUCCESS,
    PASSWORD_CHANGE_REQUEST_SENT,
    PASSWORD_CLEAR_STATE
} from "./actionstypes";

import CommonService from "../../Common";

export const passwordChangeStart = (data) => {
    return {
        type: PASSWORD_CHANGE_REQUEST_SENT,



    }
}
export const passwordChanged = (data) => {
    return {
        type: PASSWORD_CHANGE_SUCCESS,
        payload: data


    }
}
export const passwordChangedFailed = (data) => {

    return {
        type: PASSWORD_CHANGE_FAIL,
        payload: data

    }
}
export const clearOldState = (data) => {

    return {
        type: PASSWORD_CLEAR_STATE,


    }
}

export const changePassword = (data) => {

    return (dispatch) => {
        dispatch(passwordChangeStart())
            CommonService.postHttp("/changePassword", data)
                .then(res => {
                    dispatch(passwordChanged(JSON.parse(JSON.stringify(res.data))));
                })
                .catch(err => {
                    dispatch(passwordChangedFailed(err))
                    console.log(err.response)
                    if (err.response && err.response.status === 401) {
                        CommonService.invalidSession()
                    }
                })

    }
}

export const clearPasswordChangeState=()=>{
    return (dispatch)=>[
        dispatch(clearOldState())
    ]
}