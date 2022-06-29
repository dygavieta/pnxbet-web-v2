import React, { useEffect, useState } from 'react'
import { scrollToHero, scrollToAbout } from './Utilities/ScrollFunctions'
import {
  MenuIcon,
  XIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@heroicons/react/outline'

import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('')
  const [nav, setNav] = useState(false)
  const [drop, setDrop] = useState(false)
  const handleNav = () => setNav(!nav)
  const handleClose = () => {
    setNav(!nav)
    setDrop(false)
  }
  const handleDrop = () => setDrop(!drop)

  const sampleLocation = useLocation()
  useEffect(() => {
    const url = sampleLocation.pathname + sampleLocation.hash
    setActiveLink(url)
  })

  return (
    <div className="w-full h-[80px] z-50 bg-black fixed drop-shadow-sm ">
      <div className="px-2 flex justify-between items-center h-full text-rose-50">
        <div className="flex items-center uppercase">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl ">
            <Link to="/" onClick={scrollToHero}>
              Pnxbet
            </Link>
          </h1>
          <ul className="hidden md:flex items-center">
            <li>
              <Link
                className={activeLink === '/' ? 'navItem active' : 'navItem '}
                onClick={() => {
                  scrollToHero()
                  setActiveLink('home')
                }}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={
                  activeLink === '/#about' ? 'navItem active' : 'navItem '
                }
                onClick={() => {
                  scrollToAbout()
                  setActiveLink('about')
                }}
                to="/#about"
              >
                About Us
              </Link>
            </li>
            <li
              onMouseOver={() => setDrop(true)}
              onMouseLeave={() => setDrop(false)}
            >
              <Link
                className={
                  activeLink === '/guides' ? 'navItem active' : 'navItem '
                }
                onClick={() => {
                  setActiveLink('guides')
                  window.scrollTo(0, 0)
                }}
                to="/guides"
              >
                Guides
              </Link>
              {drop && (
                <div
                  className="relative  text-left"
                  onMouseEnter={() => setDrop(true)}
                >
                  <div className="absolute mt-3 w-56 rounded-md shadow-lg  bg-white  ">
                    <div className="py-1 ">
                      <Link
                        className="navSubItem"
                        to="/guides/registration_guide"
                        itemProp="url"
                        onClick={() => {
                          setActiveLink('guides')
                        }}
                      >
                        Registration Guide
                      </Link>
                      <Link
                        className="navSubItem"
                        to="/guides/verification_guide"
                        itemProp="url"
                        onClick={() => {
                          setActiveLink('guides')
                        }}
                      >
                        Verification Guide
                      </Link>
                      <Link
                        className="navSubItem"
                        to="/guides/deposit_guide"
                        itemProp="url"
                        onClick={() => {
                          setActiveLink('guides')
                        }}
                      >
                        Deposit Guide
                      </Link>
                      <Link
                        className="navSubItem border-b-0"
                        to="/guides/withdrawal_guide"
                        itemProp="url"
                        onClick={() => {
                          setActiveLink('guides')
                        }}
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
        <div className="hidden md:flex pr-4 ">
          <button
            className="sign-in-btn"
            onClick={() =>
              window.open('https://www.pnxbet.io/?btag=209088#?sign-in')
            }
            itemProp="url"
          >
            Sign in
          </button>
          <button
            className="regis-btn"
            onClick={() =>
              window.open(' https://www.pnxbet.io/?btag=209088#?sign-up')
            }
            itemProp="url"
          >
            Register
          </button>
        </div>
        <div className="md:hidden" onClick={handleNav}>
          {!nav ? (
            <MenuIcon className="w-5 mx-4" />
          ) : (
            <XIcon className="w-5 mx-4" onClick={() => setDrop(false)} />
          )}
        </div>
      </div>
      {/* Mobile */}
      <div className={!nav ? 'hidden' : 'mnavContainer'}>
        <ul>
          <li className={activeLink === '/' ? 'mnavItem active' : 'mnavItem'}>
            <Link
              to="/"
              onClick={() => {
                handleClose()
                scrollToHero()
                setActiveLink('home')
              }}
            >
              Home
            </Link>
          </li>
          <li
            className={
              activeLink === '/#about' ? 'mnavItem active' : 'mnavItem'
            }
          >
            <Link
              to="/#about"
              onClick={() => {
                handleClose()
                scrollToAbout()
                setActiveLink('#about')
              }}
            >
              About Us
            </Link>
          </li>
          <li
            className={
              activeLink === '/guides'
                ? 'flex mnavItem active'
                : 'flex mnavItem'
            }
          >
            <Link
              to="/guides"
              onClick={() => {
                handleClose()
                setActiveLink('guides')
                window.scrollTo(0, 0)
              }}
            >
              Guides
            </Link>

            {!drop ? (
              <div>
                <ChevronDownIcon
                  className="mnav-dropdown-icon"
                  onClick={handleDrop}
                />
              </div>
            ) : (
              <div>
                <ChevronUpIcon
                  className="mnav-dropdown-icon"
                  onClick={handleDrop}
                />
              </div>
            )}
          </li>
          {drop && (
            <div className="text-left" onMouseEnter={() => setDrop(true)}>
              <li className="mnavSubItem">
                <Link
                  to="/guides/registration_guide"
                  onClick={() => {
                    handleClose()
                    setActiveLink('guides')
                  }}
                >
                  Registration Guide
                </Link>
              </li>
              <li className="mnavSubItem">
                <Link
                  to="/guides/verification_guide"
                  onClick={() => {
                    handleClose()
                    setActiveLink('guides')
                  }}
                >
                  Verification Guide
                </Link>
              </li>
              <li
                className="mnavSubItem"
                onClick={() => {
                  handleClose()
                  setActiveLink('guides')
                }}
              >
                <Link to="/guides/deposit_guide">Deposit Guide</Link>
              </li>
              <li
                className="mnavSubItem"
                onClick={() => {
                  handleClose()
                  setActiveLink('guides')
                }}
              >
                <Link to="/guides/withdrawal_guide">Withdrawal Guide</Link>
              </li>
            </div>
          )}
          <div className="flex flex-col my-2  ">
            <button
              className="msign-in-btn"
              onClick={() =>
                window.open('https://www.pnxbet.io/#?sign-in/?btag=209088')
              }
            >
              Sign in
            </button>
            <button
              className="mregist-btn"
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
