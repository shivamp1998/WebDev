import React from 'react';
import CartIcon from '../Cart/CartIcon';
import Class from './HeaderCart.module.css';
import {useContext} from 'react';
import CartContext from '../../store/cart-context';
const HeaderCardButton = (props) => {
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items?.reduce((curNumber,item) => {
        return curNumber + item.amount;
    },0);
    console.log(cartCtx)
    return( 
    <button className={Class.button} onClick={props.onClick}>
        <span className={Class.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={Class.badge}>
             {numberOfCartItems}
        </span>
    </button>
    )
}


export default HeaderCardButton