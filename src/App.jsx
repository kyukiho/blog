import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Header from './components/Header'
import BlogList from './components/BlogList'
import BlogDetail from './components/BlogDetail'
import About from './components/About'
import ParticleBackground from './components/ParticleBackground'
import MouseFollower from './components/MouseFollower'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <ParticleBackground />
        <MouseFollower />
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="main-content"
        >
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  )
}

export default App
