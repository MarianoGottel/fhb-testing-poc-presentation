'use client'

import { motion } from 'framer-motion'
import { SlideContainer } from '../slide-container'

export function OpeningSlide() {
  return (
    <SlideContainer transition="fade" className="bg-gradient-to-br from-[#0A0A0A] to-[#003366]/20">
      <div className="relative text-center">
        {/* Pulsing cursor */}
        <motion.div
          className="absolute -left-8 top-1/2 h-12 w-1 -translate-y-1/2 bg-[#66B2FF]"
          animate={{
            opacity: [1, 0, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Main Title */}
        <motion.h1
          className="mb-12 pb-2 text-5xl font-bold text-transparent md:text-6xl lg:text-7xl xl:text-8xl"
          style={{
            backgroundImage: 'linear-gradient(to right, #66B2FF, #4ECDC4)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            lineHeight: '1.2',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          From Engineers to Builders
        </motion.h1>

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
    </SlideContainer>
  )
}