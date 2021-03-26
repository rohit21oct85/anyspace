import {
    DASHBOARD_REQUEST_SENT,
    DASHBOARD_REQUEST_SUCCESS,
    DASHBOARD_REQUEST_FAIL
} from "./actionstypes";

import CommonService from "../../Common";

export const dashBoardDataStart = (data) => {
    return {
        type: DASHBOARD_REQUEST_SENT,
    }
}
export const dashBoardDataRecieved = (data) => {
    return {
        type: DASHBOARD_REQUEST_SUCCESS,
        payload: data

    }
}
export const dashBoardDataFailed = (data) => {

    return {
        type: DASHBOARD_REQUEST_FAIL,
        payload: data
    }
}

export const getDashBoardData = (data) => {

    return (dispatch) => {
        dispatch(dashBoardDataStart())
            CommonService.postHttp("/usersummary",{}, data)
                .then(res => {
                    dispatch(dashBoardDataRecieved(JSON.parse(JSON.stringify(res.data))));
                })
                .catch(err => {
                    dispatch(dashBoardDataFailed())
                    console.log(err)
                    if (err.response && err.response.status === 401) {
                        CommonService.invalidSession()
                    }
                })

    }
}