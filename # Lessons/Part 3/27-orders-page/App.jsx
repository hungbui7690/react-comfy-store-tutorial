/*
  Orders Page Setup
  - API Docs : https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi
    -> docs - orders request
  
  
  1. create components/OrdersList.jsx (export)
    -> create loader (import/setup in App.jsx and provide store)
    -> restrict access to page
    -> make a request to get all users
    -> grab all the query params
    -> return orders and meta

  2. ComplexPaginationContainer.jsx


*/

import {
  HomeLayout,
  Landing,
  Error,
  About,
  Register,
  Login,
  Products,
  Cart,
  Checkout,
  Orders,
  SingleProduct,
} from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorElement } from './components'
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProduct'
import { loader as productsLoader } from './pages/Products'
import { action as loginAction } from './pages/Login'
import { action as registerAction } from './pages/Register'
import { action as checkoutAction } from './components/CheckoutForm'
import { loader as checkoutLoader } from './pages/Checkout'
import { loader as ordersLoader } from './pages/Orders' // #
import { store } from './store'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: ErrorElement,
      },
      {
        path: 'products',
        loader: productsLoader,
        element: <Products />,
      },
      {
        path: 'products/:id',
        loader: singleProductLoader,
        element: <SingleProduct />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: 'orders', // #
        element: <Orders />,
        loader: ordersLoader(store),
      },
      { path: 'about', element: <About /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
