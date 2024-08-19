/*
  Checkout Page
  - Create Order: https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi
    -> /order
  - docs - create order request
  

****************************

  1. pages/Checkout.jsx
    a. components/CheckoutForm
    b. components/CartTotals
  2. App.jsx
    -> in App.jsx import loader from Checkout page
    -> pass store into the checkoutLoader
    -> if no user redirect to login


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
  SingleProduct,
} from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorElement } from './components'
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProduct'
import { loader as productsLoader } from './pages/Products'
import { action as loginAction } from './pages/Login'
import { action as registerAction } from './pages/Register'
import { action as checkoutAction } from './components/CheckoutForm' // #
import { loader as checkoutLoader } from './pages/Checkout'
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

      // #
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
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
