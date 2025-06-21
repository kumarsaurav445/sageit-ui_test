import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import menuReducer from "./slices/menuSlice";



const store = configureStore({
    reducer: {
        product: productReducer,
        menu: menuReducer
    }
})

export default store;