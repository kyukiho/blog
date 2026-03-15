import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const About = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  const skills = [
    { name: 'React', level: 90, color: '#61DAFB' },
    { name: 'JavaScript', level: 85, color: '#F7DF1E' },
    { name: 'TypeScript', level: 80, color: '#3178C6' },
    { name: 'Node.js', level: 75, color: '#339933' },
    { name: 'Python', level: 85, color: '#3776AB' },
    { name: 'CSS3', level: 88, color: '#1572B6' }
  ]

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

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: 'easeOut'
      }
    })
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
            <div className="avatar-inner">
              <span className="avatar-text">DEV</span>
            </div>
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
            <span className="title-icon">👨‍💻</span>
            关于我
          </h2>
          <div className="about-text">
            <p>
              你好！我是一名充满热情的全栈开发者，专注于构建现代化的Web应用程序。
              我热爱探索新技术，享受将创意转化为现实的过程。
            </p>
            <p>
              在过去的几年里，我参与了多个项目的开发，从前端界面设计到后端架构搭建，
              积累了丰富的实战经验。我相信代码不仅是解决问题的工具，更是一种艺术表达。
            </p>
            <p>
              除了编程，我还喜欢分享技术心得，通过博客记录自己的学习历程，
              希望能够帮助更多对技术感兴趣的朋友。
            </p>
          </div>
        </motion.section>

        {/* 技能 */}
        <motion.section className="skills-section" variants={itemVariants}>
          <h2 className="section-title">
            <span className="title-icon">🚀</span>
            技能专长
          </h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item"
                onMouseEnter={() => setHoveredSkill(index)}
                onMouseLeave={() => setHoveredSkill(null)}
                whileHover={{ scale: 1.05 }}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <motion.div
                    className="skill-bar"
                    custom={skill.level}
                    variants={skillVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                      backgroundColor: skill.color,
                      boxShadow: hoveredSkill === index 
                        ? `0 0 20px ${skill.color}` 
                        : 'none'
                    }}
                  />
                </div>
              </motion.div>
            ))}
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
