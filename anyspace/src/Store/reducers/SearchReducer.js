import * as actionTypes from '../actions/actionstypes';
const initialState = {
    loading:false,
    data:null,
    error:false
}

const SearchReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.FETCH_RESULTS_STARTS:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_RESULTS_SUCCESS:

            return {
                ...state,
                loading: false,
                error:false,
                data: action.payload
            }
        case actionTypes.FETCH_RESULTS_FAILS:
            return {
                ...state,
                loading: false,
                error: true,
                data: null

            }



        default:
            return state
    }

}
export default SearchReducer;