/*
  Change Theme
  1. Navbar.jsx


*************************

  - Import "useEffect" and "useState" from "'react'".
  - Theme Configuration:
    -> Define a "themes" object with theme names as keys.
  - Local Storage Theme Retrieval:
    -> Create a function named "getThemeFromLocalStorage".
    -> Return the value of the "'theme'" key from "localStorage" or the default theme "'winter'".
  - Logic:
    -> Create a state variable "theme" using the "useState" hook and initialize it with the result of "getThemeFromLocalStorage()".
    -> Define a function "handleTheme" that toggles between the "'winter'" and "'dracula'" themes based on the current theme.
    - Use the "useEffect" hook to apply the selected theme to the "document.documentElement" and store the theme value in "localStorage".


*/

import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
import { useState, useEffect } from 'react'

// 1.
const themes = {
  winter: 'winter',
  dracula: 'dracula',
}

// 2.
const getThemeFromLocalStorage = () => {
  return localStorage.getItem('theme') || themes.winter
}

const Navbar = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage()) // 3.

  // 4.
  const handleTheme = () => {
    const { winter, dracula } = themes
    const newTheme = theme === winter ? dracula : winter
    setTheme(newTheme)
  }

  // 5.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className='bg-base-200'>
      <div className='navbar align-element '>
        <div className='navbar-start'>
          {/* Title */}
          <NavLink
            to='/'
            className='hidden lg:flex btn btn-primary text-3xl items-center '
          >
            C
          </NavLink>
          {/* DROPDOWN */}
          <div className='dropdown'>
            <label tabIndex={0} className='btn btn-ghost lg:hidden'>
              <FaBarsStaggered className='h-6 w-6' />
            </label>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal '>
            <NavLinks />
          </ul>
        </div>
        <div className='navbar-end'>
          {/* THEME ICONS */}
          <label className='swap swap-rotate '>
            {/* this hidden checkbox controls the state */}
            <input type='checkbox' onChange={handleTheme} />
            <BsSunFill className='swap-on h-4 w-4' />
            <BsMoonFill className='swap-off h-4 w-4' />
          </label>

          {/* CART LINK*/}
          <NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-4'>
            <div className='indicator'>
              <BsCart3 className='h-6 w-6' />
              <span className='badge badge-sm badge-primary indicator-item'>
                8
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
