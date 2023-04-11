import { createStore, combineReducers } from 'redux';
import { bindActionCreators } from 'redux';
const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCK = 'CAKE_RESTOCK';
const ICECREAM_ORDERD = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake() {
    return {
        type: CAKE_ORDERED,
        quantity: 1
    }
}

function restock() {
    return {
        type: CAKE_RESTOCK,
        quantity: 10
    }
}

function orderIceCream() {
    return {
        type: ICECREAM_ORDERD,
        quantity: 1
    }
}

function restockIceCream() {
    return {
        type: ICECREAM_RESTOCKED,
        quantity: 10
    }
}

const cakeState = {
    numOfCakes : 10,
}

const icecreamState = {
    numOfIcecream: 10
}

const cakeReducer = (state = cakeState, action) => {
    switch(action.type) {
        case CAKE_ORDERED : return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case CAKE_RESTOCK : return {
            ...state,
            numOfCakes: state.numOfCakes + action.quantity
        }
        default: return state
    }
}


const icecreamReducer = (state = icecreamState, action) => {
    switch(action.type) {
        case ICECREAM_ORDERD : return {
            ...state,
            numOfIcecream: state.numOfIcecream - 1
        }
        case ICECREAM_RESTOCKED : return {
            ...state,
            numOfIcecream : state.numOfIcecream + 1
        }
        default: return state

    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    icecream: icecreamReducer
})

const store = createStore(rootReducer)

console.log(store.getState())

const unsubscribe = store.subscribe(() => console.log(store.getState()))

store.dispatch(orderCake())
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restock())

const actions = bindActionCreators({orderCake, restock}, store.dispatch)
actions.orderCake()
actions.orderCake()
actions.restock()
unsubscribe()
