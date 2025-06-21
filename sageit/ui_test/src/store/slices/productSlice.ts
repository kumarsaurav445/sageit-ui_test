import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/product";


const productSlice = createSlice({
    name: "product",
    initialState: [] as Product[],
    reducers: {
        addToProductList: (state, action) => {
            const product = action.payload as Product;
            state.push(product);
        }
    }
})


export const { addToProductList } = productSlice.actions;
export default productSlice.reducer;