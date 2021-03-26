
import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
    state:null,
    city:null,
    pageNumber: 1,
    sort: 1,
    minSpace: 0,
    maxSpace: null
}
const CurrentSearchReducer = (state = initialState, action) => {

    switch (action.type) {

        case actionTypes.UPDATE_SEARCH_STATE:
            return {
                ...state,...action.payload
            }


        default: return state

    }
}

export default CurrentSearchReducer