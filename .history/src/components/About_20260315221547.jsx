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
              我是南京邮电大学24级软件工程的学生，前端开发转行到agent开发，现在在上海小红书做b端ai出码工具，有传统业务研发经验，也了解ai产品/agent技术方案/ai coding相关信息。热爱技术开发，喜欢探索AI的最新发展，积极参与开源项目。
            </p>
            <p>
              大学期间在校大学生科学技术协会软件研发部前端组担任组长，在青柚工作室担任前端开发工程师，这也是对我技术学习影响非常大的两个社团，结交了很多志同道合的朋友。
            </p>
            <p>
              个人生活方面，我喜欢散步骑车、阅读写作和烹饪手工。目前求职方向是互联网大厂的agent开发岗位，梦想是可以拿到高薪offer拼搏到三十五岁退休养狗。
            </p>
            <p>
              这个博客我会用来记录每天的流水账日记防止虚度光阴、部分技术学习笔记和一些文艺小随笔，这段实习结束后可能还会更新力扣刷题笔记以及一些面经。欢迎你的关注~
            </p>
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
                { icon: '📧', text: 'rachel060513@gmail.com' },
                { icon: '💼', text: 'https://github.com/kyukiho', href: 'https://github.com/kyukiho' },
                { icon: '🔗', text: 'https://xhslink.com/m/185n7E5ovju', href: 'https://xhslink.com/m/185n7E5ovju' },
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
            target="_blank"
            rel="noopener noreferrer"
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
