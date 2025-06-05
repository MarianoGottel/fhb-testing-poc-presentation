'use client'

import { motion } from 'framer-motion'
import { SlideContainer } from '../slide-container'
import { useState, useEffect } from 'react'

const rotatingWords = ['Builders', 'Innovators', 'Creators', 'Visionaries', 'Pioneers']

export function OpeningSlide() {
  const [displayedText, setDisplayedText] = useState('')
  const [rotatingText, setRotatingText] = useState('')
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isBaseTypingComplete, setIsBaseTypingComplete] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  
  const baseText = 'From Engineers to '
  
  useEffect(() => {
    // Type out the base text first
    let charIndex = 0
    const typingInterval = setInterval(() => {
      if (charIndex <= baseText.length) {
        setDisplayedText(baseText.slice(0, charIndex))
        charIndex++
      } else {
        clearInterval(typingInterval)
        setIsBaseTypingComplete(true)
      }
    }, 100)
    
    return () => clearInterval(typingInterval)
  }, [])
  
  useEffect(() => {
    if (!isBaseTypingComplete) return
    
    const currentWord = rotatingWords[currentWordIndex]
    
    if (!isDeleting) {
      // Typing mode
      const typeInterval = setInterval(() => {
        setRotatingText((prev) => {
          if (prev.length < currentWord.length) {
            return currentWord.slice(0, prev.length + 1)
          } else {
            clearInterval(typeInterval)
            setTimeout(() => setIsDeleting(true), 3000)
            return prev
          }
        })
      }, 100)
      
      return () => clearInterval(typeInterval)
    } else {
      // Deleting mode
      const deleteInterval = setInterval(() => {
        setRotatingText((prev) => {
          if (prev.length > 0) {
            return prev.slice(0, -1)
          } else {
            clearInterval(deleteInterval)
            setIsDeleting(false)
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length)
            return prev
          }
        })
      }, 50)
      
      return () => clearInterval(deleteInterval)
    }
  }, [isBaseTypingComplete, currentWordIndex, isDeleting])

  return (
    <SlideContainer transition="fade" className="bg-gradient-to-br from-[#0A0A0A] to-[#003366]/20">
      <div className="relative flex items-center justify-center min-h-full">
        <div className="text-center">
          {/* Main Title with typing effect */}
          <motion.div
            className="mb-12 text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl relative inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {/* Container that maintains consistent width */}
            <div className="flex items-baseline justify-center whitespace-nowrap ml-[10%]">
              {/* Left side - stays fixed */}
              <span
                className="text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(to right, #66B2FF, #4ECDC4)',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  lineHeight: '1.2',
                  paddingRight: '0.3ch',
                }}
              >
                {displayedText}
              </span>
              {/* Right side - fixed width container for rotating words */}
              <div className="relative inline-flex items-baseline" style={{ width: '12ch', textAlign: 'left' }}>
                <span
                  className="text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #4ECDC4, #66B2FF)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                  }}
                >
                  {rotatingText}
                </span>
                <motion.span
                  className="inline-block h-[0.8em] w-1 bg-[#66B2FF] ml-1"
                  animate={{
                    opacity: [1, 0, 1],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              </div>
            </div>
          </motion.div>

          <motion.p
            className="mb-2 text-xl text-white/80 md:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Embracing the Age of AI
          </motion.p>

          <motion.div
            className="mt-16 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <h2 className="text-3xl font-light text-white md:text-4xl">
              Project Aurora
            </h2>
            <p className="mt-2 text-2xl text-[#66B2FF] md:text-3xl">
              Engineering All Hands
            </p>
          </motion.div>

          {/* Date */}
          <motion.p
            className="text-xl text-white/60 md:text-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            June 5th, 2025
          </motion.p>
        </div>
      </div>
    </SlideContainer>
  )
}