import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { Fragment } from 'react';
import { counterActions } from '../store';
const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  };
  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase);
  }
  const counterValue = useSelector((state => state.counter))
  const hide = useSelector(state => state.hidden);
  return (
    <main className={classes.counter}>
      {
        hide && <Fragment><h1>Redux Counter</h1>
                <div className={classes.value}>{counterValue}</div>
                </Fragment>
      }
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
