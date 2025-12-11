import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import NavLinks from './NavLinks'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../features/user/userSlice'
import logo from '../assets/logo.svg'
import logoIcon from '../assets/logo-icon.svg'

// const themes = {
//   winter: 'winter',
//   dracula: 'dracula',
// }
// const getThemeFromLocalStorage = () => {
//   return localStorage.getItem('theme') || themes.winter
// }

const Navbar = () => {
  // const [theme, setTheme] = useState(getThemeFromLocalStorage())

  // const handleTheme = () => {
  //   const { winter, dracula } = themes
  //   const newTheme = theme === winter ? dracula : winter
  //   setTheme(newTheme)
  // }

  // useEffect(() => {
  //   document.documentElement.setAttribute('data-theme', theme)
  //   localStorage.setItem('theme', theme)
  // }, [theme])

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

  const theme = useSelector((state) => state.userState.theme)
  const dispatch = useDispatch()
  const handleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element ">
        {/* 1. logo start */}
        <div className="navbar-start">
          <NavLink
            to="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            {/* Full logo for large screens */}
                    <img
                      src={logo}
                      alt="Furno"
                      className="hidden lg:block h-16 w-auto"
                    />
            {/* Icon only for small screens */}
            <img
              src={logoIcon}
                      alt="Furno"
                      className="lg:hidden h-16 w-16"
            />
          </NavLink>
          {/* 1-1. Dropdown nav links: small screen appear*/}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        {/* 2. nav links center: large screen horizontal */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal ">
            <NavLinks />
          </ul>
        </div>

        {/* 3. theme icons */}

        <div className="navbar-end">
          <label className="swap swap-rotate ">
            <input
              type="checkbox"
              onChange={handleTheme}
              checked={theme === 'dracula'}
            />
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
            {/* this hidden checkbox controls the state */}
          </label>

          {/* 4. cart links */}
          <NavLink to="cart" className="btn btn-ghost btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item">
                {numItemsInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
