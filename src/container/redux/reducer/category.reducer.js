import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    category: [],
    error: ''
}

export const categoryReducer = (state = initalState, action) => {
    console.log(action.type, action.payload,state);

    switch (action.type) {
       
        case ActionTypes.GET_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: action.payload,
                error: ''
            }
            case ActionTypes.ERROR_CATEGORY:
                return {
                    ...state,
                    isLoading: false,
                    category: [],
                    error: action.payload
                }
        
        default:
            return state;
    }
}