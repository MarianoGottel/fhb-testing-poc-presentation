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
      <div className="w-full max-w-4xl">
        <motion.h2
          className="mb-12 text-center text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Current AI Adoption Dashboard
        </motion.h2>

        <motion.div
          className="rounded-lg bg-black/40 p-8 backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <AnimatedMetric
            label="Active Cursor AI Users"
            value={23}
            target={80}
            color="#66B2FF"
          />

          <AnimatedMetric
            label="AI Tool Utilization"
            value={20}
            target={80}
            color="#4ECDC4"
          />

          <AnimatedMetric
            label="Code Generation Adoption"
            value={15}
            target={70}
            color="#FF6B6B"
          />

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="text-3xl font-bold text-[#66B2FF]">Explorers</div>
              <div className="text-lg text-white/60">~20%</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="text-3xl font-bold text-[#4ECDC4]">Cautious</div>
              <div className="text-lg text-white/60">~50%</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="text-3xl font-bold text-[#FF6B6B]">Resistant</div>
              <div className="text-lg text-white/60">~30%</div>
            </motion.div>
          </div>
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