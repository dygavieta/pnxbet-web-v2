import React from 'react'

import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="w-full py-2 px-2 bg-black">
      <div className="max-w-[1240px] mx-auto grid grid-cols-3 md:grid-cols-4 border-b-2 border-black py-8 text-white">
        <div>
          <h6 className="font-bold uppercase pt-2">Products</h6>
          <ul>
            <li className="footItem">
              <a href="https://www.pnxbet.io/live-casino?btag=209088">
                Live Casino
              </a>
            </li>
            <li className="footItem">
              <a href="https://www.pnxbet.io/casino#/all?btag=209088">Casino</a>
            </li>
            <li className="footItem">
              <a href="https://www.pnxbet.io/pre-match?btag=209088">Sports</a>
            </li>
            <li className="footItem">
              <a href="https://www.pnxbet.io/esports?btag=209088">E-Sports</a>
            </li>
            <li className="footItem">
              <a href="https://www.pnxbet.io/poker?btag=209088">Poker</a>
            </li>
            <li className="footItem">
              <a href="https://www.pnxbet.io/virtual#/edgegaming?btag=209088">
                Virtual
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Help</h6>
          <ul>
            <li className="footItem">
              <a href="https://www.pnxbet.io/faqs?btag=209088">Faqs</a>
            </li>
            <li className="footItem">
              <a href="https://www.pnxbet.io/sport-betting-rules?btag=209088">
                Sports Betting Rules
              </a>
            </li>
            <li className="footItem">
              <a href="https://pnxbet.one">Mirror Link</a>
            </li>
            <li className="footItem">
              <a href="https://www.pnxbet.io/promotions?btag=209088">
                Promotions
              </a>
            </li>
          </ul>
        </div>
        <div className="">
          <h6 className="font-bold uppercase pt-2">Social</h6>
          <ul>
            <li className="footItem">
              <FaFacebookSquare className="text-2xl" />
            </li>
            <li className="footItem">
              <FaTwitterSquare className="text-2xl " />
            </li>
            <li className="footItem">
              <FaInstagramSquare className="text-2xl" />
            </li>
          </ul>
        </div>
        <div className="text-center text-white   col-span-3 md:col-auto  ">
          <h6 className="font-semibold uppercase pt-2">
            <p>All rights reserved and protected by law.</p>?? 2019-2022 PNXBET
            Gaming License ???365/JAZ
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Footer
