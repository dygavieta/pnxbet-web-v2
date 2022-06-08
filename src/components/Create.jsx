import React from 'react'

import test from '../assets/test.png'
import test1 from '../assets/test1.png'
const Create = () => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[1240px] h-full mx-auto grid md:grid-cols-2 md:gap-3  ">
        <div>
          <img
            src={test}
            alt="\"
            className="  border-2  border-orange-600 md:my-1 md:hover:scale-105 hover:cursor-pointer "
          />
        </div>
        <div>
          <img
            src={test1}
            alt="\"
            className=" border-2 border-orange-600 md:my-1 md:hover:scale-105 hover:cursor-pointer "
          />
        </div>
      </div>
    </div>
  )
}

export default Create
