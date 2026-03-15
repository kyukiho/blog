import React, { useEffect, useRef } from 'react'
import './MouseFollower.css'

const MouseFollower = () => {
  const followerRef = useRef(null)
  const cursorRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const followerPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }

    const animate = () => {
      // 平滑跟随效果
      followerPos.current.x += (mousePos.current.x - followerPos.current.x) * 0.1
      followerPos.current.y += (mousePos.current.y - followerPos.current.y) * 0.1

      if (followerRef.current) {
        followerRef.current.style.left = `${followerPos.current.x}px`
        followerRef.current.style.top = `${followerPos.current.y}px`
      }

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animate()

    // 鼠标悬停在可点击元素上时的效果
    const handleMouseEnter = () => {
      if (followerRef.current) {
        followerRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)'
      }
    }

    const handleMouseLeave = () => {
      if (followerRef.current) {
        followerRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
      }
    }

    const clickableElements = document.querySelectorAll('a, button, .blog-card')
    clickableElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clickableElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="mouse-cursor"></div>
      <div ref={followerRef} className="mouse-follower"></div>
    </>
  )
}

export default MouseFollower
