import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './BlogList.css'

const BlogList = () => {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    // 模拟加载博客列表
    const blogData = [
      {
        id: 'liushuizhang',
        title: '实习日记流水账',
        excerpt: '记录实习期间的点点滴滴，分享成长与收获...',
        date: '2026-01-28',
        tags: ['实习', '日记', '成长'],
        readTime: '3 分钟'
      },
      {
        id: 'web3-intro',
        title: 'Web3.0 完全指南',
        excerpt: '深入了解去中心化网络的核心概念，区块链技术如何重塑互联网...',
        date: '2026-02-25',
        tags: ['Web3', '区块链', '去中心化'],
        readTime: '8 分钟'
      },
      {
        id: 'react-performance',
        title: 'React 性能优化最佳实践',
        excerpt: '掌握React应用的性能优化技巧，从虚拟DOM到并发渲染...',
        date: '2026-02-20',
        tags: ['React', '前端', '性能优化'],
        readTime: '6 分钟'
      }
    ]
    setBlogs(blogData)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="blog-list">
      <motion.h1
        className="page-title glow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        技术博客
      </motion.h1>
      <motion.div
        className="blog-grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.id}
            variants={item}
            whileHover={{ scale: 1.03 }}
            className="blog-card hover-lift"
          >
            <Link to={`/blog/${blog.id}`}>
              <div className="blog-card-header">
                <div className="blog-date">{blog.date}</div>
                <div className="blog-read-time">{blog.readTime}</div>
              </div>
              <h2 className="blog-title">{blog.title}</h2>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <div className="blog-tags">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="tag">#{tag}</span>
                ))}
              </div>
              <div className="read-more">
                阅读更多 <span className="arrow">→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default BlogList
