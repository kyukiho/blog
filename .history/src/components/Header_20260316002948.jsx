import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Header.css'

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="header-content">
        <Link to="/" className="logo">
          <motion.span
            className="logo-text glow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            &lt;My<span className="logo-accent">Blog</span>/&gt;
          </motion.span>
        </Link>
        <nav className="nav">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="{`${import.meta.env.BASE_URL}`}" className="nav-link">首页</Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to={`${import.meta.env.BASE_URL}about`} className="nav-link">关于我</Link>
          </motion.div>
        </nav>
      </div>
      <div className="header-line"></div>
    </motion.header>
  )
}

export default Header
