import * as ActionTypes from "../ActionType"

export const signinuser = (values) => (dispech) => {
    dispech({type:ActionTypes.SIGNIN_USER, payload: values});
}

export const signupuser = (values) => (dispech) => {
    dispech({type:ActionTypes.SIGNUP_USER, payload: values});
}

export const forgotpassword = (values) => (dispech) => {
    dispech({type:ActionTypes.FORGOT_PASSWORD, payload: values});
}
export const googlelogin = () => (dispech) => {
    dispech({type:ActionTypes.GOOGLE_LOGIN})
}