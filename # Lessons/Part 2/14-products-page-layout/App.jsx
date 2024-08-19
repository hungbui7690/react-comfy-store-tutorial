/*
  Products Page (Setup)
  - pic -> demo6 to demo8
  - most challenge page in this project
  - create components/ and render in products page
    -> Filters
    -> ProductsContainer
    -> PaginationContainer
  - in products page loader fetch all products


***************************

  1. page/Products
    # loader() -> use in App.jsx
      -> return {products, meta} 
  2. components/ProductContainer 
    -> useLoaderData()


    meta = {
      categories : ['all', 'Tables', 'Chairs', 'Kids', 'Sofas', 'Beds']
      companies  : ['all', 'Modenza', 'Luxora', 'Artifex', 'Comfora', 'Homestead']
      pagination : {
        page : 1
        pageSize : 10
        pageCount : 3
        total : 22
      }
    }


***************************

  Filter Structure
  - FormInput     -> Search Product
  - FormSelect    -> Select Categories  -> load from meta.categories
  - FormSelect    -> Select Company     -> load from meta.companies 
  - FormSelect    -> Sort By
  - FormRange     -> Select Price
  - FormCheckbox  -> Free Shipping
  - Search Button
  - Reset Button


***************************

  Products Page Structure
  - Filters
  - ProductsContainer
    - ProductHeader
    - ProductList or ProductsGrids
  - PaginationContainer


***************************

  Filters (Search Input)
  - add size to prop FormInput.jsx -> sm/md/lg
  

***************************

  Filters (Select)
  - create components/FormSelect.jsx


***************************

  Filters (Range)
  - create components/FormRange.jsx


***************************

  Filters (Shipping)
  - create checkbox input


***************************

  Products Container
  - Header
    -> total products and toggle buttons -> toggle between ProductsGrid and ProductsList
  - create ProductsList -> render products in one column
  - Product Grids       -> render products in multiple columns


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
import { loader as productsLoader } from './pages/Products' // #

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
        loader: productsLoader, // #
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
