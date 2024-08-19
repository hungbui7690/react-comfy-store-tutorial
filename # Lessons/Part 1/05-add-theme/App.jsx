/*
  Toggle Component
  1. Navbar.jsx


************************

  Add Theme - Daisy UI
  - https://daisyui.com/docs/themes/
  
  2. tailwind.config.js
      daisyui: {
        themes: ['winter', 'dracula'],
      },

  3. <html lang="en" data-theme="dracula">
  
  
************************

  Swap
  - <label class="swap">
      <input type="checkbox" />
      <div class="swap-on">ON</div>
      <div class="swap-off">OFF</div>
    </label>


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
