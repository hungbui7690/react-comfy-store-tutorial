/*
  Setup Logout And Access User
  - setup temp user to test 
    -> later, user will be set when login
  - Add user info in Header
  - NavLinks only shows Checkout & Orders when user logins


***************************

  1. userSlice.js
  2. Header.jsx
  3. NavLinks.jsx
  4. pages/Cart.jsx


*/

import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

const themes = {
  winter: 'winter',
  dracula: 'dracula',
}

const getThemeFromLocalStorage = () => {
  const theme = localStorage.getItem('theme') || themes.winter
  document.documentElement.setAttribute('data-theme', theme)
  return theme
}

// #
const initialState = {
  user: { username: 'joe doe' },
  theme: getThemeFromLocalStorage(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log('login')
    },

    // #
    logoutUser: (state) => {
      state.user = null
      // localStorage.clear()
      localStorage.removeItem('user')
      toast.success('Logged out successfully')
    },
    toggleTheme: (state) => {
      const { dracula, winter } = themes
      state.theme = state.theme === dracula ? winter : dracula
      document.documentElement.setAttribute('data-theme', state.theme)
      localStorage.setItem('theme', state.theme)
    },
  },
})

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions

export default userSlice.reducer
