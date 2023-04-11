import { createStore } from "redux";
import { produce } from 'immer'
const intialState = {
    name: 'shivam',
    address: {
        street: 'Mira Road',
        city: 'Mumbai',
        state: 'MH'
    }
}

const STREET_UPDATED = 'STREET_UPDATED';

const updateStreet = () => {
    return {
        type: STREET_UPDATED,
        payload: 'Mira Bhayander Road'
    }
}

const reducer = (state = intialState, action) => {
    switch(action.type) {
        case STREET_UPDATED : return produce(state, (draft) => {
            draft.address.street = action.payload
        })
        default: return state
    }
}


const store = createStore(reducer);

const unsubscribe = store.subscribe(() => {});

store.dispatch(updateStreet())
console.log(store.getState())