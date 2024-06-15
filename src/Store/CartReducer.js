// export const CartReducer = (state=[], action) => {
//     switch(action.type) {
//         case "ADD-CART": {
//             const product = state.find((item) => item.id === action.payload.id);
//             return product ? state.map((item) => {
//                 if (item.id === action.payload.id) {
//                     return {...item, quantity: item.quantity + 1}
//                 }
//                 return item
//             }) : [...state, {...action.payload, quantity: 1}]
//         }
//         case "REMOVE-ITEM": {
//             return state.filter((item) => item.id !== action.payload)
//         }
//         case "MODIFY-QUANTITY": {
//             const updatedArr = state.map((item) => {
//                 if(item.id === action.payload.id) {
//                     return {...item, quantity: action.payload.quantity}
//                 }
//                 return item
//             })
//             return updatedArr;
//         }
//         case "CLEAR-CART": {
//             return [];
//         }
//         default: {
//             return state;
//         }
//     }
// }
// import { createReducer } from "@reduxjs/toolkit";

//  export const CartReducer = createReducer([], (builder) => {
//     builder
//             .addCase(addToCart, (state, action) => {
//                 const product = state.find((item) => item.id === action.payload.id)
//                 product ? product.quantity++ : state.push({...action.payload, quantity: 1})
//             })
//             .addCase(removeItem, (state, action) => {
//                 return state.filter((item) => item.id !== action.payload)
//             })
//             .addCase(modifyQuantity, (state, action) => {
//                 const product = state.find((item) => item.id === action.payload.id)
//                 product.quantity = action.payload.quantity;
//             })
//             .addCase(clearCart, () => {
//                 return [];
//             })
//  })


import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const product = state.find((item) => item.id === action.payload.id)
            product ? product.quantity++ : state.push({...action.payload, quantity: 1})  
        },
        removeItem(state, action) {
            return state.filter((item) => item.id !== action.payload) 
        },
        modifyQuantity(state, action) {
            const product = state.find((item) => item.id === action.payload.id)
            product.quantity = action.payload.quantity;
        },
        clearCart() {
            return [];
        }
    }
})

export const { addToCart, clearCart, modifyQuantity, removeItem } = CartSlice.actions;