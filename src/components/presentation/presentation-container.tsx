'use client'

import { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { usePresentationStore } from '@/lib/presentation/store'
import { cn } from '@/lib/utils'

interface PresentationContainerProps {
  children: ReactNode
  className?: string
}

export function PresentationContainer({ children, className }: PresentationContainerProps) {
  const { isFullscreen, isTransitioning } = usePresentationStore()

  return (
    <div
      className={cn(
        'relative min-h-screen overflow-hidden bg-[#0A0A0A]',
        isFullscreen && 'cursor-none',
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key="presentation-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="h-full w-full"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}