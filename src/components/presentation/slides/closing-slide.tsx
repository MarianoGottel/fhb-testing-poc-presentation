'use client'

import { motion } from 'framer-motion'
import { SlideContainer } from '../slide-container'

export function ClosingSlide() {
  return (
    <SlideContainer transition="fade" className="bg-gradient-to-b from-[#0A0A0A] to-[#003366]/30">
      <div className="relative text-center">
        {/* Split screen visualization */}
        <div className="mb-16 flex justify-center space-x-8">
          {/* Engineer side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 0.85, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="rounded-lg border border-gray-500 bg-gray-800/80 p-8">
              <h3 className="mb-4 text-2xl text-gray-300">Engineer</h3>
              <div className="h-32 w-32">
                <svg viewBox="0 0 100 100" className="opacity-80">
                  <rect x="20" y="20" width="60" height="10" fill="#6C757D" />
                  <rect x="20" y="40" width="50" height="10" fill="#6C757D" />
                  <rect x="20" y="60" width="55" height="10" fill="#6C757D" />
                </svg>
              </div>
              <p className="mt-4 text-sm text-gray-400">Writing code alone</p>
            </div>
            <motion.div
              className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/40 to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1, duration: 1 }}
            />
          </motion.div>

          {/* Arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex items-center"
          >
            <span className="text-4xl text-white">→</span>
          </motion.div>

          {/* Builder side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="rounded-lg border border-[#66B2FF] bg-black/40 p-8">
              <h3 className="mb-4 text-2xl font-bold text-[#66B2FF]">Builder</h3>
              <div className="h-32 w-32">
                <motion.svg
                  viewBox="0 0 100 100"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    stroke="#66B2FF"
                    strokeWidth="3"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  <motion.path
                    d="M 30 50 L 50 30 L 70 50 L 50 70 Z"
                    fill="#4ECDC4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 2 }}
                  />
                </motion.svg>
              </div>
              <p className="mt-4 text-sm font-semibold text-[#4ECDC4]">
                Creating at 10x speed
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="space-y-6"
        >
          <p className="text-3xl text-white/80">
            You can be the engineer who resisted the shift...
          </p>
          <p className="text-3xl font-bold text-white">
            Or the builder who shaped the future.
          </p>
        </motion.div>

        {/* First Horizon message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
          className="mt-12"
        >
          <p className="text-xl text-[#66B2FF]">
            At First Horizon, we're not just adopting AI.
          </p>
          <p className="text-xl font-semibold text-[#4ECDC4]">
            We're pioneering how banking gets built in the AI age.
          </p>
        </motion.div>

        {/* Final question */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 4, duration: 1 }}
          className="mt-16 pb-8"
        >
          <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            The only question is:
          </h2>
          <motion.h1
            className="mt-4 pb-2 text-6xl font-bold text-transparent md:text-7xl lg:text-8xl"
            style={{
              backgroundImage: 'linear-gradient(to right, #66B2FF, #4ECDC4)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              lineHeight: '1.2',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.5, duration: 1 }}
          >
            Will you?
          </motion.h1>
        </motion.div>
      </div>
    </SlideContainer>
  )
}