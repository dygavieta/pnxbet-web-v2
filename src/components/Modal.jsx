import React from 'react'

import regis from '../assets/register-slides/regis-name.png'
import { XIcon } from '@heroicons/react/outline'

const Modal = (setModal) => {
  const click = () => {
    setModal(false)
  }
  return (
    <div className="w-full">
      <div className="fixed mx-auto mt-20 bg-gray-500 inset-0 z-10 opacity-100 ">
        <div className="flex place-content-end h-[80px] bg-fuchsia-600 ">
          <XIcon className=" w-7 cursor-pointer" onClick={click} />
        </div>

        <div className="max-w-[1240px] h-screen bg-gray-500 p-28 mx-auto  ">
          <div></div>
          <div>
            <img src={regis} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
