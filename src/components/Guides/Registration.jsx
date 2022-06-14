import React from 'react'

import regis from '../../assets/register-slides/regis-name.png'
import verify from '../../assets/verify-name.png'
import withdraw from '../../assets/with-name.png'
import depo from '../../assets/depo-name.png'

import Slider from '../Slider'

const Registration = () => {
  return (
    <div className="h-full w-full px-2 py-28  bg-black ">
      <div className="max-w-[1240px] mx-auto ">
        <div className=" my-6  border">
          <div className="border  ">
            <img src={regis} alt="" className="w-full" />
          </div>
          <Slider />
        </div>
        <div className=" my-6  border">
          <div className="border  ">
            <img src={verify} alt="" className="w-full" />
          </div>
          <Slider />
        </div>
        <div className=" my-6  border">
          <div className="border  ">
            <img src={depo} alt="" className="w-full" />
          </div>
          <Slider />
        </div>
        <div className=" my-6 border">
          <div className="border  ">
            <img src={withdraw} alt="" className="w-full" />
          </div>
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default Registration
