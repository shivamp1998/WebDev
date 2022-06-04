import { createStore } from 'redux';

const counterReducer = (state = {counter: 0, hidden: false},action) => {
    if(action.type === 'increment') {
        return { counter : state.counter + 1, hidden: state.hidden}
    }
    else if ( action.type === 'decrement') {
        return { counter : state.counter - 1, hidden: state.hidden}
    }else if ( action.type === 'increase') {
        return { counter : state.counter + action.amount, hidden: state.hidden}
    }
    else if (action.type === 'toggle') {
        return { counter :state.counter, hidden: !state.hidden}
    }
    else{
        return { counter: state.counter, hidden: state.hidden}
    }
}

const store = createStore(counterReducer);


export default store;

