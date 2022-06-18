import React from 'react'

import regis from '../../assets/register-slides/regis-name.png'
import verify from '../../assets/verify-slides/verify-name.png'
import withdraw from '../../assets/with-name.png'
import depo from '../../assets/depo-name.png'

import RegisContents from '../Guides/RegisContents'
import VerifyContent from '../Guides/VerifyContent'
import Slider from '../Slider'
import DepoContent from '../Guides/DepoContent'
import WithContent from '../Guides/WithContent'

const Guide = () => {
  return (
    <div className="h-full w-full px-2 py-28 bg-black">
      <div className="max-w-[1240px] mx-auto    ">
        <div className=" my-6 border">
          <div className="border   ">
            <img src={regis} alt="" className="w-full" />
          </div>
          <Slider theme={RegisContents} />
        </div>
        <div className=" my-6  border">
          <div className="border  ">
            <img src={verify} alt="" className="w-full" />
          </div>
          <Slider theme={VerifyContent} />
        </div>
        <div className=" my-6  border">
          <div className="border  ">
            <img src={depo} alt="" className="w-full" />
          </div>
          <Slider theme={DepoContent} />
        </div>
        <div className=" my-6 border">
          <div className="border  ">
            <img src={withdraw} alt="" className="w-full" />
          </div>
          <Slider theme={WithContent} />
        </div>
      </div>
    </div>
  )
}

export default Guide
