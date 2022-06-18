import React from 'react'

import regis from '../assets/register-slides/regis-name.png'
import { XIcon } from '@heroicons/react/outline'

const Modal = ({ open, setOpen }) => {
  const closeModal = () => {
    setOpen(false)
    document.documentElement.style.setProperty('overflow', 'visible')
  }
  return (
    <>
      {open && (
        <div className="w-full">
          <div className="fixed mx-auto mt-20 bg-gray-500 inset-0 z-10 opacity-100    overflow-scroll ">
            <div className="flex place-content-end h-[80px] bg-fuchsia-600 ">
              <XIcon className=" w-7 cursor-pointer" onClick={closeModal} />
            </div>

            <div className="max-w-[1240px] h-screen bg-gray-500 p-28 mx-auto  ">
              <div>
                <img src={regis} />
              </div>
              <div>
                <img src={regis} />
              </div>
              <div>
                <img src={regis} />
              </div>
              <div>
                <img src={regis} />
              </div>
              <div>
                <img src={regis} />
              </div>
              <div>
                <img src={regis} />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
