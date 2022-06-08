import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';
const Cart = (props) => {
  const cart = useSelector(state => state.cart.cart)
  console.log(cart)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cart.map((value,index) => (
            <CartItem
              item={{ id: value.id,title: value.title, quantity:value.quantity, total: value.total, price: value.price }}
            />
          ))
        }
      </ul>
    </Card>
  );
};

export default Cart;
