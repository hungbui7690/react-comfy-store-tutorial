/*
  ErrorElement
  - pages/Error -> global error
  - components/ErrorElement -> single page error

  2. create components/ErrorElement
    -> setup ErrorElement
    -> add to Loading Page
  3. App.jsx


*/

import { HomeLayout, Landing, Error, About, Register, Login } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorElement } from './components' // #

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: ErrorElement, // #
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
