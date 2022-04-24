import classes from './cart.module.css';
import Modal from '../UI/Modal';
const Cart = props => {
    const cartItems = <ul className = {classes['cart-items']}>
        {
            [{id: 'c1', name: 'shushi', amount: 2, price: 12.99}].map( cartItem => <li>{cartItem.name}</li>)
        }
    </ul>;
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
            </div>
            <div>
                <span>35.62</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart;