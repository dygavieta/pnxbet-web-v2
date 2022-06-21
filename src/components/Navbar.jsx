import React, { useState } from 'react'
import {
  scrollToHero,
  scrollToAbout,
  scrollToGuide,
} from './Utilities/ScrollFunctions'
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/outline'

import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [drop, setDrop] = useState(false)

  const handleNav = () => setNav(!nav)
  const handleClose = () => setNav(!nav)
  const handleDrop = () => setDrop(!drop)

  return (
    <div className="w-full h-[80px] z-50 bg-black fixed drop-shadow-sm ">
      <div className="px-2 flex justify-between items-center h-full text-rose-50">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl"> PNXBET</h1>
          <ul className="hidden md:flex items-center">
            <li className="hover:cursor-pointer ">
              <Link to="/" onClick={scrollToHero}>
                Home
              </Link>
            </li>
            <li className="hover:cursor-pointer">
              <Link to="/#about" onClick={scrollToAbout}>
                About Us
              </Link>
            </li>
            <li
              className="hover:cursor-pointer "
              onMouseOver={() => setDrop(true)}
              onMouseLeave={() => setDrop(false)}
            >
              <Link to="/guides" onClick={() => window.scrollTo(0, 0)}>
                Guides
              </Link>
              {drop && (
                <div
                  className="relative  text-left"
                  onMouseEnter={() => setDrop(true)}
                >
                  <div
                    className="absolute mt-4 w-56 rounded-md shadow-lg  bg-white ring-1 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabindex="-1"
                  >
                    <div className="py-1 ">
                      <Link
                        className="navSubItem"
                        to="/guides/registration_guide"
                      >
                        Registration Guide
                      </Link>
                      <Link
                        className="navSubItem"
                        to="/guides/verification_guide"
                      >
                        Verification Guide
                      </Link>
                      <Link className="navSubItem" to="/guides/deposit_guide">
                        Deposit Guide
                      </Link>
                      <Link
                        className="navSubItem border-b-0"
                        to="/guides/withdrawal_guide"
                      >
                        Withdrawal Guide
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button
            className="bg-orange-600   text-white mr-2 hover:bg-orange-700 border-orange-700"
            onClick={() =>
              window.open('https://www.pnxbet.io/?btag=209088#?sign-in')
            }
          >
            Sign in
          </button>
          <button
            className="bg-transparent border-white hover:bg-orange-700 text-white  hover:text-white hover:border-orange-700"
            onClick={() =>
              window.open(' https://www.pnxbet.io/?btag=209088#?sign-up')
            }
          >
            Register
          </button>
        </div>
        <div className="md:hidden" onClick={handleNav}>
          {!nav ? (
            <MenuIcon className="w-5  mx-4" />
          ) : (
            <XIcon className="w-5  mx-4" onClick={() => setDrop(false)} />
          )}
        </div>
      </div>
      <div
        className={
          !nav ? 'hidden' : 'bg-black px-4 w-full md:hidden text-white '
        }
      >
        <ul>
          <li className="border-b-2 border-gray-900 hover:cursor-pointer ">
            <Link
              to="/#Home"
              onClick={() => {
                handleClose()
                scrollToHero()
              }}
            >
              Home
            </Link>
          </li>
          <li className="border-b-2 border-gray-900 hover:cursor-pointer ">
            <Link
              to="/#about"
              onClick={() => {
                handleClose()
                scrollToAbout()
              }}
            >
              About Us
            </Link>
          </li>
          <li className="flex border-b-2 border-gray-900 hover:cursor-pointer ">
            <Link
              to="/guides"
              onClick={() => {
                handleClose()
                window.scrollTo(0, 0)
              }}
            >
              Guides
            </Link>

            {!drop ? (
              <div>
                <ChevronDownIcon
                  className=" inline-block mx-2 w-5"
                  onClick={handleDrop}
                />
              </div>
            ) : (
              <div>
                <ChevronUpIcon
                  className=" inline-block mx-2 w-5"
                  onClick={handleDrop}
                />
              </div>
            )}
          </li>
          {drop && (
            <div className="text-left" onMouseEnter={() => setDrop(true)}>
              <li className="border-b-2  px-8 border-gray-900 hover:cursor-pointer ">
                <Link
                  to="/guides/registration_guide"
                  onClick={() => {
                    handleClose()
                  }}
                >
                  Registration Guide
                </Link>
              </li>
              <li className="border-b-2  px-8 border-gray-900 hover:cursor-pointer ">
                <Link
                  to="/guides/verification_guide"
                  onClick={() => {
                    handleClose()
                  }}
                >
                  Verification Guide
                </Link>
              </li>
              <li
                className="border-b-2  px-8 border-gray-900 hover:cursor-pointer"
                onClick={() => {
                  handleClose()
                }}
              >
                <Link to="/guides/deposit_guide">Deposit Guide</Link>
              </li>
              <li
                className="border-b-2  px-8 border-gray-900 hover:cursor-pointer"
                onClick={() => {
                  handleClose()
                }}
              >
                <Link to="/guides/withdrawal_guide">Withdrawal Guide</Link>
              </li>
            </div>
          )}
          <div className="flex flex-col my-2 ">
            <button
              className="bg-orange-600  text-white mr-2 hover:bg-orange-700 border-orange-700 w-full"
              onClick={() =>
                window.open('https://www.pnxbet.io/#?sign-in/?btag=209088')
              }
            >
              Sign in
            </button>
            <button
              className="bg-transparent border-white hover:bg-orange-700 text-white  hover:text-white hover:border-orange-700  w-full my-2 "
              onClick={() =>
                window.open(' https://www.pnxbet.io/?btag=209088#?sign-up')
              }
            >
              Register
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
