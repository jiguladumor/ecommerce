import * as ActionTypes from "../ActionType"

const initialState = {
    isLoading: false,
    user: null,
    error: ''
}


export const SignupReducer = (state = initialState, action) => {
    // console.log(action.type, action.payload);
    switch (action.type) {
        case ActionTypes.EMAIL_VERIFY:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }

        case ActionTypes.LOGGED_USER:
            return {
                ...state,
                isLoading: false,
                user: action.payload,
                error: ''
            }

        case ActionTypes.LOGGEDINOUT_USER:
            return {
                ...state,
                isLoading: false,
                user: null,
                error: ''
            }

        default:
            return state
    }
}