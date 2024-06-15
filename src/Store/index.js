// import { createStore, combineReducers } from "redux";


// const rootReducer = combineReducers({
//     counter: CounterReducer,
//     cart: CartReducer
// })

// export const store = createStore(rootReducer);
import { configureStore } from "@reduxjs/toolkit";
import { CounterReducer } from "./counter";
import {CartSlice} from "./CartReducer"


const rootReducer = {
    cart: CartSlice.reducer,
    counter: CounterReducer
}

export const store = configureStore({
    reducer: rootReducer,
})