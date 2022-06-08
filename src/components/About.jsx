import React from 'react'

import register from '../assets/register.png'
import play from '../assets/gambling.png'
import win from '../assets/bigwin.png'
const About = () => {
  return (
    <div className="w-full h-full py-2 bg-black md:py-28 ">
      <div className="max-w-[1240px] h-full mx-auto ">
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-6xl text-white">
            Trusted by players around the world
          </h2>
          <p className="text-xl py-4 text-gray-300">
            PNXBET is a premier licensed gaming operator of a wide variety of
            online casino games and sportsbook matches.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 px-2 text-center  ">
          <div className="border rounded-lg shadow-xl p-4  bg-[#212228] border-[#212228]">
            <h2 className="text-2xl font-bold md:text-4xl md:pb-4 text-white ">
              24/7 SUPPORT
            </h2>
            <p className="text-gray-400">
              PNXBET provides 24/7 betting availability by accepting bets on all
              major and most minor leagues, cups and tournaments on various
              sports and events throughout the world.
            </p>
          </div>
          <div className="border rounded-lg shadow-xl p-4 bg-[#212228] border-[#212228]">
            <h2 className="text-2xl font-bold md:text-4xl md:pb-4 text-white  ">
              50+ CATERGORIES
            </h2>
            <p className="text-gray-400">
              PNXBET accepts wagers on more than 50+ categories of sports and
              events. This includes not only the most popular sports, but also
              poker, politics, TV etc., and also electronic competitions.
            </p>
          </div>
          <div className="border rounded-lg shadow-xl p-4 bg-[#212228] border-[#212228]">
            <h2 className="text-2xl font-bold md:text-4xl md:pb-4 text-white  ">
              300 TRADERS
            </h2>
            <p className="text-gray-400">
              Live games in PNXBET are individually managed by over 300 traders,
              who use complex automated tools for market management and odds
              setting.
            </p>
          </div>
          <div className="border rounded-lg shadow-xl p-4 bg-[#212228] border-[#212228]">
            <h2 className="text-2xl font-bold md:text-4xl md:pb-4 text-white  ">
              RELIABILITY
            </h2>
            <p className="text-gray-400">
              We are holders of an ISO/IEC 0523150:2019 certificate on
              Information Security. For further details, please see our general
              terms and conditions.
            </p>
          </div>
        </div>
        <div className=" grid md:grid-cols-3 gap-2 px-2 py-4 md:py-16 ">
          <div className="border rounded-lg shadow-xl p-4 bg-[#212228] border-[#212228]">
            <h2 className="flex text-2xl text-white font-semibold">
              <img src={register} alt="/" className="w-10 mr-2" /> REGISTER
            </h2>
            <p className="text-gray-400">
              Creating an account is easy and fast in PNXBET. It allows users to
              keep using products and entitles to an account free of charge and
              with zero obligations. Manage your personal data and make
              competitive bets in the world of online gambling. Take the chance
              to be part of thousands of online casino games in one trusted
              gaming brand. Register with PNXBET now.
            </p>
          </div>
          <div className="border rounded-lg shadow-xl p-4 bg-[#212228] border-[#212228]">
            <h2 className="flex text-2xl text-white font-semibold">
              <img src={play} alt="/" className="w-10 mr-2" />
              PLAY
            </h2>
            <p className="text-gray-400">
              After registering an account, proceed onto betting on games in
              exchange for real money. Claim your $500 welcome bonus to start
              making bets on more than 140 sports types with our sportsbook and
              5,000+ casino games. Log in then select one or several bets from
              our line-up. Your bet should appear in the bet slip on the
              right-hand side of the page.
            </p>
          </div>
          <div className="border rounded-lg shadow-xl p-4 bg-[#212228] border-[#212228]">
            <h2 className="flex text-2xl text-white font-semibold">
              <img src={win} alt="/" className="w-10 mr-2" />
              WIN
            </h2>
            <p className="text-gray-400">
              It’s not all fun and games without the winning part, of course!
              The best part is that your wins are guaranteed to be big and mega
              here in PNXBET and it will only make you place your bets on
              competitive parties even more, thus increasing your chance to win
              more! It is about time to grab the opportunity to be in our
              mega-winners list and cash out winnings instantly.
            </p>
          </div>
        </div>
        <hr className=""></hr>
      </div>
    </div>
  )
}

export default About
