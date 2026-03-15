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
        excerpt: '旨在用流水账的形式记录每天具体做的事防止虚度光阴',
        date: '2026-03-11',
        tags: [ '日记'],
        readTime: '15分钟'
      },
      {
        id: 'mianjing',
        title: 'agent开发网络面经整理',
        excerpt: '总结了agent开发相关的网络面试经验，涵盖常见问题和解答',
        date: '2026-03-15',
        tags: [ '面经'],
        readTime: '20分钟'
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
        WELCOME TO MY BLOG
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
