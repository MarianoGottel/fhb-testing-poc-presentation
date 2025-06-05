'use client'

import { motion } from 'framer-motion'
import { SlideContainer } from '../slide-container'

const taoQuote = [
  "The Builder stays behind,",
  "that is why she's ahead.",
  "She is detached,",
  "thus at one with all.",
  "Through selfless action",
  "she is perfectly fulfilled."
]

export function PhilosophySlide() {
  return (
    <SlideContainer transition="fade" className="bg-gradient-to-br from-[#0A0A0A] via-[#0A0A0A] to-[#003366]/10">
      {/* Zen circle background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="h-[600px] w-[600px] rounded-full border-[2px] border-white" />
      </motion.div>

      <div className="relative z-10 max-w-3xl text-center">
        {/* Quote */}
        <div className="space-y-4">
          {taoQuote.map((line, index) => (
            <motion.p
              key={index}
              className="text-2xl font-light text-white md:text-3xl lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.6,
                duration: 0.8,
                ease: 'easeOut',
              }}
              style={{
                textShadow: '0 2px 20px rgba(0, 0, 0, 0.8)',
              }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Attribution */}
        <motion.p
          className="mt-12 text-lg italic text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4, duration: 1 }}
        >
          — Adapted from the Tao Te Ching
        </motion.p>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5, duration: 1 }}
          className="mt-16"
        >
          <p className="text-xl text-white/80">
            The best engineers of tomorrow won't be measured by lines of code written,
          </p>
          <p className="mt-2 text-xl font-semibold text-[#66B2FF]">
            but by problems solved, value created, and ideas brought to life.
          </p>
        </motion.div>

        {/* Breathing dot */}
        <motion.div
          className="mx-auto mt-12 h-2 w-2 rounded-full bg-white"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>
    </SlideContainer>
  )
}