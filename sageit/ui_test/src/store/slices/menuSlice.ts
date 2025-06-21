import { createSlice } from "@reduxjs/toolkit";
import { HeaderLinks } from "../../types/product";


const menuSlice = createSlice({
    name: "menu",
    initialState: [] as HeaderLinks[],
    reducers: {
        addToProductList: (state, action) => {
            const menu = action.payload as HeaderLinks;
            state.push(menu);
        }
    }
})


export const { addToProductList } = menuSlice.actions;
export default menuSlice.reducer;