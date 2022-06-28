import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './components/Pages/Home'
import Guide from './components/Pages/Guide'
import PageNotFound from './components/Pages/PageNotFound'
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="home" element={<Home />} />
          <Route exact path="" element={<Home />} />
          <Route exact path="/guides" element={<Guide />} />
          <Route exact path="/guides/:guide" element={<Guide />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
