import { createContext, useReducer } from "react";
import { CartReducer } from "../Reducer/CartReducer";


export const CartContext = createContext();

export const ShopProvider = ({children}) => {
    const [cart, dispatch] = useReducer(CartReducer, []);
    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}