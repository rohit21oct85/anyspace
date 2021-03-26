import {UPDATE_SEARCH_STATE} from "./ActionTypes";


export const updateSearchState = (data) => {

    return (dispatch) => {

        dispatch(
             {
                type: UPDATE_SEARCH_STATE,
                payload: data
            }
        )
    }

}