import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import  { cartSlice }  from '../../store/redux';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(cartSlice.actions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={handleButtonClick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
