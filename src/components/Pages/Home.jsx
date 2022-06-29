import React from 'react'
import About from '../About'
import Games from '../Games'
import Guides from '../Guides'
import Hero from '../Hero'
import { ChangeTitle } from '../Utilities/BasicFunctions'

const Home = () => {
  ChangeTitle('PNXBET - Online Sportsbook, Slots & Live Casino')
  return (
    <>
      <Hero />
      <About />
      <Guides />
    </>
  )
}

export default Home
