import { configureStore } from "@reduxjs/toolkit";
import productModalReducer from "./product-modal/productModalSlice";
import CartItemSlice from "./shopping-cart/CartItemSlice";
export const store =configureStore({
    reducer:{
        productModal:productModalReducer,
        cartItems:CartItemSlice
    }
})