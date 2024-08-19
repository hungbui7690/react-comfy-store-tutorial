/*
  Format Price
  1. utils/index.jsx
    - payment providers need in smallest unit
      -> in this case cents
    - in utils setup a function to format price
    - will utilize in ProductsGrid


***********************

  Featured Products
  - in utils/index.js -> customFetch()
  - in pages/Landing.jsx -> loader() to get products
  - in components/ProductGrids -> const { products } = useLoaderData() 


  2. create components/FeaturedProducts - SectionTitle - ProductsGrid 
    -> render SectionTitle and ProductsGrid in FeaturedProducts
    -> setup SectionTitle
    -> in ProductsGrid access and render products from loader

  3. pages/Landing.jsx


*/

import { HomeLayout, Landing, Error, About, Register, Login } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorElement } from './components'
import { loader as landingLoader } from './pages/Landing'

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
