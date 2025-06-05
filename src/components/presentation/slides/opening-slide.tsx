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

        {/* Title */}
        <motion.h1
          className="mb-8 text-6xl font-bold text-white md:text-7xl lg:text-8xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Project Aurora
        </motion.h1>

        <motion.h2
          className="mb-12 text-3xl font-light text-[#66B2FF] md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Engineering All Hands
        </motion.h2>

        {/* Date */}
        <motion.p
          className="text-xl text-white/60 md:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          June 5th, 2025
        </motion.p>

        {/* Subtitle */}
        <motion.p
          className="mt-8 text-lg text-white/80 md:text-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          From Engineers to Builders: Embracing the Age of AI
        </motion.p>
      </div>
    </SlideContainer>
  )
}