import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
    hidden: false,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        toggleCart: (state,action) => {
            state.hidden = !state.hidden;
        }
    }
})

const redux = configureStore({
    reducer: cartSlice.reducer
})

export default redux;