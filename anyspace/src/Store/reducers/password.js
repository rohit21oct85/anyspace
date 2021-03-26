import * as actionTypes from '../actions/actionstypes';
const initialState = {error:false,loading: false, passwordChanged:null}

const passworddReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.PASSWORD_CHANGE_REQUEST_SENT:
            return {
                ...state,
                loading: true,

            }
        case actionTypes.PASSWORD_CHANGE_SUCCESS:
            return {
                ...state,
                loading: false,
                error:false,
                passwordChanged:true,
                data:action.payload
            }
        case actionTypes.PASSWORD_CHANGE_FAIL:

            return {
                ...state,
                loading: false,
                error: true,
                passwordChanged:false,
                data:action.payload

            }
            case actionTypes.PASSWORD_CLEAR_STATE:
            return{
                ...state,
                data:null,
                error:false,
                passwordChanged:null
            }
         default:
            return state
    }

}
export default passworddReducer;