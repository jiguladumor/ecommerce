import * as ActionTypes from "../ActionType"

export const 
addCart = (d) => (dispech) => {
    // dispech({type:ActionTypes.ADD_CART, payload:d})
    
    dispech({type:ActionTypes.ADD_CART, payload:{id:d.id,qty:1}})
}

export const incrementCounter = () => (dispech) => {
    dispech({type:ActionTypes.INCREMENT_COUNTER});
}

export const decrementCounter = () => (dispech) => {
    dispech({type:ActionTypes.DECREMENT_COUNTER});
}
