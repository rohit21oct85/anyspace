
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    loading:false,
    data:null
}
const ArchiveWarehousesReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.GET_ARCHIVED_WAREHOUSE_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_ARCHIVED_WAREHOUSE_SUCCESS:

            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.GET_ARCHIVED_WAREHOUSE_FAIL:
            return {
                ...state,
                loading: false,
                data: action.payload
            }

        default: return state

    }
}

export default ArchiveWarehousesReducer