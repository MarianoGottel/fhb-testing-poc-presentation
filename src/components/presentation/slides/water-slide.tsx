'use client'

import { motion } from 'framer-motion'
import { SlideContainer } from '../slide-container'
import { useEffect, useState } from 'react'

export function WaterSlide() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const quotes = [
    "Code is like water.",
    "It flows, it changes, it adapts.",
    "When we hold water too tightly,",
    "it escapes through our fingers.",
    "When we guide its flow,",
    "we can direct rivers."
  ]

  return (
    <SlideContainer transition="custom" className="relative overflow-hidden">
      {/* Water effect background */}
      <div className="absolute inset-0">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="water">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.02"
                numOctaves="3"
                result="turbulence"
              />
              <feColorMatrix in="turbulence" type="saturate" values="2" />
            </filter>
          </defs>
          <motion.rect
            width="100%"
            height="100%"
            filter="url(#water)"
            opacity="0.1"
            fill="#66B2FF"
            animate={{
              x: mousePosition.x * 0.01,
              y: mousePosition.y * 0.01,
            }}
            transition={{ type: 'spring', damping: 30 }}
          />
        </svg>
      </div>

      {/* Water symbols */}
      <motion.div
        className="absolute left-1/4 top-1/4 text-6xl"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        💧
      </motion.div>

      <motion.div
        className="absolute right-1/4 top-1/3 text-8xl"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        🌊
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3 text-7xl"
        animate={{
          y: [0, -25, 0],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      >
        🏞️
      </motion.div>

      {/* Quotes */}
      <div className="relative z-10 max-w-4xl space-y-8 text-center">
        {quotes.map((quote, index) => (
          <motion.p
            key={index}
            className="text-2xl font-light text-white md:text-3xl lg:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.8,
              duration: 1,
              ease: 'easeOut',
            }}
            style={{
              textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
            }}
          >
            {quote}
          </motion.p>
        ))}
      </div>

      {/* Bottom message */}
      <motion.div
        className="absolute bottom-16 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5, duration: 1 }}
      >
        <p className="text-xl text-white/80">
          Code should be flowing just like water
        </p>
      </motion.div>
    </SlideContainer>
  )
}