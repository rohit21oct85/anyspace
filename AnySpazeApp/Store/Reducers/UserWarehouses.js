
import * as actionTypes from '../Actions/ActionTypes';
import { act } from 'react-test-renderer';

const initialState = {
    loading: false,
    data: null
}
const UserWarehouseReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.GET_USERWAREHOUSES_START:

            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_USERWAREHOUSES_SUCCESS:

            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.GET_USERWAREHOUSES_FAIL:
            return {
                ...state,
                loading: false,
                data: null,
                err: action.payload
            }

        case actionTypes.CHANGE_WAREHOUSE_STATUS_START:
            return {
                ...state
            }
        case actionTypes.CHANGE_WAREHOUSE_STATUS_SUCCESS:


            let data = state.data;
            data.forEach(warehouse => {
                if(warehouse._id == action.payload.warehouseId ){
                    warehouse.status= action.payload.updatedStatus
                }

            });
            return {
                ...state,
            }

        case actionTypes.CHANGE_WAREHOUSE_STATUS_FAIL:
            return {
                ...state,
                changeError: action.payload
            }

        default: return state

    }
}

export default UserWarehouseReducer