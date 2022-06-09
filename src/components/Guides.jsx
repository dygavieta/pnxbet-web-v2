import React from 'react'

import regis from '../assets/regis.png'
import verify from '../assets/verify.png'
import depo from '../assets/depo.png'
import withdraw from '../assets/withdraw.png'
const Guides = () => {
  return (
    <div name="guide" className="w-full bg-black py-6">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4 ">
        <div>
          <img src={regis} alt="\" className="guideImg" />
        </div>
        <div>
          <img src={verify} alt="\" className="guideImg" />
        </div>
        <div>
          <img src={depo} alt="\" className="guideImg" />
        </div>
        <div>
          <img src={withdraw} alt="\" className="guideImg" />
        </div>
      </div>
    </div>
  )
}

export default Guides
