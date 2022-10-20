import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    user: null,
    error: ''
}

export const signupReducer = (state = initalState, action) => {
    console.log(action.type, action.payload, state);
    switch (action.type) {
        case ActionTypes.LOGGIN_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }
        case ActionTypes.LOGGEDOUT_USER:
            return {
                ...state,
                isLoading: false,
                user: null,
                error: ''
            }
        default:
            return state;
    }
}