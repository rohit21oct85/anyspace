
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    loading: false,
    authToken: false,
    userName: null,
    error: false,
    auth: false
}
const AuthReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.LOGOUT_USER:

            return {
                ...state,
                loading: false,
                error: false,
                authToken: null,
                userName: null,
                error: false,
                auth: false,
            }

        case actionTypes.LOGIN_START:
            return {
                ...state,
                loading: true,
                error: false,
            }



        case actionTypes.LOGIN_SUCCESSS:
            return {
                ...state,
                loading: false,
                authToken: action.payload.token,
                userName: action.payload.userName,
                email: action.payload.email,
                error: false,
                auth: true,
            }
        case actionTypes.LOGIN_FAIL:

            return {
                ...state,
                loading: false,
                authToken: null,
                userId: null,
                error: action.payload,
                auth: false
            }
        default: return state

    }
}

export default AuthReducer