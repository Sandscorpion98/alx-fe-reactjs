import { useState } from 'react'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom" 
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'

function App() {
  
  return (
    <>
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/footer" element={<Footer />} />
                </Routes>
            </div>
        </Router>
    </>
  )
}

export default App
