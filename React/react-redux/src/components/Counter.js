import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import store from '../store';
const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
  };
  const incrementHandler = () => {
    dispatch({type: 'increment'})
  }
  const decrementHandler = () => {
    dispatch({type: 'decrement'})
  }
  const increaseHandler = () => {
    dispatch({type: 'increase', amount : 5});
  }
  const counterValue = useSelector((state => state.counter))
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counterValue}</div>
      <div>
        <button type="button" onClick={incrementHandler}>Increment</button>
        <button type="button" onClick={decrementHandler}> Decrement </button>
        <button type="button" onClick={increaseHandler}> Increase by 5 </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
