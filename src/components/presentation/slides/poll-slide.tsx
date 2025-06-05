'use client'

import { motion } from 'framer-motion'
import { SlideContainer } from '../slide-container'

export function PollSlide() {
  const options = [
    'Too many tools, too fast',
    "Don't know where to start",
    'Concerned about job security',
    'Pride in my craft',
    'All of the above',
  ]

  return (
    <SlideContainer transition="fade">
      <div className="w-full max-w-3xl">
        <motion.h2
          className="mb-12 text-center text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What's holding you back from using AI more?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {options.map((option, index) => (
            <motion.div
              key={option}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.15 }}
              className="flex items-center space-x-4 rounded-lg border border-white/20 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white/40 text-white/60">
                {index + 1}
              </div>
              <span className="text-xl text-white">{option}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-center"
        >
          <p className="text-2xl text-white">
            I understand each position.
          </p>
          <p className="mt-2 text-2xl text-white">
            Because what's happening right now{' '}
            <span className="font-bold text-[#66B2FF]">is overwhelming.</span>
          </p>
        </motion.div>
      </div>
    </SlideContainer>
  )
}