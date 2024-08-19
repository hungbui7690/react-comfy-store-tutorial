/*
  Generate Amount Inputs
  - Array.from({ length: number }, (_, index) => { ... }) -> This part uses the Array.from method to create an array of a specific length, determined by the number parameter. The second argument of the Array.from method is a callback function that will be invoked for each element in the array. The underscore (_) is a placeholder for the current element (which we don't need in this case), and index is the index of the current element.

  - const amount = index + 1 -> Inside the callback function, this line calculates the amount value based on the index. Since the index starts from 0 but you want amount to start from 1, you add 1 to the index.


  1. change utils/<index.js> to utils/<index.jsx> -> add generateAmountOptions -> go to pages/SingleProduct.jsx to use 

    export const generateAmountOptions = (number) => {
      return Array.from({ length: number }, (_, index) => {
        const amount = index + 1;

        return (
          <option key={amount} value={amount}>
            {amount}
          </option>
        );
      });
    };


*/

import axios from 'axios'

const productionUrl = 'https://strapi-store-server.onrender.com/api'

export const customFetch = axios.create({
  baseURL: productionUrl,
})

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2))
  return dollarsAmount
}

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    )
  })
}
