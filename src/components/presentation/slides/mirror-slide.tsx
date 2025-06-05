'use client'

import { motion } from 'framer-motion'
import { SlideContainer } from '../slide-container'
import { Progress } from '@/registry/new-york-v4/ui/progress'
import { useEffect, useState } from 'react'

interface MetricProps {
  label: string
  value: number
  target: number
  color: string
}

function AnimatedMetric({ label, value, target, color }: MetricProps) {
  const [currentValue, setCurrentValue] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentValue(value)
    }, 500)

    return () => clearTimeout(timer)
  }, [value])

  return (
    <div className="mb-8">
      <div className="mb-2 flex justify-between text-lg">
        <span className="text-white/80">{label}</span>
        <span className="font-mono text-white">{currentValue}%</span>
      </div>
      <div className="relative">
        <Progress value={currentValue} className="h-4 bg-gray-800" />
        {target && (
          <div
            className="absolute top-0 h-4 w-[2px] bg-white/40"
            style={{ left: `${target}%` }}
          />
        )}
      </div>
    </div>
  )
}

export function MirrorSlide() {
  return (
    <SlideContainer transition="slide">
      <div className="w-full max-w-5xl">
        <motion.h2
          className="mb-12 text-center text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Current AI Adoption within Project Aurora
        </motion.h2>

        <motion.div
          className="space-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {/* Engineer Categories */}
          <div className="grid grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="rounded-lg bg-[#66B2FF]/10 border border-[#66B2FF]/30 p-6 text-center"
            >
              <div className="text-4xl font-bold text-[#66B2FF]">20%</div>
              <div className="mt-2 text-xl font-semibold text-[#66B2FF]">Explorers</div>
              <p className="mt-2 text-sm text-white/60">Fully embracing AI</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="rounded-lg bg-[#4ECDC4]/10 border border-[#4ECDC4]/30 p-6 text-center"
            >
              <div className="text-4xl font-bold text-[#4ECDC4]">50%</div>
              <div className="mt-2 text-xl font-semibold text-[#4ECDC4]">Cautious</div>
              <p className="mt-2 text-sm text-white/60">Using for simple tasks</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="rounded-lg bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 p-6 text-center"
            >
              <div className="text-4xl font-bold text-[#FF6B6B]">30%</div>
              <div className="mt-2 text-xl font-semibold text-[#FF6B6B]">Resistant</div>
              <p className="mt-2 text-sm text-white/60">Holding onto old ways</p>
            </motion.div>
          </div>

          {/* Key Metrics */}
          <motion.div
            className="rounded-lg bg-black/40 p-8 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <h3 className="mb-6 text-center text-2xl font-semibold text-white">AI Tool Utilization</h3>
            
            <div className="space-y-6">
              <div>
                <div className="mb-2 flex justify-between text-lg">
                  <span className="text-white/80">Active Cursor AI Users</span>
                  <span className="font-mono text-[#66B2FF]">23%</span>
                </div>
                <div className="relative h-4 overflow-hidden rounded-full bg-gray-800">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#66B2FF] to-[#66B2FF]/80"
                    initial={{ width: 0 }}
                    animate={{ width: '23%' }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                  />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between text-lg">
                  <span className="text-white/80">AI-Generated Code Adoption</span>
                  <span className="font-mono text-[#4ECDC4]">15%</span>
                </div>
                <div className="relative h-4 overflow-hidden rounded-full bg-gray-800">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#4ECDC4] to-[#4ECDC4]/80"
                    initial={{ width: 0 }}
                    animate={{ width: '15%' }}
                    transition={{ delay: 1.4, duration: 0.8 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <p className="text-xl text-white/80">
            We're operating at <span className="font-bold text-[#FF6B6B]">20%</span> of our potential
          </p>
        </motion.div>
      </div>
    </SlideContainer>
  )
}