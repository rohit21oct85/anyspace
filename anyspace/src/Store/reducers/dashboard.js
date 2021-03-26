import * as actionTypes from '../actions/actionstypes';
const initialState = {}

const dashboardReducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.DASHBOARD_REQUEST_SENT:
            return {
                ...state,
                loading: true
            }
        case actionTypes.DASHBOARD_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                error:false,
                dashboardData: action.payload
            }
        case actionTypes.DASHBOARD_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
                error: true,
                dashboardData: action.payload

            }
         default:
            return state
    }

}
export default dashboardReducer;