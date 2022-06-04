import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

const initialState = {counter: 0, hidden: false};
const counterSlice = createSlice({
    name: 'counter',
    initialState:initialState,
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state,action) {
            state.counter = state.counter + action.payload;
        },
        toggle(state) {
            state.hidden = !state.hidden;
        } 
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState: {isLoggedIn: false},
    reducers: {
        login(state,action) {
            state.isLoggedIn = true;
        },
        logout(state,action){
            state.isLoggedIn = false;
        }
    }
})

const store = configureStore({
    reducer: {counter: counterSlice.reducer, user: userSlice.reducer}
})
export const counterActions = counterSlice.actions;
export const userActions = userSlice.actions;

export default store;






