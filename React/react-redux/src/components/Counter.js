import classes from './Counter.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { Fragment } from 'react';
const Counter = () => {
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch({type: 'toggle'})
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
