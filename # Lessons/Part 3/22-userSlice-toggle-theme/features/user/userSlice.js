/*
  Setup User Slice
  - setup user slice
  - add to store


*************************

  1. create features/user/userSlice.js
  2. store.js


*************************
*************************

  Toggle Theme
  3. Navbar.jsx
    -> dispatch to userSlice


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
    logoutUser: (state) => {
      console.log('logout')
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
