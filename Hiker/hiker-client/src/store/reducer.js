import { HIKING_DATA_LOADED } from "./actions/actionTypes";

const initialState = {
    locations: []
}

const reducer = (state = initialState, action) => {

    switch(action.type) {
        case HIKING_DATA_LOADED:
            return {
                ...state,
                locations: action.payload
            }
    }

    return state
}

export default reducer