import classes from './CartButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import uiSlice from '../../store/ui-slice';
const CartButton = (props) => {
  const dispatch = useDispatch();
  const handleButtonClick = () => {
    dispatch(uiSlice.actions.toggleCart());
  }
  return (
    <button className={classes.button} onClick={handleButtonClick}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
