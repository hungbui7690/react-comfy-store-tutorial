/*
  Custom Class
  1. index.css
      @layer components {
        .align-element {
          @apply mx-auto max-w-6xl px-8;
        }
      }
  - add to HomeLayout Outlet component


******************************

  Header Component
  2. create components/Header
    - setup and render header component in HomeLayout
    - add two links - Login and Register


******************************

  Navbar
  3. create components/Navbar.jsx
    - setup initial structure
    - use Daisy navbar component
    - "# responsive (dropdown menu on small screen, center menu on large screen)"
    - import icons from react-icons
    - render in HomeLayout.jsx


******************************

  NavLinks
  4. create NavLinks component
    - setup an array of links
    - iterate over and setup return
    - render in Navbar.jsx


*/

import { HomeLayout, Landing, Error, About, Register, Login } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
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
