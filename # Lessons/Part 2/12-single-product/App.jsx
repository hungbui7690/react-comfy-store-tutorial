/*
  Single Product
  - complete in multiple steps
  - fetch and render single product
  - don't forget about the colors and amount options
  - extra credit - set amount options dynamically


****************************

  <div class="breadcrumbs text-sm">
    <ul>
      <li><a>Home</a></li>
      <li><a>Documents</a></li>
      <li>Add Document</li>
    </ul>
  </div>


  <div class="badge">default</div>
  <div class="badge badge-neutral">neutral</div>


****************************

  1. pages/SingleProduct.jsx


*/

import {
  HomeLayout,
  Landing,
  Error,
  About,
  Register,
  Login,
  Products,
  SingleProduct,
} from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorElement } from './components'
import { loader as landingLoader } from './pages/Landing'
import { loader as singleProductLoader } from './pages/SingleProduct' // 4.

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
        element: <Products />,
      },

      {
        path: 'products/:id',
        loader: singleProductLoader, // 6.
        element: <SingleProduct />,
      },
      { path: 'about', element: <About /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
