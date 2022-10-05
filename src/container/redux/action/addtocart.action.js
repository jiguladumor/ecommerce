import * as ActionTypes from "../ActionType"

export const 
addCart = (d) => (dispatch) => {
    // dispatch({type:ActionTypes.ADD_CART, payload:d})
    
    dispatch({type:ActionTypes.ADD_CART, payload:{id:d.id,qty:1}})
}

export const incrementCounter = (id) => (dispatch) => {
    dispatch({type:ActionTypes.INCREMENT_COUNTER, payload : id});
}

export const decrementCounter = (id) => (dispatch) => {
    dispatch({type:ActionTypes.DECREMENT_COUNTER, payload : id});
}

export const handledelete = (id) => (dispatch) => {
    dispatch({type:ActionTypes.DELETE_CART, payload : id});
}

