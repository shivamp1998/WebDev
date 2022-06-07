import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hidden: false,
}
const uiSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        toggleCart : (state,action) => {
            state.hidden = !state.hidden;
        }
    }
})

export default uiSlice;