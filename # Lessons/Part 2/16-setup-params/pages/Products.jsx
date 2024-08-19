/*
  Setup Params
  - Filter Route: https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi#80a47ff5-cc24-494b-89e0-02cd92acc226)
  - access params in loader
  - use params in customFetch
  - pass params down
  - use params as default values (price in FormRange)
  - setup reset button


************************

  1. pages/Products.jsx
    -> loader()
  
  2. components/Filters.jsx


************************

  - Long Way
      const params = new URL(request.url).searchParams
      -> return URLSearchParams {size: 5}
      const entries = params.entries()
      -> return URLSearchParams Iterator {}
      const paramsList = Object.fromEntries([...params])
      -> return {search: '', category: 'all', company: 'all', order: 'a-z', price: '100000'}

  - Short Way
      const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries(),
      ])
      -> It takes a URL string from the request.url property.
      -> It creates a URL object from that URL string.
      -> It extracts the query parameters using the searchParams property.
      -> It converts the query parameters into an iterable of key-value pairs using the entries() method.
      -> It spreads these key-value pairs into an array.
      -> It uses Object.fromEntries() to create a new object where the key-value pairs become properties of the object.


*/

import { Filters, ProductsContainer } from '../components'
import PaginationContainer from '../components/PaginationContainer'
import { customFetch } from '../utils'

const url = '/products'

// OLD
// export const loader = async ({ request }) => {
//   const response = await customFetch(url)
//   const products = response.data.data
//   const meta = response.data.meta

//   return { products, meta }
// }

// NEW
export const loader = async ({ request }) => {
  const params = new URL(request.url).searchParams
  console.log('params: ', params) // URLSearchParams {size: 5}
  const entries = params.entries()
  console.log('entries: ', entries) // URLSearchParams Iterator {}
  const paramsList = [...params]
  console.log('paramsList: ', paramsList) // {search: '', category: 'all', company: 'all', order: 'a-z', price: '100000'}

  const response = await customFetch(url, { paramsList })

  const products = response.data.data
  const meta = response.data.meta

  return { products, meta, params }
}

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  )
}
export default Products
