import * as ActionTypes from "../ActionType"

const initalState = {
    isLoading: false,
    cart:[],
    error:''
}

export const AddtocartReducer = (state = initalState, action) => {
    switch (action.type) {
        case ActionTypes.ADD_CART:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.concat(action.payload),
                error:''
            }
        case ActionTypes.INCREMENT_COUNTER:
            return {
                ...state,
                isLoading: false,
                cart:state.cart.map((c) => {
                    console.log(c);
                    if (c.id === action.payload) {
                        return(
                            {
                                id:c.id,
                                quantity:c.quantity + 1
                            }
                        )
                    } else {
                        return c
                    }
                })
            }
        case ActionTypes.DECREMENT_COUNTER:
            return {
                ...state,
                isLoading: false,
                cart: state.cart.map((c) => {
                    console.log(c);
                    if (c.id === action.payload) {
                        return (
                            {
                                id : c.id,
                                quantity: c.quantity - 1
                            }
                        )
                    }else {
                        return c
                    }
                })
            }

        default:
            return state;
    }
}