'use client'

import { motion } from 'framer-motion'
import { SlideContainer } from '../slide-container'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import { ChevronRight } from 'lucide-react'

interface PodStage {
  version: string
  title: string
  roles: {
    title: string
    description: string
  }[]
  output: string
  color: string
}

const podStages: PodStage[] = [
  {
    version: '1.0',
    title: 'Traditional Pod',
    roles: [
      { title: 'Lead Engineer', description: 'Architect & Coder' },
      { title: 'Engineers', description: 'Coders' },
      { title: 'Product', description: 'Requirements' },
    ],
    output: 'Features',
    color: '#6C757D',
  },
  {
    version: '2.0',
    title: 'AI-Enhanced Pod (Current)',
    roles: [
      { title: 'Lead Engineer', description: 'Orchestrator & Visionary' },
      { title: 'Engineers', description: 'AI Directors & Quality Guardians' },
      { title: 'Product', description: 'Co-Creator' },
    ],
    output: 'Solutions at 10x speed',
    color: '#66B2FF',
  },
  {
    version: '3.0',
    title: 'AI-Native Builder Pod',
    roles: [
      { title: 'Lead Builder', description: 'Systems Thinker' },
      { title: 'Builders', description: 'Multi-disciplinary Creators' },
      { title: 'AI Agents', description: 'Swarm of executors' },
    ],
    output: 'Entire products in days',
    color: '#4ECDC4',
  },
]

export function EvolutionSlide() {
  const [currentStage, setCurrentStage] = useState(0) // Start at traditional stage (1.0)

  return (
    <SlideContainer transition="slide">
      <div className="w-full max-w-6xl">
        <motion.h2
          className="mb-12 text-center text-5xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Aurora Pod Evolution
        </motion.h2>

        {/* Progress indicators */}
        <div className="mb-12 flex justify-center space-x-8">
          {podStages.map((stage, index) => (
            <motion.button
              key={stage.version}
              onClick={() => setCurrentStage(index)}
              className={cn(
                'relative px-6 py-3 text-lg font-medium transition-all',
                currentStage === index
                  ? 'text-white'
                  : 'text-white/40 hover:text-white/60'
              )}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {stage.title}
              {currentStage === index && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#66B2FF] to-[#4ECDC4]"
                  layoutId="activeIndicator"
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* Pod visualization */}
        <motion.div
          key={currentStage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div
            className="relative rounded-2xl border-2 p-8"
            style={{ borderColor: podStages[currentStage].color }}
          >
            {/* Version badge */}
            <div
              className="absolute -top-4 left-8 z-10 rounded-full px-4 py-1 text-sm font-bold"
              style={{
                backgroundColor: podStages[currentStage].color,
                color: '#0A0A0A',
              }}
            >
              Pod {podStages[currentStage].version}
            </div>

            {/* Unified Team badge for AI-Native Builder Pod */}
            {currentStage === 2 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 right-8 z-10 rounded-full bg-[#0A0A0A] border border-[#4ECDC4] px-4 py-1"
              >
                <span className="text-sm font-medium text-[#4ECDC4]">Unified Team • No rigid roles</span>
              </motion.div>
            )}

            {/* Roles */}
            <div className="mb-8 space-y-4">
              {podStages[currentStage].roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div
                    className="h-12 w-12 rounded-full"
                    style={{ backgroundColor: podStages[currentStage].color }}
                  />
                  <div>
                    <h4 className="text-xl font-semibold text-white">{role.title}</h4>
                    <p className="text-white/60">{role.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Output */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="border-t border-white/20 pt-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-lg text-white/60">Output:</span>
                <span className="text-xl font-semibold text-white">
                  {podStages[currentStage].output}
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Navigation hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 flex justify-center"
        >
          {currentStage < podStages.length - 1 && (
            <button
              onClick={() => setCurrentStage(currentStage + 1)}
              className="flex items-center space-x-2 text-white/60 transition-colors hover:text-white"
            >
              <span>Next stage</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12"
        >
          <div className="relative mx-auto max-w-4xl">
            <div className="absolute inset-x-0 top-2 h-1 bg-gradient-to-r from-gray-700 via-[#66B2FF] to-[#4ECDC4]" />
            
            <div className="relative flex justify-between">
              {/* Past */}
              <div className="flex flex-col items-center">
                <div className="h-4 w-4 rounded-full bg-gray-700" style={{ marginTop: '1px' }} />
                <p className="mt-2 text-sm font-medium text-gray-500">Past</p>
                <p className="text-xs text-gray-600">Traditional</p>
              </div>
              
              {/* Current */}
              <div className="flex flex-col items-center">
                <motion.div
                  className="h-6 w-6 rounded-full bg-[#66B2FF]"
                  style={{ marginTop: '-1px' }}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <p className="mt-2 text-sm font-bold text-[#66B2FF]">Today</p>
                <p className="text-xs text-[#66B2FF]/80">AI-Enhanced</p>
              </div>
              
              {/* 3 Months */}
              <div className="flex flex-col items-center">
                <div className="h-4 w-4 rounded-full bg-[#4ECDC4]" style={{ marginTop: '1px' }} />
                <p className="mt-2 text-sm font-medium text-white/60">3 Months</p>
                <p className="text-xs text-white/40">Transition</p>
              </div>
              
              {/* 6 Months */}
              <div className="flex flex-col items-center">
                <div className="h-4 w-4 rounded-full bg-[#4ECDC4]" style={{ marginTop: '1px' }} />
                <p className="mt-2 text-sm font-medium text-[#4ECDC4]">6 Months</p>
                <p className="text-xs text-[#4ECDC4]/80">Builders</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SlideContainer>
  )
}