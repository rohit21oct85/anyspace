
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    loading:false,
    data:null
}
const WarehouseReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.FETCH_WAREHOUSE_DETAILS_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_WAREHOUSE_DETAILS_SUCCESS:

            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.FETCH_WAREHOUSE_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default: return state

    }

}

export default WarehouseReducer