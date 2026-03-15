import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }


  return (
    <div className="about-container">
      <motion.div
        className="about-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 个人简介卡片 */}
        <motion.div className="profile-card" variants={itemVariants}>
          <motion.div
            className="profile-avatar"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/imgs/touxiang.jpg"
              alt="头像"
              className="avatar-img"
              style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            />
          </motion.div>
          <h1 className="profile-name">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Yukiho
            </motion.span>
          </h1>
          <p className="profile-title">She believed she could, so she did</p>
        </motion.div>

        {/* 关于我 */}
        <motion.section className="about-section" variants={itemVariants}>
          <h2 className="section-title">
            关于我
          </h2>
          <div className="about-text">
            <p>
              我是南京邮电大学24级软件工程的学生，前端开发➡️agent开发，现在在上海小红书做b端ai出码工具，有传统业务研发经验，也了解ai产品/技术方案/ai coding相关信息。
            </p>
          </div>
        </motion.section>

        {/* 兴趣爱好 */}
        <motion.section className="interests-section" variants={itemVariants}>
          <h2 className="section-title">
            <span className="title-icon">💡</span>
            兴趣爱好
          </h2>
          <div className="interests-grid">
            {['开源贡献', '技术博客', 'UI/UX设计', '算法研究', '新技术探索', '代码优化'].map((interest, index) => (
              <motion.div
                key={interest}
                className="interest-card"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span>{interest}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 联系方式 */}
        <motion.section className="contact-section" variants={itemVariants}>
          <h2 className="section-title">
            <span className="title-icon">📧</span>
            联系我
          </h2>
          <div className="contact-links">
            {[
              { icon: '📧', text: 'Email', href: 'mailto:example@email.com' },
              { icon: '💼', text: 'GitHub', href: 'https://github.com' },
              { icon: '🔗', text: 'LinkedIn', href: 'https://linkedin.com' },
              { icon: '🐦', text: 'Twitter', href: 'https://twitter.com' }
            ].map((link, index) => (
              <motion.a
                key={link.text}
                href={link.href}
                className="contact-link"
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <span className="contact-icon">{link.icon}</span>
                <span className="contact-text">{link.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </motion.div>

      {/* 装饰性动画元素 */}
      <div className="decorative-elements">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-element"
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5
            }}
            style={{
              left: `${10 + i * 20}%`,
              top: `${20 + i * 15}%`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default About
