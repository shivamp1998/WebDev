import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    count : 1,
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addtoCart : (state,action) => {
            state.count ++;
        },
        removefromCart : (state,action) => {
            state.count --;
        }
    }
})


export default cartSlice;