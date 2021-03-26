import {
    LOGIN_START,
    LOGIN_SUCCESSS,
    LOGIN_FAIL,
    LOGOUT_USER
} from "./ActionTypes";
import { config } from "../../config";
import axios from "axios";
import AsyncStorage from "@react-native-community/async-storage"

export const loginStart = () => {
    return {
        type: LOGIN_START
    }
}

export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESSS,
        payload: data
    }
}

export const loginFail = (data) => {
    return {
        type: LOGIN_FAIL,
        payload: data
    }
}

const saveDataToStorage = (token, userName, expirationDate, email) => {
    AsyncStorage.setItem("userData", JSON.stringify({
        token: token,
        userName: userName,
        expiryDate: expirationDate.toISOString(),
        userEmail: email

    }))
}
export const loginUser = (useData) => {
    return (dispatch) => {
        dispatch(loginStart());
        axios.post(`${config.API_ENDPOINT}/login`, useData,
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(
            res => {
                let data = JSON.parse(JSON.stringify(res.data));
                const expirationDate = new Date(new Date().getTime() + parseInt(data.expiresIn) * 1000);
                data.email = useData.email;
                saveDataToStorage(data.token, data.userName, expirationDate, data.email);
                dispatch(loginSuccess(data));

            }
        )
            .catch(err => {
                console.log(err)

                dispatch(loginFail(err));
            })
    }
}

export const logoutUser = () => {
    return {
        type: LOGOUT_USER
    }
}
export const logout = () => {
    return dispatch => {
        AsyncStorage.removeItem("userData")
        dispatch(logoutUser())
    }
}