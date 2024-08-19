import {
  HomeLayout,
  Landing,
  Error,
  About,
  Register,
  Login,
  Products,
  Cart,
  SingleProduct,
} from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorElement } from './components'
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProduct'
import { loader as productsLoader } from './pages/Products'

// #
import { action as loginAction } from './pages/Login'
import { action as registerAction } from './pages/Register'
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
      { path: 'about', element: <About /> },
    ],
  },

  // #
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action: loginAction(store),
  },

  // #
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
