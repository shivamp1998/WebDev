import CartContext from './cart-context';
import { useReducer } from 'react';
const defaultCartState = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state,action) => {
    if( action.type === 'ADD') {
        const updatedItem = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            item: updatedItem,
            amount: updatedTotalAmount
        }
    }
    return defaultCartState;
}
const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item})
    };
    const removeItemFromCart = id => {
        dispatchCartAction({type: 'REMOVE', id: id})
    };

    const cartContextValue = {
        items: cartState.item,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCart
    }
    return <CartContext.Provider value={cartContextValue}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;