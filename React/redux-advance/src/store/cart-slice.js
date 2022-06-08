import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    cartQuantity : 0,
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
                    id: action.payload.id,
                    title: action.payload.title,
                    quantity: 1,
                    total: action.payload.price,
                    price: action.payload.price
                })
            }else{
                existingItem.quantity = existingItem.quantity + 1;
                existingItem.total = existingItem.total + action.payload.price;    
            }
            state.cartQuantity ++;
        },
        addQuantity: (state,action) => {
            const product = state.cart.find((item) => item.id === action.payload.id);
            product.quantity ++;
            product.total = product.total + product.price;
            state.cartQuantity++;
        },
        removefromCart : (state,action) => {
            const product = state.cart.find((item) => item.id === action.payload.id);
            if(product.quantity === 1) {
                state.cart = state.cart.filter((item) => item.id !== action.payload.id)
            }else{
                product.quantity --;
                product.total = product.total - product.price;
            }
            state.cartQuantity --;
        }
    }
})


export default cartSlice;