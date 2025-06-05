'use client'

import { motion } from 'framer-motion'
import { SlideContainer } from '../slide-container'
import { Button } from '@/registry/new-york-v4/ui/button'
import { usePresentationStore } from '@/lib/presentation/store'
import { useState, useEffect } from 'react'
import { Flame } from 'lucide-react'

export function PhoenixSlide() {
  const { phoenixSignups, incrementPhoenixSignups } = usePresentationStore()
  const [hasJoined, setHasJoined] = useState(false)
  const [displayedSignups, setDisplayedSignups] = useState(phoenixSignups)

  useEffect(() => {
    setDisplayedSignups(phoenixSignups)
  }, [phoenixSignups])

  const handleJoin = () => {
    if (!hasJoined) {
      incrementPhoenixSignups()
      setHasJoined(true)
    }
  }

  const challenges = [
    { icon: '🎯', text: 'Pick one tedious task you do repeatedly' },
    { icon: '🤖', text: 'Use AI to automate or accelerate it' },
    { icon: '⏱️', text: 'Measure the time saved' },
    { icon: '🚀', text: "Share your learning at next month's All Hands" },
  ]

  return (
    <SlideContainer transition="scale" className="relative overflow-hidden">
      {/* Phoenix animation background */}
      <div className="absolute inset-0">
        {/* Fire particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            initial={{ y: 0, opacity: 0 }}
            animate={{
              y: -800,
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeOut',
            }}
          >
            <Flame className="h-8 w-8 text-[#FF6B6B]" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Title with Phoenix */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-center"
        >
          <motion.div
            className="mb-4 text-8xl"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            🔥
          </motion.div>
          <h2 className="text-5xl font-bold text-white">PROJECT PHOENIX</h2>
          <p className="mt-2 text-xl text-[#FF6B6B]">Your 30-Day Challenge</p>
        </motion.div>

        {/* Challenge steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mb-8 space-y-4"
        >
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="flex items-center space-x-4 rounded-lg bg-black/40 p-4 backdrop-blur-sm"
            >
              <span className="text-3xl">{challenge.icon}</span>
              <span className="text-lg text-white">{challenge.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Join button and counter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center"
        >
          <Button
            onClick={handleJoin}
            disabled={hasJoined}
            size="lg"
            className={`transform transition-all ${
              hasJoined
                ? 'bg-green-500 hover:bg-green-600'
                : 'bg-[#FF6B6B] hover:bg-[#FF6B6B]/80 hover:scale-105'
            }`}
          >
            {hasJoined ? '✓ Joined' : 'Join the Challenge'}
          </Button>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <p className="text-lg text-white/60">Builders joined:</p>
            <motion.p
              className="text-5xl font-bold text-[#FF6B6B]"
              key={displayedSignups}
              initial={{ scale: 1.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 10 }}
            >
              {displayedSignups}
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Resources */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="mt-12 text-center text-white/80"
        >
          <p className="text-lg">Resources launching today:</p>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white/10 px-4 py-1 text-sm">
              AI Workflow Masterclass
            </span>
            <span className="rounded-full bg-white/10 px-4 py-1 text-sm">
              #ai-pioneers Slack
            </span>
            <span className="rounded-full bg-white/10 px-4 py-1 text-sm">
              Context Management Guide
            </span>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  )
}