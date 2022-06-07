import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    count : 1,
    cart: []
}
const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addtoCart : (state,action) => {
            const existingItem = state.cart.find((item) => item.title === action.payload.title);
            if(!existingItem) {
                state.cart.push({
                    itemId: action.payload.id,
                    title: action.payload.title,
                    quantity: 1,
                    total: action.payload.price,
                    price: action.payload.price
                })
            }else{
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.total = existingItem.total + action.payload.price;    
            }
        },
        addQuantity: (state,action) => {

        },
        removefromCart : (state,action) => {
            
        }
    }
})


export default cartSlice;