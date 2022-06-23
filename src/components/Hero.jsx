import React from 'react'

import casinoImg from '../assets/slotmachine.png'
import live from '../assets/poker-table.png'
import esport from '../assets/gaming.png'
import slot from '../assets/slot-machine.png'
import sport from '../assets/trophy.png'
import poker from '../assets/playing-card.png'
import virtual from '../assets/horse.png'

const Hero = () => {
  return (
    <div
      name="hero"
      className="w-full h-full flex flex-col justify-between  py-28 bg-gradient-to-b from-orange-600 via-yellow-700 to-black"
    >
      <div className=" max-w-[1240px] m-auto md:grid grid-flow-row-dense grid-cols-2  ">
        <div className="flex flex-col justify-center md:items-start w-full px-2  ">
          <p className="text-2xl">Play anytime, anywhere</p>
          <h1 className="py-3 text-4xl md:text-6xl font-bold">
            PNXBET ONLINE CASINO
          </h1>
          <p className="text-1xl">
            A premiere licensed, cyprto-based online casino
          </p>
          <button className="animate-pulse bg-orange-600 border-orange-600 text-white w-[70%]">
            BET NOW
          </button>
        </div>
        <div>
          <img src={casinoImg} alt="/" className="w-full" />
        </div>
      </div>
      <div className="items-center text-center max-w-[1240px] m-auto py-2  border-2 border-orange-700 rounded-3xl bg-black text-white ">
        <p className="text-xl font-bold md:text-4xl ">GAMES PROVIDED</p>
        <div className="grid grid-cols-3 flex-wrap justify-between md:flex md:flex-nowrap md:py-4">
          <p className="heroGame">
            <img src={sport} className="heroIcon" />
            Sports
          </p>
          <p className="heroGame">
            <img src={slot} className="heroIcon " /> Casino
          </p>
          <p className="heroGame">
            <img src={live} className="heroIcon" /> Live Casino
          </p>
          <p className="heroGame">
            <img src={esport} className="heroIcon" /> Esports
          </p>
          <p className="heroGame">
            <img src={poker} className="heroIcon" /> Poker
          </p>
          <p className="heroGame">
            <img src={virtual} className="heroIcon" /> Virtual
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
