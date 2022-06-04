import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import store from '../store';
const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch()
  };
  const counterValue = useSelector((state => state.counter))
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterValue}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
