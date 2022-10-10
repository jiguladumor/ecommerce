import { combineReducers } from "redux";
import { AddtocartReducer } from "./addtocart.reducer";
import { categoryReducer } from "./category.reducer";
import { orderreducer } from "./order.reducer";
import { productReducer } from "./product.reducer";


export const rootReducer = combineReducers({
    category: categoryReducer,
    product: productReducer,
    cart:AddtocartReducer,
    order: orderreducer
})