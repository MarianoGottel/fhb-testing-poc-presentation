'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { usePresentationStore } from '@/lib/presentation/store'

interface SlideContainerProps {
  children: ReactNode
  className?: string
  transition?: 'fade' | 'slide' | 'scale' | 'custom'
}

const slideVariants = {
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  slide: {
    initial: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? 1000 : -1000,
      opacity: 0,
    }),
    animate: { x: 0, opacity: 1 },
    exit: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? -1000 : 1000,
      opacity: 0,
    }),
  },
  scale: {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 1.2, opacity: 0 },
  },
}

export function SlideContainer({
  children,
  className,
  transition = 'fade',
}: SlideContainerProps) {
  const { slideDirection, setTransitioning } = usePresentationStore()

  const variants = transition === 'custom' ? undefined : slideVariants[transition]

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={slideDirection}
      transition={{
        duration: 0.5,
        ease: 'easeInOut',
      }}
      onAnimationComplete={() => setTransitioning(false)}
      className={cn(
        'flex h-screen w-full flex-col items-center justify-center p-8',
        className
      )}
    >
      {children}
    </motion.div>
  )
}