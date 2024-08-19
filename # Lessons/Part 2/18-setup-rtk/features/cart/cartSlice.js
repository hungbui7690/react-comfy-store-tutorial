/*
  Setup RTK and react-toastify
  - pic -> demo 10
  - main.jsx -> setup toastify + rtk


****************************

  Cart Features
  - cartSlice -> reducer
    -> addItem    -> Logs the payload when an item is added.
    -> clearCart  -> Intended to clear all items from the cart.
    -> removeItem -> Intended to remove a specific item.
    -> edit item  -> Intended to edit a specific item. -> change item amount, color...

  - initialState
    -> cartItem       -> array of Items
    -> numItemsInCart -> product.amount
    -> cartTotal      -> product.price * product.amount -> Sub Totals
    -> shipping       -> fixed integer -> 500
    -> tax            -> state.tax = 0.1 * state.cartTotal
    -> orderTotal     -> state.cartTotal + state.shipping + state.tax -> Order Totals (include Shipping + Tax)


****************************

  1. create features/cart/cartSlice.js
    - setup default state and reducers
    - export actions and cartSlice.reducer

  2. create store.js and add cartSlice
  3. setup RTK and react-toastify in main.jsx


*/

import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload)
    },
    clearCart: (state) => {},

    removeItem: (state, action) => {},
    editItem: (state, action) => {},
  },
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
