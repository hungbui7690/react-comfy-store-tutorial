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
import { loader as singleProductLoader } from './pages/SingleProduct'

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
        loader: singleProductLoader,
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
