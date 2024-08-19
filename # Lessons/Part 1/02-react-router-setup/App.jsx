/*
  Daisy UI
  - add and configure daisyui to our project
  - add TailwindCSS Typography plugin

  1. npm i  -D daisyui@latest @tailwindcss/typography
  2. tailwind.config.js -> add plugin


***************************

  Install Packages
  - npm i axios
  - npm i react-icons
  - npm i react-toastify
  - npm i dayjs -> Fast 2kB alternative to Moment.js with the same modern API
  - npm i react-redux @reduxjs/toolkit
  - npm i @tanstack/react-query @tanstack/react-query-devtools
  - npm i react-router-dom 
  

***************************

  Create All Pages
  - create pages directory
    -> create all pages and export from index.js
    -> HomeLayout, Landing, Login, Register, About, Error
    -> Orders, Cart, Checkout, Error
      Products, Register, SingleProduct
    -> import in app.jsx


***************************

  Setup React Router
  - configure react router
  - setup initial route structure
    hint : look for nested UI (basically navbar)


  1. Create Router Configuration:
    -> Use the `createBrowserRouter` function to set up a router configuration.
    -> Define an array of route objects, each representing a different route in your application.
    -> Configure routes for different paths, including components like `HomeLayout`, `Landing`, `Products`, etc.

  2. Create Router Instance:
    -> Create a router instance using the `createBrowserRouter` function and pass in the defined route configuration.

  3. Define App Component:
    -> Create a functional component named `App`.
    -> Return a `RouterProvider` component and pass in the created router instance as a prop.

  4. HomeLayout: 
    -> use Outlet


***************************

  Error Page
  - complete error page
  - create two returns
  - first for 404 errors
  - second for all other errors
  - log the error
  - add option to navigate home


  5. Create Error Component:
    -> Define a functional component named `Error`.
    -> Inside the component, use the `useRouteError` hook to get information about the route error.
    -> Check the status of the error using `error.status`.

  6. Conditional Rendering for 404 Error:
    -> If the error status is 404, render a `main` element with a grid layout and centered content.
    -> Display a large "404" text, a title "Page not found," and a description.
    -> Include a link back to the home page using the `Link` component.

  7. Conditional Rendering for Other Errors:
    -> If the error status is not 404, render a `main` element with a grid layout and centered content.
    -> Display a text message indicating that there was an error.


*/

import { HomeLayout, Landing, Error, About, Register, Login } from './pages'
import { createBrowserRouter, RouterProvider } from 'react-router-dom' // 1.

// 2.
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
  // 3.
  return <RouterProvider router={router} />
}

export default App
