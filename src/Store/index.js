import { createStore, combineReducers } from "redux";
import { CounterReducer } from "./counter";
import { CartReducer } from "./CartReducer";

const rootReducer = combineReducers({
    counter: CounterReducer,
    cart: CartReducer
})

export const Store = createStore(rootReducer);
