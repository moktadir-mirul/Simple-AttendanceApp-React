// export const addToCart = (product) => {
//     return {type: "ADD-CART", payload: product}
// }

// export const removeItem = (itemId) => {
//     return {type: "REMOVE-ITEM", payload:itemId}
// }

// export const modifyQuantity = (obj) => {
//     return { type: "MODIFY-QUANTITY", payload: obj }
// }
 
// export const clearCart = () => {
//     return {type: "CLEAR-CART" }
// }

// import { createAction } from "@reduxjs/toolkit";

// export const addToCart = createAction("ADD-CART");
// export const removeItem = createAction("REMOVE-ITEM");
// export const modifyQuantity = createAction("MODIFY-QUANTITY");
// export const clearCart = createAction("CLEAR-CART");

import { addToCart, removeItem, modifyQuantity, clearCart } from "../Store/CartReducer";

export {addToCart, removeItem, modifyQuantity, clearCart};