import * as ActionTypes from "../ActionType"

export const signupAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.SIGNUP_USER, payload: data })
    console.log(data);
}

export const LoginAction = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.LOGIN_USER, payload: data })
    console.log(data);
}

// googlelogin
export const googleActionLogin = () => (dispatch) => {
    dispatch({ type: ActionTypes.GOOGLELOGIN_USER })
}

export const FacebookLogin = () => (dispatch) => {
    dispatch({ type: ActionTypes.FACEBOOK_LOGIN })
}

export const forgetActionpassword = (data) => (dispatch) => {
    dispatch({ type: ActionTypes.FORGET_PASSWORD_USER, payload: data })
}