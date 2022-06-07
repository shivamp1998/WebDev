import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    hidden: false,
}
export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        toggleCart : (state,action) => {
            state.hidden = !state.hidden;
        }
    }
})

const store = configureStore({
    reducer: {cart: cartSlice.reducer}
})

export default store;