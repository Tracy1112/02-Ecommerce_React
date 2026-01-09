import React from 'react'
import { NavLink } from 'react-router-dom'
import { BsCart3, BsMoonFill, BsSunFill } from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { TbTent } from 'react-icons/tb'
import NavLinks from './NavLinks'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTheme } from '../../features/user/userSlice'

const Navbar = () => {
  const numItemsInCart = useSelector(state => state.cartState.numItemsInCart)

  const theme = useSelector(state => state.userState.theme)
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
            aria-label="NomadLiving Boutique home page"
          >
            {/* Text logo for NomadLiving Boutique */}
            <span className="text-xl font-bold tracking-tight">
              <span className="text-primary">NOMAD</span>
              <span className="text-base-content"> | BOUTIQUE</span>
            </span>
          </NavLink>
          {/* 1-1. Dropdown nav links: small screen appear*/}
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
              aria-label="Open navigation menu"
              aria-expanded="false"
              role="button"
            >
              <FaBarsStaggered className="h-6 w-6" aria-hidden="true" />
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

        <div className="navbar-end flex items-center gap-2">
          {/* Cross-link to NomadLiving Stays - Highlighted Button */}
          <a
            href="https://nomadliving-stays.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm gap-2 animate-pulse hover:animate-none hover:scale-105 transition-transform lg:mr-6"
            title="Experience these looks at our Stays"
          >
            <TbTent className="h-4 w-4" />
            <span className="font-semibold hidden sm:inline">Book a Stay</span>
            <span className="font-semibold sm:hidden">Stay</span>
          </a>

          <label className="swap swap-rotate" aria-label="Toggle theme">
            <input
              type="checkbox"
              onChange={handleTheme}
              checked={theme === 'dracula'}
              aria-label="Switch between light and dark theme"
            />
            <BsSunFill className="swap-on h-4 w-4" aria-hidden="true" />
            <BsMoonFill className="swap-off h-4 w-4" aria-hidden="true" />
            {/* this hidden checkbox controls the state */}
          </label>

          {/* 4. cart links */}
          <NavLink
            to="cart"
            className="btn btn-ghost btn-circle btn-md ml-4"
            aria-label={`Shopping cart with ${numItemsInCart} items`}
          >
            <div className="indicator">
              <BsCart3 className="h-6 w-6" aria-hidden="true" />
              <span
                className="badge badge-sm badge-primary indicator-item"
                aria-label={`${numItemsInCart} items in cart`}
              >
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
