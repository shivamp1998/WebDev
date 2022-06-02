const redux = require('redux');
const reduxReducer = (state = {counter: 0},action) => {

    if(action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }
    return {state}
}
const store = redux.createStore(reduxReducer);
const reduxSubscribe = () => {
    const latestState = store.getState();
    console.log(latestState)
}
store.subscribe(reduxSubscribe);

store.dispatch({type: 'increment'});
