import React from 'react'

import { XIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom'
const Modal = ({ open, setOpen, banner, setDelay, children }) => {
  const navigate = useNavigate()
  const closeModal = () => {
    setOpen(false)
    setDelay(true)
    document.documentElement.style.setProperty('overflow', 'visible')
    navigate('/guides')
  }

  return (
    <>
      {open && (
        <div
          className="fixed mx-auto bg-gray-300 inset-0 z-50 bg-opacity-98 overflow-scroll "
          name="guides#registration"
        >
          <div className="flex bg-black justify-between items-center h-[120px] opacity-100 px-5">
            <h1 className="text-3xl text-white font-bold mr-4 sm:text-4xl">
              PNXBET
            </h1>
            <XIcon
              className=" w-7 cursor-pointer text-white"
              onClick={closeModal}
            />
          </div>
          <hr className="border-zinc-900"></hr>
          <div className="max-w-[1240px] h-screen white mx-auto py-2 px-5">
            <div>
              <img src={banner} alt="/" />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
