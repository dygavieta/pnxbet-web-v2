import React, { useState } from 'react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="w-full h-[80px] z-10 bg-black fixed drop-shadow-sm ">
      <div className="px-2 flex justify-between items-center h-full text-rose-50">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl"> PNXBET</h1>
          <ul className="hidden md:flex  ">
            <li> Home</li>
            <li> About us</li>
            <li> Test 1</li>
            <li> Test 1</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="bg-orange-600   text-white mr-2 hover:bg-orange-700 border-orange-700">
            Sign in
          </button>
          <button className="bg-transparent border-white hover:bg-orange-700 text-white  hover:text-white hover:border-orange-700">
            Register
          </button>
        </div>
        <div className="md:hidden" onClick={handleNav}>
          {!nav ? (
            <MenuIcon className="w-5  mx-4" />
          ) : (
            <XIcon className="w-5  mx-4" />
          )}
        </div>
      </div>
      <div
        className={
          !nav ? 'hidden' : 'bg-black px-4 w-full md:hidden text-white '
        }
      >
        <ul>
          <li className="border-b-2 border-gray-900 "> Home</li>
          <li className="border-b-2 border-gray-900 "> About us</li>
          <li className="border-b-2 border-gray-900 "> Test 1</li>
          <li className="border-b-2 border-gray-900 "> Test 1</li>
          <div className="flex flex-col my-2 ">
            <button className="bg-orange-600  text-white mr-2 hover:bg-orange-700 border-orange-700 w-full">
              Sign in
            </button>
            <button className="bg-transparent border-white hover:bg-orange-700 text-white  hover:text-white hover:border-orange-700  w-full my-2 ">
              Register
            </button>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
