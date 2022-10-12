import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    category: [],
    error: ''
}

export const categoryReducer = (state = initalState, action) => {
    // console.log(action.type, action.payload, state);

    switch (action.type) {

        case ActionTypes.GET_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: action.payload,
                error: ''
            }
        case ActionTypes.ADD_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.concat(action.payload),
                error: ''
            }
        case ActionTypes.DELETE_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.filter((l) => l.id !== action.payload),
                error: ''
            }
        case ActionTypes.EDIT_CATEGORY:
            return {
                ...state,
                isLoading: false,
                category: state.category.map((l) => {
                    if (l.id === action.payload.id) {
                        return action.payload;
                    } else {
                        return l;
                    }
                }),
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