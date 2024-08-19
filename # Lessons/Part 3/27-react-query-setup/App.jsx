/*
  Setup React Query
  1. App.jsx -> import + setup
  2. App.jsx -> routes -> pass query client down to
    -> Landing Page
    -> SingleProduct Page
    -> Products Page
  3. refactor loaders in pages/Landing.jsx, pages/SingleProduct.jsx, pages/Products.jsx


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
import { loader as ordersLoader } from './pages/Orders'
import { store } from './store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query' // #
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// #
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient), // # add queryClient param
        errorElement: <ErrorElement />,
      },
      {
        path: 'products',
        element: <Products />,
        loader: productsLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        loader: singleProductLoader(queryClient),
        errorElement: <ErrorElement />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store, queryClient),
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: ordersLoader(store, queryClient),
      },
      {
        path: 'about',
        element: <About />,
      },
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
