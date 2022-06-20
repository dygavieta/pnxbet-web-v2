import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Guide from './components/Pages/Guide'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="/guides" element={<Guide />} />
          <Route path="/guides/:guide" element={<Guide />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
