/*
  Setup Login Page


************************

  Input Field Component
  - in Daisy-UI
    -> find Text input component
    -> look for "With form-control and labels"
    -> copy
  - create components/FormInput.jsx with index.js -> paste
  - accepts the following props: "label", "name", "type", and "defaultValue".
  - export from index.js
  - test in login


************************

  SubmitBtn
  - Accept a prop "text".
  - Inside the component, use the "useNavigation()" hook to access navigation state.
  - Determine whether the form is submitting by checking if "navigation.state" is equal to "submitting".
    -> Inside the "button" element, use a conditional rendering:
      # If "isSubmitting" is true:
        - Render a "span" element with class "loading loading-spinner".
        - Render the text "sending...".
      # If "isSubmitting" is false:
        - Render the "text" prop if provided, otherwise render "submit".


************************

  Login Page Structure
  - use <Form> instead of <form>

  - pages/Login.jsx


************************
  
  Register Page Structure
  - pages/Register.jsx


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
