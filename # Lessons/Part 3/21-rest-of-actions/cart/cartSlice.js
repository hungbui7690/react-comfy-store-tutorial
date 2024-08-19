/*
  Rest of the Actions
  1. cartSlice 
    -> clearCart
    -> removeItem
    -> editItem


*************************

  Edit Item
  - state.numItemsInCart += amount - item.amount;
    -> The logic here is to update the total number of items in the cart (state.numItemsInCart) by adjusting it based on the difference between the provided amount and the existing quantity of that item (item.amount). If amount is greater than item.amount, it means that items are being added to the cart. If amount is less than item.amount, it means that items are being removed from the cart. If they are equal, it implies no change to the quantity of that item in the cart.

    -> The result of the subtraction (amount - item.amount) is then added to the current state.numItemsInCart to reflect the new total number of items in the cart.

  - state.cartTotal += item.price * (amount - item.amount);
    -> In this line, the logic is calculating the change in the total cost of the cart (state.cartTotal) based on the price of the item (item.price) and the change in the quantity of that item (amount - item.amount). This calculation is then added to the current state.cartTotal.

    -> If amount is greater than item.amount, it means more items are being added, so the cost of those additional items (difference between amount and item.amount) is calculated by multiplying it with the price of the item. If amount is less than item.amount, it means items are being removed, so the cost of those removed items is subtracted from the state.cartTotal. If they are equal, there is no change in the cost related to that item.


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

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('cart')) || defaultState
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload

      const item = state.cartItems.find((i) => i.cartID === product.cartID)
      if (item) {
        item.amount += product.amount
      } else {
        state.cartItems.push(product)
      }
      state.numItemsInCart += product.amount
      state.cartTotal += product.price * product.amount
      cartSlice.caseReducers.calculateTotals(state)
      toast.success('item added to cart')
    },
    clearCart: (state) => {
      localStorage.setItem('cart', JSON.stringify(defaultState))
      return defaultState
    },

    removeItem: (state, action) => {
      const { cartID } = action.payload
      const product = state.cartItems.find((i) => i.cartID === cartID)
      state.cartItems = state.cartItems.filter((i) => i.cartID !== cartID)

      state.numItemsInCart -= product.amount
      state.cartTotal -= product.price * product.amount
      cartSlice.caseReducers.calculateTotals(state)
      toast.error('Item removed from cart')
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload
      const item = state.cartItems.find((i) => i.cartID === cartID)
      state.numItemsInCart += amount - item.amount
      state.cartTotal += item.price * (amount - item.amount)
      item.amount = amount
      cartSlice.caseReducers.calculateTotals(state)
      toast.success('Cart updated')
    },

    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal
      state.orderTotal = state.cartTotal + state.shipping + state.tax
      localStorage.setItem('cart', JSON.stringify(state))
    },
  },
})

export const { addItem, removeItem, editItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
