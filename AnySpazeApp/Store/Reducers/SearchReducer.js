
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    loading: false,
    data: null
}
const SearchReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.FETCH_RESULT_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_RESULT_SUCCESS:

            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.FETCH_RESULT_FAIL:
            return {
                ...state,
                loading: false,
                data: null,
                err: action.payload
            }
        case actionTypes.FETCH_MORE_WAREHOUSE_DETAILS_START:
            return {
                ...state,
                loading: false,
                isLazyLoading: true
            }
        case actionTypes.FETCH_MORE_WAREHOUSE_DETAILS_SUCCESS:


            let updated = {
                ...state,
                data: {
                    ...state.data,
                    warehouse: [
                        ...state.data.warehouse,
                        ...action.payload.warehouse
                    ]
                }

            }
            return {
                ...state,
                data: updated.data,
                err: null,
                loading: false,
                isLazyLoading: false

            }
        case actionTypes.FETCH_MORE_WAREHOUSE_DETAILS_FAIL:

            return {
                ...state,
                err: action.payload,
                loading: false,
                isLazyLoading: false
            }

        default: return state

    }
}

export default SearchReducer