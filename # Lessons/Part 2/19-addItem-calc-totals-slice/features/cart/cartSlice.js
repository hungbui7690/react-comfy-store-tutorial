/*
  Add Item to Cart -> SingleProductPage
  - import and dispatch addItem action
  - add item to cart in SingleProduct page


*****************************

  Add Reducer
  - display cartItems in Navbar
  - setup addItem functionality


*****************************

  1. pages/SingleProduct.jsx
  2. cartSlice.js


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

// #
const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(), // #
  reducers: {
    // 5a. components/Navbar.jsx
    addItem: (state, action) => {
      const { product } = action.payload
      const item = state.cartItems.find((i) => i.cartID === product.cartID)
      if (item) {
        item.amount += product.amount // check SingleProduct.jsx to see the structure of the item
      } else {
        state.cartItems.push(product)
      }

      state.numItemsInCart += product.amount
      state.cartTotal += product.price * product.amount
      state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
      toast.success('Item added to cart')
    },
    clearCart: (state) => {},
    removeItem: (state, action) => {},
    editItem: (state, action) => {},

    // 5b.
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
