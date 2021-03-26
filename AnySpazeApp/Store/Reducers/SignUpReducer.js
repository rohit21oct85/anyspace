
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    loading: false,
    error: null
}
const SignUpReducer = (state = initialState, action) => {

    switch (action.type) {



        case actionTypes.SIGNUP_START:
            return {
                ...state,
                loading: true,
                error:null,
                errorData:null
            }


        case actionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                resposeData: action.payload,
                error:null,
                errorData:null
            }
        case actionTypes.SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                errorData: action.payload

            }
        default: return state

    }
}

export default SignUpReducer