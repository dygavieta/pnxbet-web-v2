import React from 'react'

import regis from '../../assets/register-slides/regis-name.png'
import verify from '../../assets/verify-slides/verify-name.png'
import deposit from '../../assets/deposit-slides/depo-name.png'
import withdraw from '../../assets/withdraw-slides/with-name.png'

import Slider from '../Slider'
import RegisContent from '../Guides/RegisContent'
import VerifyContent from '../Guides/VerifyContent'
import DepoContent from '../Guides/DepoContent'
import WithContent from '../Guides/WithContent'

import { ChangeTitle } from '../Utilities/BasicFunctions'

const Guide = () => {
  ChangeTitle('PNXBET - Guide Section')
  return (
    <div className="h-full w-full px-2 py-28 bg-black">
      <div className="max-w-[1240px] mx-auto ">
        <div className="border">
          <div className="border">
            <img src={regis} alt="" className="w-full" />
          </div>
          <Slider
            url={'PNXBET - Registration Guide'}
            theme={RegisContent}
            banner={regis}
            modalName={'registration_guide'}
          />
        </div>
        <div className=" my-6  border">
          <div className="border  ">
            <img src={verify} alt="" className="w-full" />
          </div>
          <Slider
            url={'PNXBET - Verification Guide'}
            theme={VerifyContent}
            banner={verify}
            modalName={'verification_guide'}
          />
        </div>
        <div className=" my-6  border">
          <div className="border  ">
            <img src={deposit} alt="" className="w-full" />
          </div>
          <Slider
            url={'PNXBET - Deposit Guide'}
            theme={DepoContent}
            banner={deposit}
            modalName={'deposit_guide'}
          />
        </div>
        <div className="border">
          <div className="border  ">
            <img src={withdraw} alt="" className="w-full" />
          </div>
          <Slider
            url={'PNXBET - Withdrawal Guide'}
            theme={WithContent}
            banner={withdraw}
            modalName={'withdrawal_guide'}
          />
        </div>
      </div>
    </div>
  )
}

export default Guide
