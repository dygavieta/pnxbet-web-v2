import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Guide from './components/Pages/Guide'
import Home from './components/Pages/Home'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="guides/registration_guide" element={<Guide />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
