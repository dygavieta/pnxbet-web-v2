import React from 'react'

import regis from '../assets/regis.png'
import verify from '../assets/verify.png'
import depo from '../assets/depo.png'
import withdraw from '../assets/withdraw.png'
import { Link } from 'react-router-dom'
const Guides = () => {
  return (
    <div name="guide" className="w-full bg-black py-6 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-4 ">
        <div>
          <Link to="/guides/registration_guide">
            <img
              src={regis}
              alt="\"
              className="guideImg"
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            />
          </Link>
        </div>
        <div>
          <Link to="/guides/verification_guide">
            <img
              src={verify}
              alt="\"
              className="guideImg"
              onClick={() => {
                window.scrollTo(0, 550)
              }}
            />
          </Link>
        </div>
        <div>
          <Link to="/guides/deposit_guide">
            <img
              src={depo}
              alt="\"
              className="guideImg"
              onClick={() => {
                window.scrollTo(0, 1150)
              }}
            />
          </Link>
        </div>
        <div>
          <Link to="/guides/withdrawal_guide">
            <img
              src={withdraw}
              alt="\"
              className="guideImg"
              onClick={() => {
                window.scrollTo(0, 1450)
              }}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Guides
