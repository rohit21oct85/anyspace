import * as actionTypes from '../actions/actionstypes';
const initialState = {
    isAuthenticated: localStorage.getItem("token") ? true : false,
    token:localStorage.getItem("token") ? localStorage.getItem("token"):null,
    error: false
}

const loginReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.LOGIN_REQUEST_SENT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOGIN_REQUEST_SUCCESS:
            console.log(action.payload)


            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                error:false,
                token:action.payload.token,
                userName:action.payload.userName,
                userData: action.payload
            }
        case actionTypes.LOGIN_REQUEST_FAIL:

            return {
                ...state,
                loading: false,
                error: true,
                errorCode:action.payload.response.status,
                isAuthenticated:false,
                token:null,
                userName:null,
                userData: null,
                data: action.payload

            }

        case actionTypes.LOGOUT_REQUEST_SENT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.LOGOUT_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
            }
        case actionTypes.LOGOUT_REQUEST_FAIL:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }

}
export default loginReducer;