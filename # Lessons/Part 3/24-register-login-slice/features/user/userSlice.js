/*
  Register
  - API Docs -> https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi
  - setup action in Register
  - add action to Register route in App.jsx


  Login Setup
  - API Docs -> https://documenter.getpostman.com/view/18152321/2s9Xy5KpTi
  - setup action in login and access store


************************

  1. userSlice.js
  2. pages/Register.jsx
  3. pages/Login.jsx
  4. App.jsx


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
const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('user')) || null
}

const initialState = {
  user: getUserFromLocalStorage(), // #
  theme: getThemeFromLocalStorage(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt }
      state.user = user
      localStorage.setItem('user', JSON.stringify(user))
    },
    logoutUser: (state) => {
      state.user = null
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
