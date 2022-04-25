import React from 'react';
import CartIcon from '../Cart/CartIcon';
import Class from './HeaderCart.module.css';
const HeaderCardButton = (props) => {
    return( 
    <button className={Class.button} onClick={props.onClick}>
        <span className={Class.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={Class.badge}>
            3
        </span>
    </button>
    )
}


export default HeaderCardButton