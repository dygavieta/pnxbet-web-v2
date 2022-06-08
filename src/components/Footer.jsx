import React from 'react'

const Footer = () => {
  return (
    <div className="w-full py-2 px-2 bg-black">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 border-b-2 border-black py-8 text-white">
        <div>
          <h6 className="font-bold uppercase pt-2">Products</h6>
          <ul>
            <li className="py-1">Live Casino</li>
            <li className="py-1">Slot Machines</li>
            <li className="py-1">Sports Betting</li>
            <li className="py-1">E-Sports Betting</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Help</h6>
          <ul>
            <li className="py-1">Faqs</li>
            <li className="py-1">Sports Betting Rules</li>
            <li className="py-1">Mirror Link</li>
            <li className="py-1">Promotions</li>
          </ul>
        </div>
        <div>
          <h6 className="font-bold uppercase pt-2">Social</h6>
          <ul>
            <li className="py-1">FB</li>
            <li className="py-1">Twitter</li>
            <li className="py-1">Insta</li>
          </ul>
        </div>
        <div className="text-left">
          <h6 className="font-semibold uppercase pt-2">
            © 2019-2022 PNXBET Gaming License №365/JAZ
            <p>All rights reserved and protected by law.</p>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default Footer
