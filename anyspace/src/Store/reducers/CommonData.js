import * as actionTypes from '../actions/actionstypes';
const initialState = {}

const CommonData = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.GET_STATES_LIST_SUCCESS:
            return {
                ...state,
                stateData:action.payload
            }

         default:
            return state
    }

}
export default CommonData;