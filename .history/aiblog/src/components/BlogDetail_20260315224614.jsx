import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import './BlogDetail.css'
import 'highlight.js/styles/atom-one-dark.css'

const BlogDetail = () => {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    // 加载markdown文件
    const loadBlog = async () => {
      try {
        const response = await fetch(`/blogs/${id}.md`)
        const text = await response.text()
        setMarkdown(text)
        
        // 设置博客元数据
        const blogMeta = {
          'liushuizhang': { title: '实习日记流水账', date: '2026-03-11' },
          'web3-intro': { title: 'Web3.0 完全指南', date: '2026-02-25' },
          'react-performance': { title: 'React 性能优化最佳实践', date: '2026-02-20' }
        }
        setBlog(blogMeta[id])
      } catch (error) {
        console.error('Failed to load blog:', error)
      }
    }
    
    loadBlog()
  }, [id])

  if (!blog) {
    return <div className="loading">加载中...</div>
  }

  return (
    <motion.div
      className="blog-detail"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="back-button">
        <motion.span
          whileHover={{ x: -5 }}
          transition={{ duration: 0.2 }}
        >
          ← 返回首页
        </motion.span>
      </Link>
      
      <motion.article
        className="article"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <header className="article-header">
          <h1 className="article-title glow">{blog.title}</h1>
          <div className="article-meta">
            <span className="article-date">📅 {blog.date}</span>
          </div>
        </header>
        
        <div className="article-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </motion.article>
    </motion.div>
  )
}

export default BlogDetail
