import React from 'react'

import casinoImg from '../assets/slotmachine.png'
import live from '../assets/playing-card.png'
import esport from '../assets/gaming.png'
import slot from '../assets/slot-machine.png'
import sport from '../assets/trophy.png'
const Hero = () => {
  return (
    <div className="w-full h-screen   flex flex-col justify-between">
      <div className=" md:grid grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 pt-6">
          <p className="text-2xl">Play anytime, anywhere</p>
          <h1 className="py-3 text-4xl md:text-6xl font-bold">
            PNXBET ONLINE CASINO
          </h1>
          <p className="text-1xl">
            A premiere licensed, cyprto-based online casino
          </p>
          <button className="bg-orange-600 border-orange-600 text-white w-[70%]">
            Bet Now
          </button>
        </div>
        <div>
          <img src={casinoImg} alt="/" className="w-full" />
        </div>
        <div
          className="absolute flex flex-col  bottom-[-1%] py-0 min-w-full   border-none
          md:min-w-[760px] md:bottom-[2%] md:py-4 left-1/2 transform -translate-x-1/2  bg-slate-400 md:border border-r-zinc-300 rounded-xl text-center shadow-xl "
        >
          <p className="text-xl font-semibold md:text-4xl ">PNXBET SERVICES</p>
          <div className="grid grid-cols-2 flex-wrap justify-between md:flex md:flex-nowrap ">
            <p className="flex px-2 py-2 items-center text-xs text-slate-600  md:text-xl flex-col ">
              <img src={live} className="w-[15%] md:w-[20%]  " /> Live Casino
              Dealers
            </p>
            <p className="flex  px-2 py-2 items-center text-xs text-slate-600  md:text-xl flex-col">
              <img src={slot} className="w-[15%] md:w-[20%]  " /> Slot Machine
            </p>
            <p className="flex  px-2 py-2 items-center text-xs text-slate-600  md:text-xl flex-col">
              <img src={sport} className="w-[15%] md:w-[20%]  " /> Sports
              Betting
            </p>
            <p className="flex  px-2 py-2 items-center text-xs text-slate-600  md:text-xl flex-col">
              <img src={esport} className="w-[15%] md:w-[20%]  " /> E-sports
              Betting
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
