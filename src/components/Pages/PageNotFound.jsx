import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div className="h-screen py-28  bg-gradient-to-b from-orange-600 via-yellow-700 to-black">
      <div className="max-w-[1240px]  mx-auto text-center">
        <div className="md:border-4 border-orange-600 bg-black my-20 text-white">
          <div className="font-bold">
            <h1 className="text-[120px]   md:text-[320px]">404</h1>
            <p className="text-4xl  md:text-6xl">PAGE NOT FOUND</p>
            <p>
              The page your trying to reach might been removed or never existed.
            </p>
          </div>
          <div className="py-6">
            <Link
              to="/"
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              <button>HOME</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageNotFound
